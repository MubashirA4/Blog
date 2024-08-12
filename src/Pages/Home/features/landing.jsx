import React from 'react'
import '../css/landing.css'
import Image from '../assets/landing.png'
import Profile from '../assets/profile(1).png'



const Landing = () => {
  return ( 
    <div className="hero">
      <div className="container">
        <div className="hero-inr">
            <div className="technology bg-blue">
              <h4>Technology</h4>
              <h1>The Impact of Technology on <br /> the Workplace: How <br /> Technology is Changing</h1>
              <div className="profile">
                <img src={Profile} alt="" />
                <h3>Jason Francisco</h3>
                <h5>August 20, 2022</h5>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Landing