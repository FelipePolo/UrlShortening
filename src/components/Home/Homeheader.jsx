import React from 'react'
import {Row,Col} from 'reactstrap'
import {Link} from 'react-router-dom'

//importing assets
import img_first from "../../images/illustration-working.svg"
import HomeheaderInput from './HomeheaderInput'
function Homestart() {
  return (
    <Row className = "home_start">
      <Col xs = {"12"} className = "home_start_img" lg = {"6"} >
        <img src={img_first} alt="imagentrabajando"/>
      </Col>
      <Col xs = {"12"} className = "home_start_info order-lg-first" lg = {"6"}  >
        <h1>More than just shorter link</h1>
        <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
        <button><Link to= "/GetStarted">Get Started</Link></button>
      </Col>
      <Col xs = {'12'} className = "home_start_form">
        <HomeheaderInput/>
      </Col>
      <Col>

      </Col>
    </Row>
  )
}

export default Homestart
