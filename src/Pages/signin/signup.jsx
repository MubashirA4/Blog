import React from 'react'
import { FaBlog } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Signup = () => {
  return (
    <div className="container">
    <div className='signup'>
      <div className="form">
        <form action="">
          <h3>SIGN UP</h3>
          <p>SignUp to continue in MetaBlog</p>
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
          <input type="email" placeholder='Enter your Gmail' />
          <input type="password" placeholder='Enter Your Password' />
          
          <h6><a href="#"><FaGoogle /> Continue with Google</a></h6>
          <button>Sign up</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Signup