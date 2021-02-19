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
      <div className = "page-wrapper">
        <div id = "form-wrapper">
          <div>
            <h1 className="header">Contact Us</h1>
          </div>
          <Form>
            <FormGroup>
              <Label className = "text-label" for="exampleEmail">Your Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="@brown.edu" />
            </FormGroup>
            <FormGroup>
              <Label className = "text-label" for="exampleText">Message</Label>
              <Input type="textarea" name="text" rows={10} id="contact-input" placeholder="Write Your Message Here!" />
            </FormGroup>
            <Button style={{ 
                  backgroundColor: '#ff9988', 
                  color: '#1C212D', 
                  borderColor:'#1C212D',
                  width: '150px',
                  fontSize: '20px'
                }} className = "button">Submit</Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Contact;