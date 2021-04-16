import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
        <Router>
            <nav className="navbar">
            <div className="navbar-container">
                    <Link to="/" className="navbar-logo">Delivery</Link>
                
                    <ul className="nav-menu">
                        <li className="nav-items"><Link to="/about" className="nav-links">About</Link></li>
                        <li className="nav-items"><Link to="/contact" className="nav-links">Contact</Link></li>
                        <li className="nav-items"><Link to="/cart" className="nav-links">Cart</Link></li>
                        <li className="nav-items"><Link to="/login" className="nav-links">Login</Link></li>
                    </ul>
                </div>
            </nav>
        </Router>
    )
}

export default Navbar
