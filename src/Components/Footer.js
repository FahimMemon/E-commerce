import React, { Component } from 'react'
import './style.css'

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer-area bg-img bg-overlay-2 section-padding-100-0">
                    <div className="main-footer-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-lg-3">
                                    <div className="single-footer-widget mb-60 wow fadeInUp" data-wow-delay="300ms">
                                        <p>Bazaar</p>
                                        <div className="social-info">
                                            <a href="#">f</a>
                                            <a href="#">t</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="copywrite-content">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="copywrite-text">
                                        <p>
                                            Copyright &copy; All rights reserved | This
                                            website is made by <a target="_blank">Fahim Raza</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer
