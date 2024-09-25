import React from 'react'
import '../css/post.css'
import Card from '../../../card/card'
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
import { Link, useNavigate } from 'react-router-dom'


const Post = () => {
    const navigate = useNavigate()
    const handlechange = () => {
        navigate('/blog')
    }
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
                    <Card
                        imgsrc={Sea}
                        title="Technology"
                        link="/single_post"
                        heading="The Impact of Technology on the Workplace: How Technology is Changing"
                        authorImage={Tracey}
                        authorName="Tracey Wilson "
                        authorDate="August 20, 2022"
                    />
                    <Card
                        imgsrc={Temple}
                        title="Technology"
                        link="/single_post"
                        heading="The Impact of Technology on the Workplace: How Technology is Changing"
                        authorImage={Json}
                        authorName="Jason Francisco "
                        authorDate="August 20, 2022"
                    />
                    <Card
                        imgsrc={Car1}
                        title="Technology"
                        link="/single_post"
                        heading="The Impact of Technology on the Workplace: How Technology is Changing"
                        authorImage={Elizbath}
                        authorName="Elizabeth Slavin "
                        authorDate="August 20, 2022"
                    />
                    <Card
                        imgsrc={Home}
                        title="Technology"
                        link="/single_post"
                        heading="The Impact of Technology on the Workplace: How Technology is Changing"
                        authorImage={Ernie}
                        authorName="Ernie Smith"
                        authorDate="August 20, 2022"
                    />
                    <Card
                        imgsrc={Stone}
                        title="Technology"
                        link="/single_post"
                        heading="The Impact of Technology on the Workplace: How Technology is Changing"
                        authorImage={Eric}
                        authorName="Eric Smith"
                        authorDate="August 20, 2022"
                    />
                    <Card
                        imgsrc={Car2}
                        title="Technology"
                        link="/single_post"
                        heading="The Impact of Technology on the Workplace: How Technology is Changing"
                        authorImage={Tracey}
                        authorName="Tracey Wilson"
                        authorDate="August 20, 2022"
                    />
                    <Card
                        imgsrc={Phone}
                        title="Technology"
                        link="/single_post"
                        heading="The Impact of Technology on the Workplace: How Technology is Changing"
                        authorImage={Json}
                        authorName="Jason Francisco"
                        authorDate="August 20, 2022"
                    />
                    <Card
                        imgsrc={Sea2}
                        title="Technology"
                        link="/single_post"
                        heading="The Impact of Technology on the Workplace: How Technology is Changing"
                        authorImage={Elizbath}
                        authorName="Elizabeth Slavin"
                        authorDate="August 20, 2022"
                    />
                    <Card
                        imgsrc={Controller}
                        title="Technology"
                        link="/single_post"
                        heading="The Impact of Technology on the Workplace: How Technology is Changing"
                        authorImage={Ernie}
                        authorName="Ernie Smith"
                        authorDate="August 20, 2022"
                    />
                </div>
                <div className="view_post">
                    <button onClick={handlechange}>View All Post</button>
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