import React, { Component } from 'react'
import Navbar from '../../Components/Navbar';
import './Dashboard.css'
import karachi from '../../Images/karachi.jpg'
import peshawar from '../../Images/peshawar.jpg'
import lahore from '../../Images/lahore.jpg'


class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navbar loggedIn={true} />
                <div className="carouselParent">
                    <div id="demo" className="carousel slide" data-ride="carousel">
                        <ul className="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                        </ul>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={karachi} alt="Karachi" />
                            </div>
                            <div className="carousel-item">
                                <img src={lahore} alt="Lahore" />
                            </div>
                            <div className="carousel-item">
                                <img src={peshawar} alt="Peshawar" />
                            </div>
                        </div>

                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#demo" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>
                    </div>
                </div>

                <div className="categories-opt">
                    <h2 style={{margin: '0px auto' , marginTop: '30px' , color: 'black'}}>Our Categories</h2>
                </div>

            </div>
        )
    }
}

export default Dashboard
