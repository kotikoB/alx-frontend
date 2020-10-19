import React from 'react';
import Jokes from './components/Jokes/Jokes';
import Anime from './components/Anime/Animes';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// components
// import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import Navigation from './components/Navigation/Navigation';

const App = () => {
    return (
        <Router>
            <div className='App'>
                <Navigation />
            </div>
            <Route exact path='/' component={ProtectedRoute(Jokes)} />
            <Route exact path='/anime' component={ProtectedRoute(Anime)} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
        </Router>
    );
};

export default App;
