import React from "react";
import { Col } from "reactstrap";

function Homebodycard(props) {
  return (
    <Col className="card" xs={"11"} lg = {"3"}>
      <div className="img_container">
        <div className="circle">
          <img src={props.img} alt="recognition" />
        </div>
      </div>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </Col>
  );
}

export default Homebodycard;
