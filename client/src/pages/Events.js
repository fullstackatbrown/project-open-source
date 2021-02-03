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

import './Events.css';

class Events extends React.Component {
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
        <div className="nav-wrapper">
          <Nav
            className="nav-fill flex-column flex-md-row"
            id="tabs-icons-text"
            pills
            role="tablist"
          >
            <NavItem>
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
                Event 1
              </NavLink>
            </NavItem>
            <NavItem>
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
                Event 2
              </NavLink>
            </NavItem>
            <NavItem>
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
                Event 3
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 4}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 4
                })}
                style={this.state.tabs === 4 ? activeStyle : dormantStyle}
                onClick={e => this.toggleAbout(e, "tabs", 4)}
                href="#pablo"
                role="tab"
              >
                {/* <i className="ni ni-bell-55 mr-2" /> */}
                Event 4
              </NavLink>
              </NavItem>
          </Nav>
        </div>
        <Card className="para-card ml-5 mr-5 center">
          <CardBody className="para-card">
            <TabContent className="para-text" activeTab={"tabs" + this.state.tabs}>
              <TabPane tabId="tabs1">
                <p className="description">
                This is a new event. Edit me in client/src/pages/Events.js
                </p>
                <p className="description">
                  Paragaph 2
                </p>
                <p className="description">
                  Paragraph 3
                </p>
              </TabPane>
              <TabPane tabId="tabs2">
                <p className="description">
                This is a new event. Edit me in client/src/pages/Events.js
                </p>
                <p className="description">
                  Paragraph 2
                </p>
              </TabPane>
              <TabPane tabId="tabs3">
                <p className="description">
                This is a new event. Edit me in client/src/pages/Events.js
                </p>
              </TabPane>
              <TabPane tabId="tabs4">
                <p className="description">
                This is a new event. Edit me in client/src/pages/Events.js
                </p>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
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

export default Events;