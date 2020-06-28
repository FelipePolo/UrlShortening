import React from "react";
import { Row, Col } from "reactstrap";
import shortlyblack from "../../images/logoblack.svg";
import Homefooterlist from './Homefooterlist'

//importing assets
import facebook from '../../images/icon-facebook.svg'
import twitter from '../../images/icon-twitter.svg'
import pinterest from '../../images/icon-pinterest.svg'
import instagram from '../../images/icon-instagram.svg'


function Homefooter() {
  return (
    <Row className="home_footer">
      <Col xs = "12" className = "logo_container">
        <img src={shortlyblack} alt="" />
      </Col>
      <Homefooterlist title = "Features" li = {["Link Shortening","Branded Links","Analytics"]}  />
      <Homefooterlist title = "Resources" li = {["Blog","Developers","Support"]}  />
      <Homefooterlist title = "Company" li = {["About","Our Team","Careers","Contact"]}  />
      <Col xs = "12" className = "icon_container" lg = {"3"}>
        <a href = "www.facebook.com"><img src={facebook} alt="facebook"/></a>
        <a href = "twitter.com"><img src={twitter} alt="twitter"/></a>
        <a href = "pinterest.com"><img src={pinterest} alt="pinterest"/></a>
        <a href = "instagram.com"><img src={instagram} alt="instagram"/></a>
      </Col>
    </Row>
  );
}

export default Homefooter;
