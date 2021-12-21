import React from 'react';
import './getStarted.css';

const GetStarted = () =>{
    return (
        <section className="get-started">
            <div className="container">
                <div className="get-started-box">
                    <div className="text">
                        <p>Let Us Help</p>
                        <p>Finding Your <b>Right Courses</b></p>
                    </div>
                    <div className="get-started-btn">
                        <button type="button">Get Started</button>
                    </div>
                    <div className="icon">
                        <i className="fas fa-bolt"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default GetStarted;