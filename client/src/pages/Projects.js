import React , { useState, useEffect } from 'react'; 

import Project from '../components/Project.js'
import './Projects.css'
import axios from 'axios';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios({
      method: "GET", 
      url:'http://localhost:5000/projects/findAll'
    }).then(res=>{
      setProjects(res.data)
    }).catch(error=>{
      alert("fail")
    });

    axios({
      method: "GET", 
      url:'http://localhost:5000/member/findAll'
    }).then(res=>{
      setMembers(res.data)
    }).catch(error=>{
      alert("fail")
    });
  }, []);


  
  return (
    <div className = "page-wrapper"> 

          <h1 className="header">Projects</h1>
          <div id="project-wrapper">
          {projects.map(data => Project({data, members}))}
      </div>
    </div>
  );
}

export default Projects;