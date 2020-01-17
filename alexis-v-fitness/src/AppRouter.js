import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

//Styling
import { Nav } from './StyledWidgets';

const AppRouter = () => {

    return (
        <Router>
            <Nav>
                <div className='app-router'>
                    <Link to ='/'>Home</Link>
                    <Link to ='/aboutpage'>About</Link>
                    <Link to ='/workout'>Workout</Link>
                </div>
            </Nav>
        </Router>
    )
}

export default AppRouter;