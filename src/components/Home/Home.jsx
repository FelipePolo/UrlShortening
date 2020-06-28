import React from 'react'
import {Container} from 'reactstrap'
import "../../sass/home.scss"

//importing components
import Homeheader from './Homeheader'
import Homebody from './Homebody'
import Homefooter from './Homefooter'
function Home() {
  return (
    <div className = "home p-0 container-fluid">
      <Homeheader/>
      <Homebody/>
      <Homefooter/>
    </div>
  )
}

export default Home
