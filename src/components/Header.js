import React, { Component } from "react";

import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar
          className="navbar navbar-expand-xl navbar-dark "
          dark
          // expand="xl"
        >
          <div className="container">
            <NavbarBrand className="navbar-brand" href="/">
              <img src="Assets/img/logo/logo-new.jpg" alt="Zenith Logo" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <div className="navbar-nav ">
                  <NavItem className="nav-item">
                    <NavLink className="nav-link" to="/home">
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav-item">
                    <NavLink className="nav-link" to="/studios">
                      Studios
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav-item">
                    <NavLink className="nav-link" to="/staff">
                      Staff
                    </NavLink>
                  </NavItem>
                </div>
                <div className="navbar-nav navbar-right">
                  <NavItem className="nav-item">
                    <NavLink className="nav-link" to="/gallery">
                      Gallery
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav-item">
                    <NavLink className="nav-link" to="/aboutus">
                      About
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav-item">
                    <NavLink className="nav-link" to="/contactus">
                      Contact
                    </NavLink>
                  </NavItem>
                </div>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
