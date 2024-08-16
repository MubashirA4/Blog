import React from 'react'
import './css/footer.css'
import { MdEmail } from "react-icons/md";
import Logo from './Assets/Logo (1).png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (  
    <footer>
      <div className="container">
        <div className="footer">
          <div className="about">
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            <h4>Email: <span>info@jstemplate.net</span></h4>
            <h4>Phone: <span>880 123 456 789</span></h4>
          </div>
        <div className="links-otr">
            <div className="Qlink">
            <h2>Quick Link</h2>
            <h4><Link to="/">Home</Link></h4>
            <h4><Link to="/">About</Link></h4>
            <h4><Link to="/">Blog</Link></h4>
            <h4><Link to="/">Archived</Link></h4>
            <h4><Link to="/">Author</Link></h4>
            <h4><Link to="/">Contact</Link></h4>
          </div>
          <div className="category">
            <h2>Category</h2>
            <h4><Link to="/">Lifestye</Link></h4>
            <h4><Link to="/">Technology</Link></h4>
            <h4><Link to="/">Travel</Link></h4>
            <h4><Link to="/">Business</Link></h4>
            <h4><Link to="/">Economy</Link></h4>
            <h4><Link to="/">Sports</Link></h4>
          </div>
        </div>
          <div className="newsletter">
            <div>
              <h2>Weekly Newsletter</h2>
              <p>Get blog articles and offers via email</p>
              <div className="email">
                <input type="email" placeholder='Your Email' />
                <MdEmail className='eicon' />
              </div>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="content">
            <img src={Logo} alt="" />
            <div className="inner_content">
              <h2>Meta <span>Blog</span></h2>
              <p>© <span>JS Template</span> 2023. All Rights Reserved.</p>
            </div>
          </div>
            <ul>
              <li><Link to="/">Term of Use</Link></li>
              <li><Link to="/">Privacy Policy</Link></li>
              <li><Link to="/">Cookie Policy</Link></li>
            </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer