import React from 'react'
import { useState, useEffect } from 'react'
import logo from '../images/icon.png'

export default function Navbar() {
    let navbarBlur = {
        opacity: '1'
    }

    let navbarStyle = {
        height: '5rem'
    }

    const [useStyle, setStyle] = useState(false);
    const handleScroll = () =>{
        if(window.scrollY >= 20){
            setStyle(true);
        }
        else{
            setStyle(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    });

    return (
        <div className="navbar-container" style={useStyle ? navbarStyle : null}> 
            <div className="navbar-blur" style={useStyle ? navbarBlur : null}></div>
            <img src={logo} alt="GDC Logo" className="logo"/>
            <div className="navbar-links">
                {/* <a href="#">HOME</a> */}
                <a href="https://linktr.ee/GameDevelopmentClub_VITCC">LINKTREE</a>
            </div>
        </div>
    )
}
