import React from "react";
import './hightlight.css';

const Highlight = () => {
    return (
        <section className="highlights">
                <div className="container">
                    <div className="row highlights-content">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="icon">
                                <img src="images/book.png" />
                            </div>
                            <div className="text">
                                Learn The Essential Skills
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="icon">
                                <img src="images/certificate.png" />
                            </div>
                            <div className="text">
                                Earn Certificates And Degrees
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="icon">
                                <img src="images/promotion.png" />
                            </div>
                            <div className="text">
                                Get Ready For The Next Career
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="icon">
                                <img src="images/user.png" />
                            </div>
                            <div className="text">
                                Master At Different Areas
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}
export default Highlight;