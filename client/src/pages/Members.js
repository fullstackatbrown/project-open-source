import React , { useState, useEffect } from 'react'; 

import Profile from '../components/Profile.js'
import './Members.css'
import axios from 'axios';

function Members() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
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

          <h1 className="header">Members</h1>
          <div id="profile-wrapper">
          {members.map(data => Profile(data))}
      </div>
    </div>
  );
}

export default Members;