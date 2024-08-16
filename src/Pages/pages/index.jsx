import React from 'react'
import './css/page.css'
import { MdAccountCircle } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Sea from '../Home/assets/cards/sea.png'
import Tracey from '../Home/assets/profile/tracey.png'
import Temple from '../Home/assets/cards/temple.png'
import Car1 from '../Home/assets/cards/car(1).png'
import Home from '../Home/assets/cards/home.png'
import Stone from '../Home/assets/cards/stone.png'
import Car2 from '../Home/assets/cards/car(2).png'
import Phone from '../Home/assets/cards/phone.png'
import Sea2 from '../Home/assets/cards/sea(2).png'
import Controller from '../Home/assets/cards/controlller.png'
import Json from '../Home/assets/profile/Json.png'
import Elizbath from '../Home/assets/profile/Elizabeth.png'
import Ernie from '../Home/assets/profile/Ernie.png'
import Eric from '../Home/assets/profile/eric.png'
import { Link } from 'react-router-dom';


const Pages = () => {
  return (
    <div className='container'>
      <div className="page">
        <div className="page-intro">
          <div className="profile">
            <MdAccountCircle size={80} className='profile-icon' />
            <div className="info">
              <h3>Jonathan Doe</h3>
              <p>Collaborator & Editor</p>
            </div>
          </div>
          <p>Meet Jonathan Doe, a passionate writer and blogger with a love for <br /> technology and travel. Jonathan holds a degree in Computer Science and <br /> has spent years working in the tech industry, gaining a deep understanding <br /> of the impact technology has on our lives.</p>
        </div>
        <div className="page-icon">
          <Link to="/" className="icon-otr f-icon">
            <FaFacebook className='p-icon' />
          </Link>
          <Link to="/" className="icon-otr t-icon">
            <FaTwitter className='p-icon' />
          </Link>
          <Link to="/" className="icon-otr i-icon">
            <FaInstagram className='p-icon' />
          </Link>
          <Link to="/" className="icon-otr y-icon">
            <FaYoutube className='p-icon' />
          </Link>
        </div>
      </div>
      <div className="post p-post">
        <div className="cards">
          <div className="card">
            <div className="img-otr">
              <img src={Sea} alt="" />
            </div>
            <h4>Technology</h4>
            <Link to="/single_post" className="heading">The Impact of Technology on the Workplace: How Technology is Changing</Link>
            <div className="intro">
              <img src={Tracey} alt="" />
              <p>Tracey Wilson  <span> August 20,2022</span></p>
            </div>
          </div>
          <div className="card">
            <div className="img-otr">
              <img src={Temple} alt="" />
            </div>
            <h4>Technology</h4>
            <Link to="/single_post" className="heading">The Impact of Technology on the Workplace: How Technology is Changing</Link>
            <div className="intro">
              <img src={Json} alt="" />
              <p>Json Francisco  <span> August 20,2022</span></p>
            </div>
          </div>
          <div className="card">
            <div className="img-otr">
              <img src={Car1} alt="" />
            </div>
            <h4>Technology</h4>
            <Link to="/single_post" className="heading">The Impact of Technology on the Workplace: How Technology is Changing</Link>
            <div className="intro">
              <img src={Elizbath} alt="" />
              <p>Elizabeth Slavin  <span> August 20,2022</span></p>
            </div>
          </div>
          <div className="card">
            <div className="img-otr">
              <img src={Home} alt="" />
            </div>
            <h4>Technology</h4>
            <Link to="/single_post" className="heading">The Impact of Technology on the Workplace: How Technology is Changing</Link>
            <div className="intro">
              <img src={Ernie} alt="" />
              <p>Ernie Smith  <span> August 20,2022</span></p>
            </div>
          </div>
          <div className="card">
            <div className="img-otr">
              <img src={Stone} alt="" />
            </div>
            <h4>Technology</h4>
            <Link to="/single_post" className="heading">The Impact of Technology on the Workplace: How Technology is Changing</Link>
            <div className="intro">
              <img src={Eric} alt="" />
              <p>Eric Smith  <span> August 20,2022</span></p>
            </div>
          </div>
          <div className="card">
            <div className="img-otr">
              <img src={Car2} alt="" />
            </div>
            <h4>Technology</h4>
            <Link to="/single_post" className="heading">The Impact of Technology on the Workplace: How Technology is Changing</Link>
            <div className="intro">
              <img src={Tracey} alt="" />
              <p>Tracey Wilson  <span> August 20,2022</span></p>
            </div>
          </div>
          <div className="card">
            <div className="img-otr">
              <img src={Phone} alt="" />
            </div>
            <h4>Technology</h4>
            <Link to="/" className="heading">The Impact of Technology on the Workplace: How Technology is Changing</Link>
            <div className="intro">
              <img src={Json} alt="" />
              <p>Json Francisco  <span> August 20,2022</span></p>
            </div>
          </div>
          <div className="card">
            <div className="img-otr">
              <img src={Sea2} alt="" />
            </div>
            <h4>Technology</h4>
            <Link to="/" className="heading">The Impact of Technology on the Workplace: How Technology is Changing</Link>
            <div className="intro">
              <img src={Elizbath} alt="" />
              <p>Elizabeth Slavin  <span> August 20,2022</span></p>
            </div>
          </div>
          <div className="card">
            <div className="img-otr">
              <img src={Controller} alt="" />
            </div>
            <h4>Technology</h4>
            <Link to="/single_post" className="heading">The Impact of Technology on the Workplace: How Technology is Changing</Link>
            <div className="intro">
              <img src={Ernie} alt="" />
              <p>Ernie Smith  <span> August 20,2022</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pages