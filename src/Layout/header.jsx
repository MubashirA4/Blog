import React,{useState, useEffect} from 'react'
import './css/header.css'
import Logo from './Assets/Logo.png'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { Navigate, useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate()
  let auth = localStorage.getItem('auth'); 

  const [isAuthenticated,setIsAuthenticated] = useState(false)

  useEffect(()=>{
    setIsAuthenticated(auth)
  },[auth])

  const logout =()=>{
    localStorage.setItem('auth', false)
    navigate('/')
  }

  const [showMenu, setShowMenu] = useState(false)

  return (
    <header>
      <div className='container'>
        <div className="head">
          <div className='logo'>
            <a href="/"><img src={Logo} alt="" /></a>
          </div>
          <nav className={`nav_links ${showMenu == true ? 'show_menu' : 'hide_menu'}`}>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/single_post">Single post</a></li>
              <li><a href="/pages">Pages</a></li>
              <li><a href="/contact">Contact</a></li>
              {isAuthenticated == 'true' ? <li className='text-white' onClick={logout}><a href="">Signout</a></li> : <li><a href="/signin">Signin</a></li> }
            </ul>
          </nav>
          <div className="search">
            <div className="isearch">
              <input type="text" placeholder='Search' />
              <IoSearchSharp className='sicon' />
            </div>
            <div className="toggle-icon">
              <div className="icon-otr">
                <IoSearchSharp className='sicon' />
              </div>
              <div className="toggle">
                <label className="switch">
                  <input className='toggleBtn' type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="bar_menu text-white" onClick={() => setShowMenu(!showMenu)}>
            {showMenu == true ? <FaTimes /> : <FaBars />}
          </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header