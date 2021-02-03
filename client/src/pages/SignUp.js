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

const SignUp = (props) => {
  return (
    <>
    <div id = "form-wrapper">
        <div>
          <h1>SIGN UP</h1>
        </div>
        <Form>
          <FormGroup>
            <Label for="exampleName">Full Name</Label>
            <Input type="name" name="name" id="exampleName" placeholder="Full Name" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="@brown.edu" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="enter password" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleConfirmPassword">Confirm Password</Label>
            <Input type="confirmPassword" name="confirmPassword" id="exampleConfirmPassword" placeholder="confirm password" />
          </FormGroup>
          <Button>Submit</Button>
          <FormGroup>
          Have an account? 
          <Link to="/login"> Login</Link>
          </FormGroup>
        </Form>                             
      </div>
    </>
  );
}

export default SignUp;