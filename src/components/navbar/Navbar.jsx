import React from "react";
import { useState } from "react";
import {
  Navbar,
  Collapse,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarToggler,
} from "reactstrap";
import { Link } from "react-router-dom";

//importing asset
import shortlyLogo from "../../images/logo.svg";

//Styles for this component
import "../../sass/navbar.scss"

function NavbarC() {
  const [toggle, settoggle] = useState(false);
  return (
    <Navbar expand={"lg"} className = "mynavbar">
      <NavbarBrand className = "mynavbar_brand">
        <Link to = "/"><img src={shortlyLogo} alt="logo" /></Link>
      </NavbarBrand>
      <NavbarToggler onClick={() => settoggle(!toggle)} navbar className = "mynavbar_toggler">
        <i class="fas fa-grip-lines"></i>
      </NavbarToggler>
      <Collapse isOpen={toggle} navbar className="mynavbar_collapse">
        <Nav navbar className = "mynavbar_collapse_nav">
          <NavItem className = "item">
            <Link to={"/Features"} onClick = {() => settoggle(!toggle)}>Features</Link>
          </NavItem>
          <NavItem className = "item">
            <Link to={"/Princing"} onClick = {() => settoggle(!toggle)}>Princing</Link>
          </NavItem>
          <NavItem className = "item">
            <Link to={"/Resources"} onClick = {() => settoggle(!toggle)}>Resources</Link>
          </NavItem>
          <div className = "space" />
          <NavItem className = "item">
            <Link to = {"/login"} onClick = {() => settoggle(!toggle)}>Login</Link>
          </NavItem>
          <NavItem className = "item">
            <Link to = {"/SingUp"} onClick = {() => settoggle(!toggle)}>Sing Up</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavbarC;
