import React from 'react'
import NavBar from './NavBar'
import "../common.css";
const Login = () => {
  return (
    <div>
    <NavBar/>
    <div className="home-container">
        <img src={`${process.env.PUBLIC_URL}/slider-bg.jpg`} alt="User" className="home-image" />
        <p className="home-text">Welcome, Cargo-Live !<br/>Login</p>
      </div>
    </div>
  )
}

export default Login
