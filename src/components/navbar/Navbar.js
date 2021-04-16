import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

function Navbar() {
    return (
        <Router>
            <ul>
                <li><Link to="/"><h2>Delivery</h2></Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </Router>
    )
}

export default Navbar
