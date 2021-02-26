import React from 'react';
import { Button, 
        Form, 
        FormGroup, 
        Label, 
        Input, 
        FormText,
        NavLink} from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './Login.css';
import SignUp from './SignUp';
import loginImg from './../images/blueno.PNG';

const Login = (props) => {
  return (
    <>
    <div className = "page-wrapper">
      <div id = "form-wrapper">
        <div>
          <h1 className="header">Log In</h1>
        </div>
        <Form>
          <FormGroup>
            <Label className = "text-label" for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail"  placeholder="@brown.edu" />
          </FormGroup>
          <FormGroup>
            <Label className = "text-label" for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Enter Password" />
          </FormGroup>
          
          <FormGroup className = "text-label" id = "redirect">
            Don't have an account? 
            <Link id= "signup-link" to="/signup"> Sign up</Link>
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

export default Login;