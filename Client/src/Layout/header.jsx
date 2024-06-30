import React from 'react'
import './css/header.css'
import Logo from './Assets/Logo.png'
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

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
              <li><a href="/">Home</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/single_post">Single post</a></li>
              <li><a href="/pages">Pages</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
          <div className="search">
            <div className="isearch">
              <input type="text" placeholder='Search' />
              <IoSearchSharp className='sicon' />
            </div>
          </div>
          <div className="mode">
            <div className="m-off">           
            </div>
            <div className="sun">
              <MdOutlineWbSunny/>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header