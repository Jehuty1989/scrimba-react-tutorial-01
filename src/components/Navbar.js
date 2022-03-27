import React from 'react'
import logo from '../images/logo192.png'


export default function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="nav-bar-left">
        <img src={logo} alt="React Logo" />
        <h3>ReactFacts</h3>
      </div>
      <h4>React Course - Project 1</h4>
    </nav>
  )
}
