import React from 'react'
import "./Card.css"
// import tvImage from "../../images/Tvremote.png"
import Video from "../../images/video1.m4v"
import { Hrline } from '../Home/Home'

const Card = (props) => {
    
    const flexReverse = {
        "flexDirection":"row-reverse"
    }

    return (

        <>

            <div className="cardContainer">
                <div className="container" style={props.reverse && flexReverse} >

                    <div className="text">
                        <h1> {props.title} </h1>
                        <h2>{props.content}</h2>
                    </div>
                    <div className="animation">
                        <img src={props.image} alt="" />
                      { props.showVideo && <video width="320" height="240" autoPlay playsInline muted loop>
                            <source src={Video} type="video/mp4"/>
                        </video>}
                    </div>
                </div>
            </div>

            <Hrline />
        </>
    )
}

export default Card