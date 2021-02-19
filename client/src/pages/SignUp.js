import React from 'react';
import { Button, 
        Form, 
        FormGroup, 
        Label, 
        Input, 
        FormText,
        NavLink} from 'reactstrap';
import {Link} from "react-router-dom";

import Login from './Login';
import "./SignUp.css"

const SignUp = (props) => {
  return (
    <>
    <div className = "page-wrapper">
      <div id = "form-wrapper">
          <div>
            <h1 className="header">Sign Up</h1>
          </div>
          <Form>
            <FormGroup>
              <Label className = "text-label" for="exampleName">Full Name</Label>
              <Input type="name" name="name" id="exampleName" placeholder="Full Name"/>
            </FormGroup>
            <FormGroup>
              <Label className = "text-label" for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="@brown.edu" />
            </FormGroup>
            <FormGroup>
              <Label className = "text-label" for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="Enter Password" />
            </FormGroup>
            <FormGroup>
              <Label className = "text-label" for="exampleConfirmPassword">Confirm Password</Label>
              <Input type="confirmPassword" name="confirmPassword" id="exampleConfirmPassword" placeholder="Confirm Password" />
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
      </div>
    </>
  );
}

export default SignUp;