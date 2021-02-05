import React from 'react'; 
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane
} from "reactstrap";
import classnames from "classnames";

import './About.css';

class About extends React.Component {
  state = {
    tabs: 1
  };
  toggleAbout = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
  render() {
    return (
      <>
      <div className = "page-wrapper">
        <div>
            <h1 className="header">About Us</h1>
        </div>
          <div className="nav-wrapper">
              <Nav
              className="nav-fill flex-column flex-md-row"
              id="tabs-icons-text"
              pills
              role="tablist"
            >
              <NavItem className="tabs">
                <NavLink
                  aria-selected={this.state.tabs === 1}
                  className={classnames("mb-sm-3 mb-md-0", {
                    active: this.state.tabs === 1
                  })}
                  style={this.state.tabs === 1 ? activeStyle : dormantStyle}
                  onClick={e => this.toggleAbout(e, "tabs", 1)}
                  href="#pablo"
                  role="tab"
                >
                  {/* <i className="ni ni-cloud-upload-96 mr-2" /> */}
                  Mission Statement
                </NavLink>
              </NavItem>
              <NavItem className="tabs">
                <NavLink
                  aria-selected={this.state.tabs === 2}
                  className={classnames("mb-sm-3 mb-md-0", {
                    active: this.state.tabs === 2
                  })}
                  style={this.state.tabs === 2 ? activeStyle : dormantStyle}
                  onClick={e => this.toggleAbout(e, "tabs", 2)}
                  href="#pablo"
                  role="tab"
                >
                  {/* <i className="ni ni-bell-55 mr-2" /> */}
                  Description of Membership
                </NavLink>
              </NavItem>
              <NavItem className="tabs">
                <NavLink
                  aria-selected={this.state.tabs === 3}
                  className={classnames("mb-sm-3 mb-md-0", {
                    active: this.state.tabs === 3
                  })}
                  style={this.state.tabs === 3 ? activeStyle : dormantStyle}
                  onClick={e => this.toggleAbout(e, "tabs", 3)}
                  href="#pablo"
                  role="tab"
                >
                  {/* <i className="ni ni-calendar-grid-58 mr-2" /> */}
                  Finances and Support
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <Card className="para-card ml-5 mr-5 center">
          <CardBody className="para-card">
            <TabContent className="para-text" activeTab={"tabs" + this.state.tabs}>
              <TabPane tabId="tabs1">
                <p className="description">
                  Open Source Software Development is the process by which software products
                  available with its source code under an open-source license to study,
                  change, and improve its design, is developed through an open source software project.
                </p>
                <p className="description">
                  Developers contribute to open source projects for a variety of reasons. 
                  Some want to fix a bug or add a missing feature to software that they regularly use, 
                  while others look to gain exposure to, and work with interesting technology. 
                  This gives developers practice with collaborating with other developers and working 
                  with legacy code, which are two of the most important skills for a modern developer. 
                  However, getting into open source can be difficult and confusing, 
                  especially without prior experience.
                </p>
                <p className="description">
                  The purpose of Open Source Developers at Brown shall be to help prepare 
                  interested students to begin jumping onto large open source software projects,
                  facilitate free and open discussion on contributing to a variety of open source projects, 
                  provide and share resources on Open Source internships (Winter / Summer / Semester), 
                  help each other compile, test, and debug in the process, and also provide a sense of 
                  community by bringing together a network of students interested in, or 
                  passionately engaged in open source development.
                </p>
              </TabPane>
              <TabPane tabId="tabs2">
                <p className="description">
                  Eligibility to Brown University Open Source Developers is open to all full-time 
                  undergraduate members of the Brown community and does not discriminate on the basis of 
                  race, color, religion, age, national or ethnic origin, disability, status as a veteran, 
                  sexual orientation, gender identity, gender expression, or sex.
                </p>
                <p className="description">
                  Majority Membership consists of full-time undergraduate students enrolled at 
                  Brown University, however, also welcomes graduate students, alumni, and 
                  faculty members in the wider Brown University community to participate.
                </p>
              </TabPane>
              <TabPane tabId="tabs3">
                <p className="description">
                  All funds collected by Brown University Open Source Developers from any 
                  source shall be deposited with the Student Activities Office (SAO), and 
                  all expenses of the group shall be spent through processes of the SAO. 
                  Brown University Open Source Developers agrees to follow all regulations
                  regarding all financial transactions as set forth by the SAO.
                </p>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
        </div>     
      </>
    );
  }
}

const activeStyle = {
  color: '#FF9988',
  backgroundColor: '#1C212D',
  borderBottom: 'solid',
  paddingBottom: 3,
};

const dormantStyle = {
  backgroundColor: '#1C212D',
  color: '#B2BDC8',
};

export default About;