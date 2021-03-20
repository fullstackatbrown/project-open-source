import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import {
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Button
} from 'reactstrap';


import Home from '../pages/Home';
import About from '../pages/About';
import Members from '../pages/Members';
import Events from '../pages/Events';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import loginImg from './../images/blueno.PNG';


function Navigation() {
  return (
    <React.Fragment>
    <Router>
      <Navbar
      // navbar-dark 
        className="navbar-horizontal navbar-right"
        
        style={{ 
          backgroundColor: '#1C212D',
        }}
        expand="lg"
      >
        <Container style={{ alignItems: 'right'}}>
          <NavbarBrand onClick={e => e.preventDefault()}>
            {/* <img src={loginImg}></img> */}
            {/* <h1>OPS@B</h1> */}
              {/* {loginImg} */}
              {/* src={loginImg} style={styles.img} */}
            <Link to="/">
            <img src={loginImg}></img>
            </Link>
          </NavbarBrand>
          {/* <Nav className="ml-auto" style={{ float: 'left' }}>
            <NavLink><Link to="/home" style={{ color: '#ff9988', fontSize: '20px' }}>Home</Link></NavLink>
          </Nav> */}
          <Nav className="ml-auto" style={{ float: 'right' }}>
            <NavLink><Link to="/about" style={{ color: '#ff9988', fontSize: '20px' }}>About</Link></NavLink>
            <NavLink><Link to="/members" style={{ color: '#ff9988', fontSize: '20px' }}>Members</Link></NavLink>
            <NavLink><Link to="/projects" style={{ color: '#ff9988', fontSize: '20px' }}>Projects</Link></NavLink>
            <NavLink><Link to="/events" style={{ color: '#ff9988', fontSize: '20px' }}>Events</Link></NavLink>
            <NavLink><Link to="/contact" style={{ color: '#ff9988', fontSize: '20px' }}>Contact</Link></NavLink>
          </Nav>
          <Link to="/login">
            <Button style={{ 
              backgroundColor: '#ff9988', 
              color: '#1C212D', 
              borderColor:'#1C212D',
              fontSize: '20px',
              // position: 'absolute',
              float: 'right'
            }} 
              type="button" 
              className="ml-3"
              >
                Login</Button>
          </Link>
        </Container>
      </Navbar>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/members">
            <Members />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </React.Fragment >
  );
}

const styles = {
    navLink: {
      color: '#1C212D',
      fontSize: 16
  },
    img: {
      height:'110px',
      width:'auto'
    }
  }

export default Navigation;