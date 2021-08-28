import React, {Component, useState} from 'react';
import axios from 'axios';
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

function Contact() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    var data = {
      email: email,
      subject: 'test',
      message: msg
    }
    axios({
      method: "POST", 
      url:'http://localhost:5000/mail', 
      data:  data
    }).then((response)=>{
        alert("Message Sent."); 
    }).catch(error=>{
        alert("Message failed to send.")
    })
  }
  
    return (
      <>
        <div className = "page-wrapper">
          <div id = "form-wrapper">
            <div>
              <h1 className="header">Contact Us</h1>
            </div>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <FormGroup>
                <Label className = "text-label" for="exampleEmail">Your Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="@brown.edu" value={email} onChange={(e) => {setEmail(e.target.value);}}/>
              </FormGroup>
              <FormGroup>
                <Label className = "text-label" for="exampleText">Message</Label>
                <Input type="textarea" name="text" rows={10} id="contact-input" placeholder="Write Your Message Here!" value={msg} onChange={(e) => {setMsg(e.target.value);}}/>
              </FormGroup>
              <Button type="submit" style={{ 
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