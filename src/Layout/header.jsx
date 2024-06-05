import React from 'react'
import './css/header.css'
import Logo from './Assets/Logo.png'
import { IoSearchSharp } from "react-icons/io5";


const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className="head">
          <div className='logo'>
            <img src={Logo} alt="" />
            <h3>Meta<span>Blog</span></h3>
          </div>
          <nav>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Single post</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
          </nav>
            <div className="search">
              <input type="text" placeholder='Search' />
              <IoSearchSharp className='sicon'/>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header