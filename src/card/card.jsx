import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({imgsrc, title, link, heading, authorImage, authorName, authorDate}) => {
    return (
        <div className="card">
            <div className="img-otr">
                <img src={imgsrc} alt="" />
            </div>
            <h4>{title}</h4>
            <Link to={link} className="heading">{heading} </Link>
            <div className="intro">
                <img src={authorImage} alt="" />
                <p>{authorName}  <span>{authorDate} </span></p>
            </div>
        </div>
    )
}

export default Card