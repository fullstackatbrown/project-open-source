import React from 'react'; 

import Profile from '../components/Profile.js'
import loginImg from './../images/blueno.PNG';
import './Members.css'


const Members = () => {
  return (
    <div className = "page-wrapper"> 
  
          <h1 className="header">Members</h1>
          <div id="profile-wrapper">
          <div className="profile">
            <Profile
              info={{name: "FSAB", image: {loginImg}, year: "2023", 
              email: "@brown.edu", description: "fact"}}
            />
          </div>
          <div className="profile">
          <Profile
            info={{name: "Nitya", image: {loginImg}, year: "2023", 
            email: "email@brown.edu", description: "cool"}}
          />
          </div>
          <div className="profile">
          <Profile
            info={{name: "Ian", image: {loginImg}, year: "2023", 
            email: "email@brown.edu", description: "cool"}}
          />
          </div>
          <div className="profile">
          <Profile
            info={{name: "Alyssa", image: {loginImg}, year: "2023", 
            email: "email@brown.edu", description: "cool"}}
          />
          </div>
          <div className="profile">
          <Profile
            info={{name: "Jenny", image: {loginImg}, year: "2023", 
            email: "email@brown.edu", description: "cool"}}
          />
          </div>
          <div className="profile">
          <Profile
            info={{name: "Blueno", image: {loginImg}, year: "2023", 
            email: "email@brown.edu", description: "cool"}}
          />
          </div>
          <div className="profile">
          <Profile
            info={{name: "Bruno", image: {loginImg}, year: "2023", 
            email: "email@brown.edu", description: "cool"}}
          />
          </div>

      </div>
    </div>
  );
}

export default Members;