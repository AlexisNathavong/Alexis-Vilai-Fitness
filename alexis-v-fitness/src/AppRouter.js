import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

//Styling
import { Nav } from './components/StyledWidgets';
import AboutPage from './components/AboutPage';
import WelcomePage from './components/WelcomePage';
import WorkoutPage from './WorkoutPage';

const AppRouter = () => {

    return (
        <Router>
            <Nav>
                <div className='app-router'>
                    <Link to ='/'>Home</Link>
                    <Link to ='/aboutpage'>About</Link>
                    <Link to ='/workoutpage'>Workout</Link>
                </div>
            </Nav>

            <Switch>
                <Route exact path='/' component={WelcomePage} />
                <Route path='/aboutpage' component={AboutPage} />
                <Route path='/workoutpage' component={WorkoutPage} />
            </Switch>
        </Router>


    )
}

export default AppRouter;