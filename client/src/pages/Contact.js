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

const Contact = (props) => {
  return (
    <>
    <div id = "form-wrapper">
      <div>
        <h1>Contact</h1>
      </div>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="@brown.edu" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Message</Label>
          <Input type="textarea" name="text" id="exampleText" placeholder="Message Here!" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
    </>
  );
}

export default Contact;