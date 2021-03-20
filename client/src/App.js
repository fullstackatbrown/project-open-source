import logo from './logo.svg';
import React, {Component} from 'react';

import './App.css';
import {
  Container, 
  Row
} from 'reactstrap';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Navigation from './components/Navbar';
import Home from "./pages/Home"

class App extends Component{

  render() {
    return (
      <div className="screen mh-100" 
      style={{ 
        minHeight: '100vh',
        backgroundColor: '#1C212D' 
        }}>
        {/* <Router exact path="/">
          <Route
            exact
              path="/"
              render={() => {
                return (
                  window.location.pathname == '/' ?
                  <Redirect to="/home" />:
                  <Redirect to="/home" /> 
                )
            }}
          />
        </Router> */}
        <Navigation/>
      </div>
    ) 


    // return (
    //   <Router exact path="/">
    //     <Redirect to="/home"/>
    //   </Router>
    // );
  }
}

export default App;
