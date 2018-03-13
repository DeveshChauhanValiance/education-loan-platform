import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import './../css/Navbar.css';

const Count = () => ({
  render () {
    return (
        <span className="navbar__notification--count">{this.props.number}</span>
    );
  }
});

export default class NavbarB4S extends React.Component {
  constructor(props) {
    super(props);

    this.toggleUser = this.toggleUser.bind(this);
    this.toggleNotification = this.toggleNotification.bind(this);
    this.state = {
      userDropdown: false,
      notificationDropdown: false
    };
  }

  toggleUser() {
    this.setState({
      userDropdown: !this.state.userDropdown
    });
  }
  toggleNotification() {
    this.setState({
      notificationDropdown: !this.state.notificationDropdown
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" expand="md">
          <NavbarBrand href="/" style={{"marginLeft": "50px"}}>B4S</NavbarBrand>
              <Nav className="ml-auto">
                <NavItem>
                  <Link className="nav-link" to="/setting"><FontAwesome name='cog' /></Link>
                </NavItem>
                <Dropdown className="navbar__notification" nav isOpen={this.state.notificationDropdown} toggle={this.toggleNotification}>
                  <DropdownToggle nav>
                    <FontAwesome name='bell' />
                    <Count number="5"></Count>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <NavItem className="navbar__user">
                  <Link className="nav-link" to="/profile"> <FontAwesome name='user' /></Link>
                </NavItem>
                <Dropdown nav isOpen={this.state.userDropdown} toggle={this.toggleUser}>
                  <DropdownToggle nav caret>
                    John Doe
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                        Logout
                      </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
              </Nav>
        </Navbar>
      </div>
    );
  }
}