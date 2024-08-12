import React from 'react'
import '../css/post.css'
import Sea from '../assets/cards/sea.png'
import Tracey from '../assets/profile/tracey.png'
import Temple from '../assets/cards/temple.png'
import Car1 from '../assets/cards/car(1).png'
import Home from '../assets/cards/home.png'
import Stone from '../assets/cards/stone.png'
import Car2 from '../assets/cards/car(2).png'
import Phone from '../assets/cards/phone.png'
import Sea2 from '../assets/cards/sea(2).png'
import Controller from '../assets/cards/controlller.png'
import Json from '../assets/profile/Json.png'
import Elizbath from '../assets/profile/Elizabeth.png'
import Ernie from '../assets/profile/Ernie.png'
import Eric from '../assets/profile/eric.png'

const Post = () => {
    return (
        <div className='container'>
            <div className="advert">
                <h4>Advertisement</h4>
                <h2>You can place ads</h2>
                <p>750x100</p>
            </div>
            <div className="post">
                <h2>Latest Post</h2>
                <div className="cards">
                    <div className="card">
                        <div className="img-otr">
                            <img src={Sea} alt="" />
                        </div>
                        <h4>Technology</h4>
                        <a href="/single_post" className="heading">The Impact of Technology on the Workplace: How Technology is Changing</a>
                        <div className="intro">
                            <img src={Tracey} alt="" />
                            <p>Tracey Wilson  <span> August 20,2022</span></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-otr">
                            <img src={Temple} alt="" />
                        </div>
                        <h4>Technology</h4>
                        <a href="/single_post" className="heading">The Impact of Technology on the Workplace: How Technology is Changing</a>
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
                        <a href="/single_post" className="heading">The Impact of Technology on the Workplace: How Technology is Changing</a>
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
                        <a href="/single_post" className="heading">The Impact of Technology on the Workplace: How Technology is Changing</a>
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
                        <a href="/single_post" className="heading">The Impact of Technology on the Workplace: How Technology is Changing</a>
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
                        <a href="/single_post" className="heading">The Impact of Technology on the Workplace: How Technology is Changing</a>
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
                        <a href="/single_post" className="heading">The Impact of Technology on the Workplace: How Technology is Changing</a>
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
                        <a href="/single_post" className="heading">The Impact of Technology on the Workplace: How Technology is Changing</a>
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
                        <a href="/single_post" className="heading">The Impact of Technology on the Workplace: How Technology is Changing</a>
                        <div className="intro">
                            <img src={Ernie} alt="" />
                            <p>Ernie Smith  <span> August 20,2022</span></p>
                        </div>
                    </div>
                </div>
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
    )
}

export default Post