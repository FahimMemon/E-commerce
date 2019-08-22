import React, { Component } from 'react'
import Navbar from '../../Components/Navbar';
import './Sell.css'

class Sell extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="sell-div">
                    <div className="posts-heading">
                        <h3>Sell Things</h3>
                    </div>
                    <div className="sell-area">
                        <div className="side">
                            <div className="content-side">
                                <h3>Post Ad</h3>
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
                                        <button className="btn-login">Post</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sidetwo">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sell
