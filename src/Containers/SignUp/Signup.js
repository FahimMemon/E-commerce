import React, { Component } from 'react'
import './Signup.css'
import NavbarSignUp from '../../Components/NavbarSignUp';

class SignUp extends Component {
    render() {
        return (
            <div>
                <NavbarSignUp />
                <div className="signup">
                    <div className="sides">
                        <div className="contents-side">
                            <h3>Want an Account?</h3>
                            <div className="forms">
                                <div className="for-cont">
                                    <input type="text" placeholder="Name" />
                                </div>
                                <div className="for-cont">
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div className="for-cont">
                                    <input type="file" placeholder="File" />
                                </div>
                                <div className="for-cont">
                                    <input type="password" placeholder="Password" />
                                </div>
                                <div className="for-cont">
                                    <input type="password" placeholder="Confirm Password" />
                                </div>
                                <div className="for-cont">
                                    <select>
                                        <option>Karachi</option>
                                        <option>Faisalabad</option>
                                        <option>Hyderabad</option>
                                        <option>Lahore</option>
                                        <option>Murree</option>
                                        <option>Sukkhur</option>
                                        <option>Multan</option>
                                        <option>RawalPindi</option>
                                        <option>Quetta</option>
                                        <option>Peshawar</option>
                                    </select>
                                </div>
                                <div className="for-cont">
                                    <button className="btn-login">Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidestwo">

                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp
