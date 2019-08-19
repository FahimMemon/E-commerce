import React, { Component } from 'react'
import './Login.css'
import Navbar from '../../Components/Navbar';

class Login extends Component {
    render() {
        return (
            <div>
                <Navbar loggedIn={false} active="active" active1="" />
                <div className="login">
                    <div className="side">
                        <div className="content-side">
                            <h3>Have an Account?</h3>
                            <div className="forms">
                                <div className="for-cont">
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div className="for-cont">
                                    <input type="password" placeholder="Password" />
                                </div>
                                <div className="for-cont">
                                    <button className="btn-login">Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidetwo">

                    </div>
                </div>
            </div>
        )
    }
}

export default Login
