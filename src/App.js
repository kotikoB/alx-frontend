import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// components
// import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Auth/Login';
// import Signup from './components/Auth/Signup';

const App = () => {
    return (
        <Router>
            <div className='App'>
                <Navigation />
            </div>
            <Route exact path='/' component={Home} />
            {/* <Route exact path='/' component={ProtectedRoute(Dashboard)} /> */}
            <Route exact path='/login' component={Login} />
            {/* <Route exact path='/signup' component={Signup} /> */}
        </Router>
    );
};

export default App;
