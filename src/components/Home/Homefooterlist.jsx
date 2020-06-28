import React from 'react'
import {Col} from 'reactstrap'

function Homefooterlist(props) {
  return (
    <Col xs = "12" className = "listcontainer" lg = {"3"}>
      <h1 className = "title">{props.title}</h1>
      <ul className = "list">
        {
          props.li.map((x) => <li className = "item" key = {x}>{x}</li>)
        }
      </ul>
    </Col>
  )
}

export default Homefooterlist
