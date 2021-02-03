import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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

function Navigation() {
  return (
    <React.Fragment>
    <Router>
      <Navbar
      // navbar-dark 
        className="navbar-horizontal"
        style={{ 
          backgroundColor: '#1C212D'
        }}
        expand="lg"
      >
        <Container>
          <NavbarBrand onClick={e => e.preventDefault()}>
              {/* add logo to home here */}
              {/* img alt="logo" src={logo} style={styles.img} */}
            <Link to="/home" style={styles.navLink}></Link>
          </NavbarBrand>
          <Nav className="ml-lg-auto">
            <NavLink><Link to="/about" style={{ color: '#ff9988' }}>About</Link></NavLink>
            <NavLink><Link to="/members" style={{ color: '#ff9988' }}>Members</Link></NavLink>
            <NavLink><Link to="/projects" style={{ color: '#ff9988' }}>Projects</Link></NavLink>
            <NavLink><Link to="/events" style={{ color: '#ff9988' }}>Events</Link></NavLink>
            <NavLink><Link to="/contact" style={{ color: '#ff9988' }}>Contact</Link></NavLink>
          </Nav>
          <Link to="/login">
            <Button style={{ 
              backgroundColor: '#ff9988', 
              color: '#1C212D', 
              borderColor:'#1C212D'
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
        </Switch>
      </Router>
    </React.Fragment >
  );
}

const styles = {
    navLink: {
      color: '#1C212D',
      fontSize: 16
  }
    // img:{
    //   height:'110px',
    //   width:'auto'
    // }
  }

export default Navigation;