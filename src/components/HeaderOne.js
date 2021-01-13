import React, { Component } from "react";

import {
   Nav,
   Navbar,
   NavbarBrand,
   NavbarToggler,
   Collapse,
   NavItem,
   NavbarText
} from "reactstrap";
import { NavLink } from "react-router-dom";

class HeaderOne extends Component {


   constructor(props) {
      super(props);
      this.state = {
         isNavOpen: false,
         isModalOpen: false
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
         <div>
            <Navbar color="light" light expand="md">
               <NavbarBrand href="/">reactstrap</NavbarBrand>
               <NavbarToggler onClick={this.toggleNav} />
               <Collapse isOpen={this.state.isNavOpen} navbar>
                  
                  <Nav className="mr-auto" navbar>
                     <NavItem>
                        <NavLink href="/components/">Components</NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                     </NavItem>
                    
                  </Nav>
                  <NavbarText>Simple Text</NavbarText>
               </Collapse>
            </Navbar>
         </div>
      );
   }
}
export default HeaderOne;