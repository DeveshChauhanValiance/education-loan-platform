import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import './../css/Sidebar.css';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          textStyle : { "display": "none" },
          sidebarWidth : {"width": "300px" }
        };
  }
  render () {
    
    const isMenuOpen = (state) => {
      if(state.isOpen){
        this.setState({ 
            textStyle : { "display": "inline-block" },
            sidebarWidth : {"width": "300px" }
          });
      } else {
        this.setState({
            textStyle : { "display": "none" },
            sidebarWidth : {"width": "50px" }
          });
      }
      return state.isOpen;
    };
    return (
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } onStateChange={ isMenuOpen } style={this.state.sidebarWidth} >
        <div className="sidebar-logo">&nbsp;
          <h2 style={this.state.textStyle}>
            <FontAwesome name='rocket' /> <span>B4S</span>
          </h2>
        </div>
        <Link className="menu-item" to="/campaign-dashboard"> <FontAwesome name='plus' /> <span style={this.state.textStyle}>Campaign</span></Link>
        <Link className="menu-item" to="/performance"><FontAwesome name='list-alt' /> <span style={this.state.textStyle}>Performance</span></Link>
        {/*<a className="menu-item" href="http://buddy4study.azurewebsites.net/performance/"><FontAwesome name='dashboard' /> <span style={this.state.textStyle}>Performance</span></a>*/}
      </Menu>
    );
  }
}