import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './navbar.css'

function Navbar() {
    return (
        <>
            <header>
                    <div className="menu-toggle" id="hamburger">
                        <i className="fas fa-bars"></i>
                    </div>
                    <div className="overlay"></div>
                    <div className="container">
                        <nav>
                            <Router>
                                <h1 className="delivery"><Link to="/">Del<span>i</span>very</Link></h1>
                                <ul>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                </ul>
                            </Router>
                        </nav>
                    </div>
            </header>
        </>
    )
}

export default Navbar