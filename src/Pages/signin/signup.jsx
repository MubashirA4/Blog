import React,{useState} from 'react'
import axios from 'axios';
import { apiUrl } from '../../utils';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[loading, setLoading] = useState(false)

  const userData = {
    name: name,
    email: email,
    password: password
  }

  const handleSubmit = () => {
 
    axios.post(`${apiUrl}logup`, userData)
    .then(function (response) {
      navigate('/signin')
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="container">
    <div className='signup'>
      <div className="form">
        <form action="">
          <h3>SIGN UP</h3>
          <p>SignUp to continue in MetaBlog</p>
          <input type="text" placeholder='Enter your Name' value={name} onChange={(e)=>setName(e.target.value)}/>
          <input type="email" placeholder='Enter your Gmail' value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder='Enter Your Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <button disabled={!name && !email && !password} onClick={handleSubmit}>
            {loading ? 'Sign in...' : 'Sign up'}
        </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Signup