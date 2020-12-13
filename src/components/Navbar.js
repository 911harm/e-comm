import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="nav-bar">
            <div className="brand">
                <a href="/">
                    <img src="./images/ryzen.svg" alt="logo" />
                </a>
            </div>
            <div className="menu">
                <nav>
                    <ul>
                        <li>Cart</li>
                        <li>Sing in</li>
                        <li>Sing up</li>
                    </ul>
                </nav>
            </div>
            <div className="menu-short">
                <div>
                    <i className="fa fa-bars"></i>
                </div>
            </div>
        </div>
    )
}
