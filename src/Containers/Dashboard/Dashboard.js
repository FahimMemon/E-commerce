import React, { Component } from 'react'
import Navbar from '../../Components/Navbar';
import './Dashboard.css'
import cash from '../../Images/bg-img.png'
import Footer from '../../Components/Footer';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navbar />

                {/* Reputation tab starts */}
                <section className="bg-img pt70 pb70" style={{ backgroundImage: `url(${cash})` }}>
                    <div className="overlay_dark"></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-10">
                                <h4 className="text-center color-light">Our overall Reputation</h4>
                                <div className="countdown">
                                    <div>
                                        12
                                        <span>
                                            Total Users
                                        </span>
                                    </div>
                                    <div>
                                        12
                                        <span>
                                            Total Posts
                                        </span>
                                    </div>
                                    <div>
                                        12
                                        <span>
                                            Total Sellers
                                        </span>
                                    </div>
                                    <div>
                                        12
                                        <span>
                                            Deals done
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Reputation tab ends */}

                <div className="latest-posts">
                    <div className="posts-heading">
                        <h2>Latest Posts</h2>
                    </div>
                    <div className="cards-area">
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top" src={cash} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top" src={cash} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top" src={cash} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top" src={cash} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cateogries Tab start */}
                <div className="categories-opt">
                    <div className="posts-heading">
                        <h2>Our Categories</h2>
                    </div>
                    <div className="cards-area">
                        <div className="card" style={{ width: "16rem" }}>
                            <div className="posts-heading">
                                <h4>Properties</h4>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Houses For Sale</h5>
                                <h5 className="card-title">Houses For Rent</h5>
                                <h5 className="card-title">Lands & Plots</h5>
                            </div>
                        </div>
                        <div className="card" style={{ width: "16rem" }}>
                            <div className="posts-heading">
                                <h4>Furniture</h4>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Sofa & Dining</h5>
                                <h5 className="card-title">Beds & Wardrobes</h5>
                                <h5 className="card-title">Kids Furniture</h5>
                            </div>
                        </div>
                        <div className="card" style={{ width: "16rem" }}>
                            <div className="posts-heading">
                                <h4>Electronics</h4>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">TVs , Video - Audio</h5>
                                <h5 className="card-title">Kitchen Appliances</h5>
                                <h5 className="card-title">Computers & Laptops</h5>
                            </div>
                        </div>
                        <div className="card" style={{ width: "16rem" }}>
                            <div className="posts-heading">
                                <h4>Mobiles</h4>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Mobile Phones</h5>
                                <h5 className="card-title">Accessories</h5>
                                <h5 className="card-title">Tablets</h5>
                            </div>
                        </div>
                        <div className="card" style={{ width: "16rem" }}>
                            <div className="posts-heading">
                                <h4>Bikes</h4>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Motorcycles</h5>
                                <h5 className="card-title">Scooters</h5>
                                <h5 className="card-title">Spare Parts</h5>
                            </div>
                        </div>
                        <div className="card" style={{ width: "16rem" }}>
                            <div className="posts-heading">
                                <h4>Books , Sports</h4>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Books</h5>
                                <h5 className="card-title">Gym & Fitness</h5>
                                <h5 className="card-title">Sports & Equipment</h5>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cateogries Tab end */}
                <Footer />
            </div>
        )
    }
}

export default Dashboard
