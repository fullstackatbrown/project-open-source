import React, {Component} from 'react';
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

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      message: ''
    }
  }


  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  resetForm(){
    this.setState({email: '', message: ''})
  }

  handleSubmit(e) {
    e.preventDefault();

    axios({
      method: "POST", 
      url:"http://localhost:3000/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent."); 
        this.resetForm()
      } else if(response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })

  }
  
  render() {
    return (
      <>
        <div className = "page-wrapper">
          <div id = "form-wrapper">
            <div>
              <h1 className="header">Contact Us</h1>
            </div>
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <FormGroup>
                <Label className = "text-label" for="exampleEmail">Your Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="@brown.edu" value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
              </FormGroup>
              <FormGroup>
                <Label className = "text-label" for="exampleText">Message</Label>
                <Input type="textarea" name="text" rows={10} id="contact-input" placeholder="Write Your Message Here!" value={this.state.message} onChange={this.onMessageChange.bind(this)}/>
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

}

export default Contact;