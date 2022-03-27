import React from 'react'
import logo from '../images/logo192.png'


export default function Navbar() {
  return (
    <div className="nav-bar">
      <div className="nav-bar-left">
        <img src={logo} alt="React Logo" width="40px" />
        <h3>ReactFacts</h3>
      </div>
      <h4>React Course - Project 1</h4>
    </div>
  )
}
