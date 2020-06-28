import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//importing assets
import img_first from "../../images/illustration-working.svg";
import HomeheaderInput from "./HomeheaderInput";
function Homestart() {
  const links = useSelector((store) => store.clientdata.hashes);

  function copyToClipboard(id) {
    var codigoACopiar = document.getElementById(id);
    var seleccion = document.createRange();
    seleccion.selectNodeContents(codigoACopiar);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    var res = document.execCommand("copy");
    console.log(res)
    window.getSelection().removeRange(seleccion);
  }
  return (
    <Row className="home_start">
      <Col xs={"12"} className="home_start_img" lg={"6"}>
        <img src={img_first} alt="imagentrabajando" />
      </Col>
      <Col xs={"12"} className="home_start_info order-lg-first" lg={"6"}>
        <h1>More than just shorter link</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <button>
          <Link to="/GetStarted">Get Started</Link>
        </button>
      </Col>
      <Col xs={"12"} className="home_start_form">
        <HomeheaderInput />
      </Col>
      <Col>
        {links.map((x) => (
          <div className="link_container" key={x.hashid}>
            <h2 className="orlink" key={x.hashid}>
              Original Link
            </h2>
            <p className="url" key={x.hashid}>
              {x.url}
            </p>
            <h2 className="shlink" key={x.hashid}>
              Short Link
            </h2>
            <p className="url_short" id={x.hashid} key={x.hashid}>
              https://rel.ink/{x.hashid}
            </p>
            <button
              className="copybtn"
              onClick={() => copyToClipboard(x.hashid)}
              key={x.hashid}
            >
              Copy
            </button>
          </div>
        ))}
      </Col>
    </Row>
  );
}

export default Homestart;
