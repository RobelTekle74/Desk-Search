import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap';
// import Logout from '../Auth/Logout'

const style = {
  margin: 'auto',
  width: '100%'
}

class Navebar extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    return(
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container style={style}>
          <NavbarBrand href="/">Desk Search</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink style={{padding: '15px'}} to="/employeep">
                Employee
                </NavLink>
                <NavLink style={{padding: '15px'}} to="/mailroomp">
                MailRoom
                </NavLink>
                <NavLink style={{padding: '15px'}} to="/about">
                About
                </NavLink>
                <NavLink style={{padding: '15px'}} to="/login">
                Sign in/Sign up
                </NavLink>
                {/* <NavLink to="/">
                Logout
                </NavLink> */}
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>);
    
  }

}

export default Navebar;
