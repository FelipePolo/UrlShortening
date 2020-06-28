import React from "react";
import { Row, Col } from "reactstrap";
import Homebodycard from './Homebodycard';
import {Link} from 'react-router-dom'
//importing asset

import imgCardone from '../../images/icon-brand-recognition.svg'
import imgCardtwo from '../../images/icon-detailed-records.svg'
import imgCardtree from '../../images/icon-fully-customizable.svg'


// Brand Recognition
// Boost your brand recognition with each click. Generic links don't mean a
// thing. branded links help instil confidance in your content.

//Detailed Records
// Gain insigths into who is clicking your links. Knowing whon and where people ongage with your content helps inform better decisions.


function Homebody() {
  return (
    <Row className="home_body">
      <Col xs={"12"} className = "home_body_info">
        <h1>Advanced Statistics</h1>
        <p>
          Trak how your links are performing across the web with our advanced
          statistics dashborad.
        </p>
      </Col>
      <Col xs = {"12"}>
        <Row className = "card_container">
          <Homebodycard img = {imgCardone} title = {"Brand Recognition"} text = {"Boost your brand recognition with each click. Generic links don't mean a thing. branded links help instil confidance in your content."} />
          <Homebodycard img = {imgCardtwo} title = {"Detailed Records"} text = {"Gain insigths into who is clicking your links. Knowing whon and where people ongage with your content helps inform better decisions."} />
          <Homebodycard img = {imgCardtree} title = {"Fully Customizable"} text = {"Improve brand awareness and content discoverability through customizable links. supercharging audience engagement."} />
        </Row>
      </Col>
      <Col xs = {"12"} className = "Boostyourlink">
        <h1>Boost your links today</h1>
        <button><Link to= "/GetStarted">Get Started</Link></button>
      </Col>
    </Row>
  );
}

export default Homebody;
