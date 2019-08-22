import React, { Component } from 'react'
import { Route, Router } from 'react-router-dom'
import Login from '../Containers/Login/Login';
import SignUp from '../Containers/SignUp/Signup';
import Dashboard from '../Containers/Dashboard/Dashboard';
import Sell from '../Containers/Sell/Sell';

const CreateBrowserHistory = require("history").createBrowserHistory
const history = CreateBrowserHistory()

class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/sell" component={Sell} />
            </Router>
        )
    }
}

export default Routes
