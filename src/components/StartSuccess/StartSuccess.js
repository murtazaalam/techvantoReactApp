import React from 'react';
import './startSuccess.css';
const StartSuccess = () => {
    return (
        <section className="start-to-success">
            <div className="" id="top-space"></div>
            <div className="container">
                <div className="inner-content row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="success-text">
                            <h3>Start to success</h3>
                        </div>
                        <div className="page-title">
                            <h2>
                                Access To 
                                <mark>5500+</mark>
                                Courses From 
                                <mark>480</mark>
                                Instructors & Institutions
                            </h2>
                        </div>
                        <div className="page-sub-title">
                            Take your learning to the next level.
                        </div>
                        <div className="search-field">
                            <form method="get" action="#">
                                <input type="text" placeholder="What do you want to learn?" />
                                <button type="submit">
                                    <i className="fa fa-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="image-field">
                            <img src="images/home-image.png" className="img-fluid" alt="Home Image"/>
                            <div className="notification-bar">
                                <div className="notification-text">
                                    Tomorrow is our <mark>"When I Grew Up" Spirit Day!</mark>
                                    <div className="notification-icon">
                                        <img src="images/bell.png" alt="Bell icon"/>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default StartSuccess;