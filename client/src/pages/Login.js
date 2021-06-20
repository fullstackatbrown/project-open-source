import React, { useState } from 'react';
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
  Link,
  Redirect
} from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'
import { authenticate, logout } from '../features/counter/counterSlice'

import './Login.css';
import SignUp from './SignUp';
import loginImg from './../images/blueno.PNG';
import axios from 'axios';

// var dispatch = useDispatch()

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value)

  function submitForm(e) {
    // console.log(this.state)
    e.preventDefault();
        axios({
          method: "POST", 
          url:'http://localhost:5000/member/login', 
          data: {email, password}
        }).then(res=>{
          console.log({email, password})
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
            <h1 className="header">Log In</h1>
          </div>
          <Form onSubmit={(e) => submitForm(e)}>
            <FormGroup>
              <Label className = "text-label" for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail"  placeholder="@brown.edu" onChange={(e) => {setEmail(e.target.value);}}/>
            </FormGroup>
            <FormGroup>
              <Label className = "text-label" for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="Enter Password" onChange={(e) => {setPassword(e.target.value);}}/>
            </FormGroup>
            
            <FormGroup className = "text-label" id = "redirect">
              Don't have an account? 
              <Link id= "signup-link" to="/signup"> Sign up</Link>
            </FormGroup>
            <Button type="submit" style={{ 
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

// const Login = (props) => {
//   return (
//     <>
//     <div className = "page-wrapper">
//       <div id = "form-wrapper">
//         <div>
//           <h1 className="header">Log In</h1>
//         </div>
//         <Form>
//           <FormGroup>
//             <Label className = "text-label" for="exampleEmail">Email</Label>
//             <Input type="email" name="email" id="exampleEmail"  placeholder="@brown.edu" />
//           </FormGroup>
//           <FormGroup>
//             <Label className = "text-label" for="examplePassword">Password</Label>
//             <Input type="password" name="password" id="examplePassword" placeholder="Enter Password" />
//           </FormGroup>
          
//           <FormGroup className = "text-label" id = "redirect">
//             Don't have an account? 
//             <Link id= "signup-link" to="/signup"> Sign up</Link>
//           </FormGroup>
//           <Button type="submit" style={{ 
//             backgroundColor: '#ff9988', 
//             color: '#1C212D', 
//             borderColor:'#1C212D',
//             width: '150px',
//             fontSize: '20px'
//           }} className="button">Submit</Button>
//         </Form>
//       </div>
//         <div id="img-wrapper">
//           <img style = {{width: 500}} className = "cover" id="login-img" src={loginImg}>
//           </img>
//       </div>
//     </div>
//     </>
//   );
// }

export default Login;