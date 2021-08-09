import React, { useState, useEffect } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, TabContent, TabPane, Nav, NavItem, Card, CardTitle, CardText, Row, Col
} from 'reactstrap';
import classnames from 'classnames';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'
import { authenticate, logout } from '../features/counter/counterSlice'

import './Manage.css';
import axios from 'axios';

// var dispatch = useDispatch()

function Manage() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [project, setProject] = useState("");
  const [projectName, setProjectName] = useState("Project Name");

  const [projects, setProjects] = useState([]);
  const [collaborators, setCollaborators] = useState([]);
  const [nonCollaborators, setNonCollaborators] = useState([]);
  const [updatedMember, setUpdatedMember] = useState(0);
  const [selectedCollaborators, setSelectedCollaborators] = useState([]);
  const [selectedNonCollaborators, setSelectedNoneCollaborators] = useState([]);
  const [selectedIndicies, setSelectedIndicies] = useState([]);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [imgPath, setImgPath] = useState('');
  const [removed, setRemoved] = useState(false);
  
  const dispatch = useDispatch();
  const toggle = () => setDropdownOpen(prevState => !prevState);

  var collaboratorsToRemove = []

  useEffect(() => {
    axios({
      method: "GET",
      url: 'http://localhost:5000/projects/findAll'
    }).then(res => {
      setProjects(res.data)
    }).catch(error => {
      alert("fail")
    });
  }, [projectName]);

  function loadCollabs() {
    axios({
      method: "POST",
      url: 'http://localhost:5000/member/findCollaborators',
      data: { project }
    }).then(res => {
      setCollaborators(res.data)
    }).catch(error => {
      alert("fail")
    });
    axios({
      method: "POST",
      url: 'http://localhost:5000/member/findCollaborators',
      data: { project: null }
    }).then(res => {
      console.log(res.data)
      setNonCollaborators(res.data)
    }).catch(error => {
      alert("fail")
    });
  }

  const handleSelect = (e) => {
    setProjectName(e.target.innerText);
    setProject(e.target.value);
  }

  const onChangeMulti = (event) => {
    let opts = [], opt;
    let ind = []
    for (let i = 0, len = event.target.options.length; i < len; i++) {
      opt = event.target.options[i];
      if (opt.selected) {
        opts.push(opt.value);
        ind.push(i)
      }
    }
    setSelectedCollaborators(opts)
    setSelectedIndicies(ind)
  }

  const onChangeMultiAdd = (event) => {
    let opts = [], opt;
    for (let i = 0, len = event.target.options.length; i < len; i++) {
      opt = event.target.options[i];
      if (opt.selected) {
        opts.push(opt.value);
      }
    }
    setSelectedNoneCollaborators(opts)
  }

  function loadInfo() {
    axios({
      method: "POST",
      url: 'http://localhost:5000/projects/getInfo',
      data: {project}
    }).then(res => {
      console.log(res)
      setName(res.data.name)
      setDescription(res.data.description)
      setLink(res.data.project_link)
    }).catch(error => {
      alert("fail")
    });
  }

  useEffect(() => {
    if (projects != "") {
      loadCollabs();
      loadInfo();
    }
    var dropDown = document.getElementById("exampleselectMultiCollab");
    dropDown.selectedIndex = -1;
    // if (project != "") {
    //   for (var divider in document.getElementsByClassName("manage-dividers")) {
    //     divider.style.pointerEvents = "default";
    //   }
    // }
  }, [project]);

  const removeMembers = () => {
    var collabList = document.getElementById("exampleselectMultiCollab");
    var nonCollabList = document.getElementById("exampleSelectNonMulti");
    if (collabList.selectedIndex != -1) {
      for (var i = 0; i < selectedCollaborators.length; i++) {
        axios({
          method: "PUT",
          url: 'http://localhost:5000/member/updateProject',
          data: { memberId: parseInt(selectedCollaborators[i]), projectId: null }
        }).then(res => {
          axios({
            method: "POST",
            url: 'http://localhost:5000/member/findCollaborators',
            data: { project: null }
          }).then(res => {
            console.log(res.data)
            setNonCollaborators(res.data)
          }).catch(error => {
            alert("fail")
          });
        }).catch(error => {
          alert("fail")
        });
        const newCollabs = collaborators.filter(
          item => item.id !== parseInt(selectedCollaborators[i])
        );
        setCollaborators(newCollabs)
        collabList.selectedIndex = -1;
        nonCollabList.selectedIndex = -1;
      }
    }
  }

  function addMembers() {
    var nonCollabList = document.getElementById("exampleSelectNonMulti");
    var collabList = document.getElementById("exampleselectMultiCollab");
    if (nonCollabList.selectedIndex != -1) {
      for (var i = 0; i < selectedNonCollaborators.length; i++) {
        axios({
          method: "PUT",
          url: 'http://localhost:5000/member/updateProject',
          data: { memberId: parseInt(selectedNonCollaborators[i]), projectId: project }
        }).then(res => {
          axios({
            method: "POST",
            url: 'http://localhost:5000/member/findCollaborators',
            data: { project }
          }).then(res => {
            setCollaborators(res.data)
          }).catch(error => {
            alert("fail")
          });
        }).catch(error => {
          alert("fail")
        });
        const newNonCollabs = nonCollaborators.filter(
          item => item.id !== parseInt(selectedNonCollaborators[i])
        );
        setNonCollaborators(newNonCollabs)
      }

      collabList.selectedIndex = -1;
      nonCollabList.selectedIndex = -1;
    }
  }

  function saveDescription() {
    axios({
      method: "PUT", 
      url:'http://localhost:5000/projects/updateProject', 
      data: {
        id: project,
        name: name, 
        description: description,
        project_link: link,
        image_path: "imgPath"
    }
    }).then(res=>{
      alert("success")
      setProjectName(name)
    }).catch(error=>{
      alert("fail")
    });
  }

  function removeProject() {
    axios({
      method: "POST", 
      url:'http://localhost:5000/projects/removeProject', 
      data: {project}
    }).then(res=>{
      alert("success")
      window.location.reload();
    }).catch(error=>{
      alert("fail")
    });
  }

  return (
    <>
      <div className="page-wrapper">
        <div id="form-wrapper" id="manage-wrapper">
          <div>
            <h1 className="header">Manage</h1>
          </div>
          <Form>
            <FormGroup>
              <Label className="text-label" for="exampleEmail">Select Project</Label>
              <br></br>
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle>
                    {projectName}
                  </DropdownToggle>
                  <DropdownMenu>
                    {projects.map(data => <DropdownItem value={data.id} onClick={handleSelect}>{data.name}</DropdownItem>)}
                  </DropdownMenu>
              </Dropdown>
              <Link to='/manageProjects' >
                <Button type="button" style={{
                  backgroundColor: '#ff9988',
                  color: '#1C212D',
                  borderColor: '#1C212D',
                  fontSize: '20px'
                }}>+</Button> </Link>
                <Link to='/manage' >
                <Button type="button" onClick={removeProject}
                style={{
                  backgroundColor: '#ff9988',
                  color: '#1C212D',
                  borderColor: '#1C212D',
                  fontSize: '20px'
                }}>-</Button>
                </Link>
            </FormGroup>
            <br></br>
            <Label className = "text-label" for="exampleName">Project Information</Label>
            <div className="manage-dividers">
            <FormGroup>
              <Label className = "text-label" for="exampleName">Project Name</Label>
              <Input type="name" name="name" id="exampleName" value={name} placeholder="Enter project name" onChange={(e) => {setName(e.target.value);}}/>
            </FormGroup>
            <FormGroup>
                <Label className = "text-label" for="exampleText">Description</Label>
                <Input type="textarea" name="text" rows={4} id="contact-input" value={description} placeholder="Enter project description here!" onChange={(e) => {setDescription(e.target.value);}}/>

              </FormGroup>
              <FormGroup>
              <Label className = "text-label" for="exampleLink">Link</Label>
              <Input name="link" id="exampleLink" value={link} placeholder="Link to project" onChange={(e) => {setLink(e.target.value);}}/>
            </FormGroup>
            <Button className="collab-btn" type="button" onClick={saveDescription} style={{
              backgroundColor: '#ff9988',
              color: '#1C212D',
              borderColor: '#1C212D',
              fontSize: '15px',
            }}>Save</Button>
            </div>
             <br></br>
             <br></br>
             <Label className = "text-label" for="exampleName">Project Collaborators</Label>
            <div id="collab-wrapper" className="manage-dividers">
            <FormGroup className="collaborators-list">
              <Label className="text-label" for="exampleEmail">Current Collaborators</Label>
              <Input type="select" name="selectMultiCollab" id="exampleselectMultiCollab" multiple onChange={(e) => { onChangeMulti(e); }}>
                {/* {collaborators.map(data => <option value={data.id}>{data.name}</option>)} */}
                {collaborators.map(function (key) {
                  return <option value={key.id}>{key.name}</option>
                }.bind(this))}
              </Input>
              <Button className="collab-btn" type="button" onClick={removeMembers} style={{
              backgroundColor: '#ff9988',
              color: '#1C212D',
              borderColor: '#1C212D',
              fontSize: '15px'
            }}>Remove</Button>
            </FormGroup>
            <FormGroup className="collaborators-list">
              <Label className="text-label" for="exampleEmail">Add Collaborators</Label>
              <Input type="select" name="selectMultiNonCollab" id="exampleSelectNonMulti" multiple onChange={(e) => { onChangeMultiAdd(e); }}>
                {nonCollaborators.map(data => <option value={data.id}>{data.name}</option>)}
              </Input>
              <Button className="collab-btn" type="button" onClick={addMembers} style={{
              backgroundColor: '#ff9988',
              color: '#1C212D',
              borderColor: '#1C212D',
              fontSize: '15px'
            }}>Add</Button>
            </FormGroup>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Manage;