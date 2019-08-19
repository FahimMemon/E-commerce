import React, { Component } from 'react'
import { Route, Router } from 'react-router-dom'
import Login from '../Containers/Login/Login';
import SignUp from '../Containers/SignUp/Signup';

const CreateBrowserHistory = require("history").createBrowserHistory
const history = CreateBrowserHistory()

class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={SignUp} />
            </Router>
        )
    }
}

export default Routes
