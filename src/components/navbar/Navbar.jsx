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
      <div className = "mynavbar_brand mynavbar_brand navbar-brand">
        <Link to = "/"><img src={shortlyLogo} alt="logo" /></Link>
      </div>
      <NavbarToggler onClick={() => settoggle(!toggle)} navbar = "True" className = "mynavbar_toggler">
        <i className="fas fa-grip-lines"></i>
      </NavbarToggler>
      <Collapse isOpen={toggle} navbar = "True" className="mynavbar_collapse">
        <Nav navbar = "True" className = "mynavbar_collapse_nav">
          <div className = "mynavbar_brand navbar-brand item">
            <Link to={"/Features"} onClick = {() => settoggle(!toggle)}>Features</Link>
          </div>
          <div className = "mynavbar_brand navbar-brand item">
            <Link to={"/Princing"} onClick = {() => settoggle(!toggle)}>Princing</Link>
          </div>
          <div className = "mynavbar_brand navbar-brand item">
            <Link to={"/Resources"} onClick = {() => settoggle(!toggle)}>Resources</Link>
          </div>
          <div className = "space" />
          <div className = "mynavbar_brand navbar-brand item">
            <Link to = {"/login"} onClick = {() => settoggle(!toggle)}>Login</Link>
          </div>
          <div className = "mynavbar_brand navbar-brand item">
            <Link to = {"/SingUp"} onClick = {() => settoggle(!toggle)}>Sing Up</Link>
          </div>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavbarC;
