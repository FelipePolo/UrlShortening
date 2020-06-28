import React from 'react'
import {Col} from 'reactstrap'

function Homefooterlist(props) {
  return (
    <Col xs = "12" className = "listcontainer">
      <h1 className = "title">{props.title}</h1>
      <ul className = "list">
        {
          props.li.map((x) => <li className = "item">{x}</li>)
        }
      </ul>
    </Col>
  )
}

export default Homefooterlist
