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

import Login from './Login';
import "./SignUp.css"
import loginImg from './../images/blueno.PNG';
import axios from 'axios';

function SignUp() {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value)

  function submitForm(e) {
    e.preventDefault();
        axios({
          method: "POST", 
          url:'http://localhost:5000/member/create', 
          data: {name, year, email, password, bio}
        }).then(res=>{
          console.log(res.data)
            // alert("success")
          if (res.data == true) {
            dispatch(authenticate(res.data))
            alert("success")
          } else {
            alert("fail")
          }
        }).catch(error=>{
          alert("fail")
        });
  }
  return (
    <>
    <div className = "page-wrapper">
      <div id = "form-wrapper">
          <div>
            <h1 className="header">Sign Up</h1>
          </div>
          <Form onSubmit={(e) => submitForm(e)}>
            <FormGroup>
              <Label className = "text-label" for="exampleName">Full Name</Label>
              <Input type="name" name="name" id="exampleName" placeholder="Full Name" onChange={(e) => {setName(e.target.value);}}/>
            </FormGroup>
            <FormGroup>
              <Label className = "text-label" for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="@brown.edu" onChange={(e) => {setEmail(e.target.value);}}/>
            </FormGroup>
            <FormGroup>
              <Label className = "text-label" for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="Enter Password" onChange={(e) => {setPassword(e.target.value);}}/>
            </FormGroup>
            <FormGroup>
              <Label className = "text-label" for="exampleConfirmPassword">Confirm Password</Label>
              <Input type="confirmPassword" name="confirmPassword" id="exampleConfirmPassword" placeholder="Confirm Password" />
            </FormGroup>
            <FormGroup>
              <Label className = "text-label" for="exampleYear">Class Year</Label>
              <Input type="year" name="year" id="exampleYear" placeholder="Enter Year" onChange={(e) => {setYear(e.target.value);}}/>
            </FormGroup>
            <FormGroup>
              <Label className = "text-label" for="exampleBio">Short Biography</Label>
              <Input type="bio" name="bio" id="exampleBio" placeholder="Enter a short biography" onChange={(e) => {setBio(e.target.value);}}/>
            </FormGroup>
            <FormGroup className = "text-label" id = "redirect">
            Have an account? 
            <Link id = "login-link" to="/login"> Log in</Link>
            </FormGroup>
            <Button style={{ 
                backgroundColor: '#ff9988', 
                color: '#1C212D', 
                borderColor:'#1C212D',
                width: '150px',
                fontSize: '20px'
              }} className="button">Submit</Button>
          </Form>                             
        </div>
        <div id="img-wrapper">
            <img style = {{width: 500}} className = "cover" id="login-img" src={loginImg}>
              
            </img>
        </div>
      </div>
    </>
  );
}

export default SignUp;