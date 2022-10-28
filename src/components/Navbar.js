import React from 'react'
import navImg from  '../Images/Troll Face.png'

export function  Navbar () {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-header">
                    <img className="navbar-img" src={navImg}></img>
                    <span className="navbar-header-text">Meme Generator</span>
                </div>
            </nav>
        </div>
    )
}