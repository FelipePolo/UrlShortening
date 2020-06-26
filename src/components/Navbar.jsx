import React from 'react'
import {Navbar,Collapse,NavbarBrand,Nav,NavItem,NavbarToggler} from 'reactstrap'
import {Link} from 'react-router-dom'

//importing asset
import ShortlyLogo from '../images/logo.svg'


function NavbarC() {
  return (
    <Navbar style = {{backgroundColor:"blue"}}>
      <NavbarBrand>
        <img src={ShortlyLogo} alt=""/>
      </NavbarBrand>

    </Navbar>
  )
}

export default NavbarC
