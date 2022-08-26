import React from 'react'
import mainImage from "../../images/main.jpeg"
import Card from '../Card/Card'
import { Search } from '../Navbar/Navbar'
import "./Home.css"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

import tvImage from "../../images/Tvremote.png"
import girlImage from "../../images/gir.jpeg"
import imacImage from "../../images/imac.png"
import boyImage from "../../images/boy.png"

const Home = () => {
    return (
        <>
        <Navbar/>
            <div className="homeContainer">
                <div className="homeImage">
                    <img src={mainImage} alt="" />
                </div>
                <div className="homeText">
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <p>Ready to watch? Enter your email to create or restart your membership.
                    </p>
                    <Search />
                </div>
            </div>

            <Hrline />


            <Card
                title="Enjoy on your TV."
                content="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
                image={tvImage}
                showVideo
            />
            <Card
                title="Download your shows to watch offline."
                content="Save your favourites easily and always have something to watch."
                image={girlImage}
                reverse
            />
            <Card
                title="Watch everywhere."
                content="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
                image={imacImage}
            />
            <Card
                title="Create profiles for children."
                content="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
                image={boyImage}
                reverse
            />

            <Footer />

        </>
    )
}


export const Hrline = () => {
    return (
        <div className="hrline"></div>
    )
}


export default Home