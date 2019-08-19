import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    <a className="navbar-brand" href="#">Bazaar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        {this.props.loggedIn ? <ul className="navbar-nav" >
                            <li className="nav-item">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Signup</a>
                            </li>
                        </ul> : <ul className="navbar-nav">
                                <li className="nav-item">
                                </li>
                                <li className="nav-item">
                                </li>
                            </ul>}
                        {!this.props.loggedIn ? <ul className="navbar-nav">
                            <li className="nav-item" className={this.props.active} style={{ cursor: "pointer" }}>
                                <a className="nav-link" onClick={() => this.props.history.push("/")}>Login</a>
                            </li>
                            <li className="nav-item" className={this.props.active1} style={{ cursor: "pointer" }}>
                                <a className="nav-link" onClick={() => this.props.history.push("/signup")}>Signup</a>
                            </li>
                        </ul> : <ul className="navbar-nav navbar-right">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Logout</a>
                                </li>
                            </ul>}
                    </div>
                </nav>
            </div>
        )
    }
}

export default withRouter(Navbar)