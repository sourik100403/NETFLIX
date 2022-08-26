import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">

            <div className="footerContainer">
                <p>Questions? Call 000-800-040-1843</p>
                <div className="footerList">
                    <div className="lists">
                        <ul>
                            <li> <a href='/'> FAQ </a></li>
                            <li> <a href='/'>Help Centre</a> </li>
                            <li> <a href='/'>Account</a> </li>
                            <li> <a href='/'>Media Centre</a></li>
                        </ul>
                    </div>
                    <div className="lists">
                        <ul>
                            <li> <a href='/'>  Investor  Relations </a> </li>
                            <li> <a href='/'>Jobs</a></li>
                            <li> <a href='/'> Ways to Watch  </a> </li>
                            <li> <a href='/'>Terms of Use</a></li>
                        </ul>
                    </div>
                    <div className="lists">
                        <ul>
                            <li> <a href='/'>  Investor  Relations </a> </li>
                            <li> <a href='/'>Jobs</a></li>
                            <li> <a href='/'> Ways to Watch  </a> </li>
                            <li> <a href='/'>Terms of Use</a></li>
                        </ul>
                    </div>

                    <div className="lists">
                        <ul>
                            <li> <a href='/'>Cookie Preferences</a></li>
                            <li> <a href='/'>Corporate Information</a></li>
                            <li> <a href='/'>Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                <button>English</button>
                <div className="text">Netflix India</div>

            </div>
        </div>
    )
}

export default Footer