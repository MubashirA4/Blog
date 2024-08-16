import React,{useState} from 'react'
import axios from 'axios';
import { apiUrl } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(null); // State for photo
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent the default form submission

    const userData = new FormData(); // Create a FormData object
    userData.append('name', name);
    userData.append('email', email);
    userData.append('password', password);
    userData.append('user_photo', photo); // Append the photo to userData

    setLoading(true);

    axios.post(`${apiUrl}logup`, userData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Set header for multipart data
      },
    })
    .then(function (response) {
      navigate('/signin');
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className="container">
      <div className='signup'>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <h3>SIGN UP</h3>
            <p>SignUp to continue in MetaBlog</p>
            <input type="text" placeholder='Enter your Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder='Enter your Gmail' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="file" onChange={(e) => setPhoto(e.target.files[0])} /> {/* New file input */}
            <button type="submit" disabled={!name || !email || !password || !photo}>
              {loading ? 'Signing up...' : 'Sign up'}
            </button>
            <p>Already have an account? <Link to="/signin">Signin</Link></p>
          </form>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default Signup