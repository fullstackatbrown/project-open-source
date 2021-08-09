import React, { useState } from 'react';
import { Button, 
        Form, 
        FormGroup, 
        Label, 
        Input, 
        FormText,
        NavLink} from 'reactstrap';
import {Link} from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'
import { authenticate, logout } from '../features/counter/counterSlice'
import  { Redirect, useHistory } from 'react-router-dom'

import axios from 'axios';

function ManageProjects() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [imgPath, setImgPath] = useState('');
  
  const history = useHistory();

  async function submitForm(e) {
    e.preventDefault();
        axios({
          method: "POST", 
          url:'http://localhost:5000/projects/create', 
          data: {
            name: name, 
            description: description,
            project_link: 'google.com',
            image_path: imgPath
        }
        }).then(res=>{
          console.log(res.data)
          history.push("/manage");
        }).catch(error=>{
          alert("fail")
        });
  }
  return (
    <>
    <div className = "page-wrapper">
      <div id = "form-wrapper">
          <div>
            <h1 className="header">Manage Projects</h1>
          </div>
          <Form onSubmit={(e) => submitForm(e)}>
            <FormGroup>
              <Label className = "text-label" for="exampleName">Project Name</Label>
              <Input type="name" name="name" id="exampleName" placeholder="Enter project name" onChange={(e) => {setName(e.target.value);}}/>
            </FormGroup>
            <FormGroup>
              <Label className = "text-label" for="exampleDescription">Description</Label>
              <Input name="desciption" id="exampleDescription" placeholder="Enter a desciption about the project" onChange={(e) => {setDescription(e.target.value);}}/>
            </FormGroup>
            <FormGroup>
              <Label className = "text-label" for="exampleLink">Link</Label>
              <Input name="link" id="exampleLink" placeholder="Link to project" onChange={(e) => {setLink(e.target.value);}}/>
            </FormGroup>
            <Button style={{ 
                backgroundColor: '#ff9988', 
                color: '#1C212D', 
                borderColor:'#1C212D',
                width: '150px',
                fontSize: '20px'
              }} className="button">Create</Button>
          </Form>                             
        </div>
      </div>
    </>
  );
}

export default ManageProjects;