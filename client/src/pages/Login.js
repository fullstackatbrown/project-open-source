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

const Login = (props) => {
  return (
    <>
    <div id = "form-wrapper">
        <div>
          <h1>LOG IN</h1>
        </div>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="@brown.edu" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="enter password" />
          </FormGroup>
          <Button className="button">Submit</Button>
          <FormGroup id = "redirect">
            Don't have an account? 
            <Link to="/signup"> Sign up</Link>
          </FormGroup>
        </Form>
      </div>
    </>
  );
}

export default Login;