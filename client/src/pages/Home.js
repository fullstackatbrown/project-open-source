
import React, {Component} from 'react';
import "./Home.css"
import homeImg from './../images/gate.jpg';

//render?
class Home extends Component {
  render () {
    return (
      <div className = "page-wrapper">
        <div id="home-header" className = "header">Open Source at Brown</div>
        {/* <img id="home-bg" src={homeImg}></img> */}
      </div>
    );
  }
}

export default Home;