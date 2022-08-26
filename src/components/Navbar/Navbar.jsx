import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/netflixlogo.png'
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <div className="nav">
                <div className="leftNav d-flex">
                    <img src={logo} alt="Netflix Logo" />
                </div>
                <div className="rightNav d-flex">
                    <div className="dropDownButtton">
                        <button>English</button>
                    </div>

                    <Link to="signin">
                        <button className='signinButton'>Sign In</button>
                    </Link>


                </div>
            </div>
        </>
    )
}


export const Search = () => {
    return (

        <div className="search">
            <input type="text" placeholder='Email address' />
            <Link to="signin">
                <button className='getStarted'>Get Started</button>
            </Link>
        </div>
    )
}




export const Navbar2 = ()=>{
    return(
        <div className="nav2">
                <div className="leftNav2 d-flex">
                    <img src={logo} alt="Netflix Logo" />
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Tv Shows</a></li>
                        <li><a href="/">Movies</a></li>
                        <li><a href="/">Latest</a></li>
                        <li><a href="/">My list</a></li>
                    </ul>
                </div>
                <div className="rightNav2 d-flex">
                    <div className="dropDownButtton">
                        <button className='welcome'>🐰 Welcome Name</button>
                    </div>

                    <Link to="/">
                        <button className='signinButton'>Sign out</button>
                    </Link>


                </div>
            </div>
    )
}






export default Navbar