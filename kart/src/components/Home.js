import React from 'react';
import { Switch, Route} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';

function Home() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
        </Switch>
    )
}

export default Home
