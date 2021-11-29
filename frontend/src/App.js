import React from 'react';


import Login from './containers/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import Facebook from './containers/Facebook';
import Google from './containers/Google';

import { Provider } from 'react-redux';
import store from './store';

import Layout from './hocs/Layout';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Account from './components/Account/Account';
import JoinedRides from './components/JoinedRides/JoinedRides';
import ScheduledRides from './components/ScheduledRides/ScheduledRides';


const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={AboutUs}/>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/facebook' component={Facebook} />
                    <Route exact path='/google' component={Google} />
                    <Route exact path='/reset-password' component={ResetPassword} />
                    <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
                    <Route exact path='/activate/:uid/:token' component={Activate} />
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/account" component={Account}/>
                    <Route exact path="/scheduledRides" component={ScheduledRides}/>
                    <Route exact path="/joinedRides" component={JoinedRides}/>
                </Switch>
            </Layout>
        </Router>
    </Provider>
);

export default App;