import React from 'react';
import './activity.css';

const Activity = () => {
    return (
        <section className="activity">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="activity-box" style={{background: '#F6F3ED'}}>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="content">
                                        <h3>Become An Instructor</h3>
                                        <p>Top instructors from around the world teach millions of students on Techvanto.</p>
                                        <button type="button">Start teaching today</button>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 image-aria">
                                    <div className="image">
                                        <img src="images/banner-image-group-teachers.png" className="img-fluid"/>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="activity-box" style={{background: '#EEF0F4'}}>
                            <div className="row">
                                <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12">
                                    <div className="content">
                                        <h3>Transfer Access To Education</h3>
                                        <p>Create an account to receive our newsletter, course recommendations and promotions.</p>
                                        <button type="button">Register for free</button>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 image-aria">
                                    <div className="image">
                                        <img src="images/banner-image-laptop.png" className="img-fluid" />
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
export default Activity;