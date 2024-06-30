import React from 'react'
import '../css/landing.css'
import Image from '../assets/landing.png'
import Profile from '../assets/profile(1).png'



const Landing = () => {
  return (
    <div className="container">
      <div className="img">
        <img src={Image} alt="" />
        <div className="technology">
          <h4>Technology</h4>
          <p>The Impact of Technology on <br /> the Workplace: How <br /> Technology is Changing</p>
          <div className="profile">
            <img src={Profile} alt="" />
            <h3>Jason Francisco</h3>
            <h5>August 20, 2022</h5>
          </div>
        </div>
      </div>
      <div className="advert">
        <h4>Advertisement</h4>
        <h2>You can place ads</h2>
        <p>750x100</p>
      </div>
    </div>
  )
}

export default Landing