import React from 'react'
import './css/header.css'
import Logo from './Assets/Logo.png'
import { IoSearchSharp } from "react-icons/io5";
// import { MdOutlineWbSunny } from "react-icons/md";

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className="head">
          <div className='logo'>
            <img src={Logo} alt="" />
          </div>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/single_post">Single post</a></li>
              <li><a href="/pages">Pages</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/signin">Signin</a></li>
            </ul>
          </nav>
          <div className="search">
            <div className="isearch">
              <input type="text" placeholder='Search' />
              <IoSearchSharp className='sicon' />
          </div>
          <div className="toggle">
            <input type="checkbox" name="" id="check" />
            <label htmlFor="check" className='button'></label>
          </div>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header