import React from 'react'
import { Navbar2 } from '../Navbar/Navbar'
import mainImage from "../../images/main.jpeg"
import "./Main.css"
import MainCard from '../MainCard/MainCard'
import Footer from '../Footer/Footer'




const Main = () => {



    return (
        <>
            <Navbar2 />
            <div className="mainContainer">
                <div className="mainImage">
                    <img src={mainImage} alt="" />
                </div>
                <div className="mainText">
                    <h1 className='movieName'>Movie Name</h1>
                    <p>Ready to watch? Enter your email to create or restart your membership.
                    </p>
                    <div className="buttons">

                        <button>Play Episode</button>
                        <button>Watch together</button>
                    </div>
                </div>
            </div>

            <MainCard />

            <Footer/>

        </>
    )
}

export default Main