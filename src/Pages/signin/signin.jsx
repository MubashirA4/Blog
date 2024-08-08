import React from 'react'
// import image from './assets/image.png'
// import { FaBlog } from "react-icons/fa";


const Signin = () => {
    return (
        <div className="container">
            <div className='contact'>
                <div className="form">
                    <div className="login">
                        <h3><a href="/contact">Login</a></h3>
                        <h3><a href="/signup">Signup</a></h3>
                    </div>
                    <form action="">
                        <h3>SIGN IN</h3>
                        <p>Signin to continue in MetaBlog</p>
                        <input type="text" placeholder='sample@gmail.com' />
                        <input type="password" placeholder='Pasword123' />
                        <button>Sign in</button>
                    </form>
                </div>
                <div className="image">
                    {/* <img src={image} alt="" /> */}
                    {/* <div className="circle">
                        <div className="card">
                            <div className="key">
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Signin