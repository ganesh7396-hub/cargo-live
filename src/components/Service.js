import React from 'react'
import NavBar from './NavBar'
import "../common.css";
const Service = () => {
  return (
    <div>
      <NavBar/>
      <div className="home-container">
        <img src={`${process.env.PUBLIC_URL}/slider-bg.jpg`} alt="User" className="home-image" />
        <p className="home-text">Welcome, Cargo-Live !<br/>Service</p>
      </div>


      <div className='service-div'>
      <h1> Our <span className='service-id'>Services</span>      </h1>
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration

        </p>

      <div className='service-main-card'>
        <div className='service-card'>
            <div className='service-card-title'>
              <h1> Air Transport</h1>  


            </div>
            <div className='service-card-body'>
            fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
              
              </div>
              <div className='service-card-footer'>
              
              </div>

        </div>


      </div>



      </div>


    </div>
 

  )
}

export default Service
