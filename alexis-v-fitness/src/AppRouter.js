import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

//Styling
import { Nav } from './StyledWidgets';
import AboutPage from './AboutPage';
import WelcomePage from './WelcomePage';

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

            <Switch>
                <Route exact path='/' component={WelcomePage} />
                <Route path='/aboutpage' component={AboutPage} />
            </Switch>
        </Router>


    )
}

export default AppRouter;