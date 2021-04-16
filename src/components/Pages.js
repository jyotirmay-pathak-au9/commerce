import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Cart from './cart/Cart'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'

function Pages() {
    return (
        <Router>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={Login} />
        </Router>
    )
}

export default Pages
