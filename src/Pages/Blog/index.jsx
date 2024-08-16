import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './css/blog.css'
import Image from './assets/landing.png'
import { MdAccountCircle } from "react-icons/md";
import Sea from './assets/cards/sea.png'
import Tracey from './assets/profile/tracey.png'
import Temple from './assets/cards/temple.png'
import Car1 from './assets/cards/car(1).png'
import Home from './assets/cards/home.png'
import Stone from './assets/cards/stone.png'
import Car2 from './assets/cards/car(2).png'
import Phone from './assets/cards/phone.png'
import Sea2 from './assets/cards/sea(2).png'
import Controller from './assets/cards/controlller.png'
import Json from './assets/profile/Json.png'
import Elizbath from './assets/profile/Elizabeth.png'
import Ernie from './assets/profile/Ernie.png'
import Eric from './assets/profile/eric.png'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { apiUrl } from '../../utils';

const Blog = () => {

  const [blogData, setBlogData] = useState([])
 
  useEffect(() => {
    axios.get(`${apiUrl}get_blogs`)
      .then(function (response) {
        setBlogData(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [])

  console.log("Data in blog", blogData)

  return (
    <div>
      <div className="container">
        <div className="page_title">
          <h2>Page TItle</h2>
          <p>Home <span className='vertical'> </span> Link One</p>
        </div>
        <div className="img">
          <img src={Image} alt="" />
          <div className="technology-1">
            <Button className="btn ">Technology</Button>
            <p>The Impact of Technology on the <br /> Workplace: How Technology is Changing</p>
            <div className="profile-1">
              <MdAccountCircle size={30} />
              <h3>Tracey Wilson</h3>
              <h5>August 20, 2022</h5>
            </div>
          </div>
        </div>
        <div className="post">
          <h2>Latest Post</h2>
          <div className="cards">
            {blogData?.map((item, index) => {
              return (
                <div className="card" key={index}>
                  <div className="img-otr">
                    <img src={Sea} alt="" />
                  </div>
                  <h4>Technology</h4>
                  <Link to="/single_post" className="heading">{item?.name}</Link>
                  <div className="intro">
                    <img src={Tracey} alt="" />
                    <p>{item.author_name}  <span> August 20,2022</span></p>
                  </div>
                </div>
              )
            })}

            <div className="card">
              <div className="img-otr">
                <img src={Temple} alt="" />
              </div>
              <h4>Technology</h4>
              <Link to="/single_post" className="heading">The Impact of Technology on the Workplace: How Technology is Changing</Link>
              <div className="intro">
                <img src={Json} alt="" />
                <p>Jason Francisco  <span> August 20,2022</span></p>
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
              <Link to="/single_post" className="heading">The Impact of Technology on the Workplace: How Technology is Changing</Link>
              <div className="intro">
                <img src={Json} alt="" />
                <p>Jason Francisco  <span> August 20,2022</span></p>
              </div>
            </div>
            <div className="card">
              <div className="img-otr">
                <img src={Sea2} alt="" />
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
          <Link to="/add_update_blog" >
          <Button>Add blog</Button>
        </Link>
          <div className="view_post">
            <button>View All Post</button>
          </div>
        </div>
        <div className="advert">
          <h4>Advertisement</h4>
          <h2>You can place ads</h2>
          <p>750x100</p>
        </div>
      </div>
    </div>
  )
}

export default Blog