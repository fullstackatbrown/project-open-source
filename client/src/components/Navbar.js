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

function Navigation() {
  return (
    <React.Fragment>
    <Router>
      <Navbar
        className="navbar-horizontal navbar-dark bg-1C212D"
        expand="lg"
      >
        <Container>
          <NavbarBrand onClick={e => e.preventDefault()}>
              {/* add logo to home here */}
              {/* img alt="logo" src={logo} style={styles.img} */}
            <Link to="/home" style={styles.navLink}></Link>
          </NavbarBrand>
          <Nav className="ml-lg-auto">
            <NavLink><Link to="/about">About</Link></NavLink>
            <NavLink><Link to="/members">Members</Link></NavLink>
            <NavLink><Link to="/projects">Projects</Link></NavLink>
            <NavLink><Link to="/events">Events</Link></NavLink>
            <NavLink><Link to="/contact">Contact</Link></NavLink>
          </Nav>
          <Link to="/login">
            <Button color="FF9988" type="button" className="ml-3">Login</Button>
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
        </Switch>
      </Router>
    </React.Fragment >
  );
}

const styles = {
    navLink: {
      color: '#525f7f',
      fontSize: 16
  }
    // img:{
    //   height:'110px',
    //   width:'auto'
    // }
  }

export default Navigation;