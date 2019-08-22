import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import logo from '../Images/logo.jpg'
import './style.css'

class NavbarLogin extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Logo" />
                        Bazaar
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <button className="btn btn-outline-dark my-2 my-sm-0 active" style={{ margin: 1, padding: 10 }} onClick={() => this.props.history.push("/")}>Login</button>
                            <button className="btn btn-outline-dark my-2 my-sm-0" style={{ margin: 1, padding: 10 }} onClick={() => this.props.history.push("/signup")}>Signup</button>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default withRouter(NavbarLogin)