import React from 'react';
import './footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="f-section">
                                <h4 className="f-heading">About</h4>
                                <ul>
                                    <li>
                                        <a href="#">About Us</a>      
                                    </li>
                                    <li>
                                        <a href="#">Courses</a>
                                    </li>
                                    <li>
                                        <a href="#">Instructor</a>
                                    </li>
                                    <li>
                                        <a href="#">Events</a>
                                    </li>
                                    <li>
                                        <a href="#">Become An Instructor</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="f-section">
                                <h4 className="f-heading">Links</h4>
                                <ul>
                                    <li>
                                        <a href="blogs.html">News & Blogs</a>
                                    </li>
                                    <li>
                                        <a href="#">Courses</a>
                                    </li>
                                    <li>
                                        <a href="#">Library</a>
                                    </li>
                                    <li>
                                        <a href="#">Galary</a>
                                    </li>
                                    <li>
                                        <a href="#">Partners</a>
                                    </li>
                                    <li>
                                        <a href="#">Career</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="f-section">
                                <h4 className="f-heading">Support</h4>
                                <ul>
                                    <li>
                                        <a href="#">Documentation</a>
                                    </li>
                                    <li>
                                        <a href="#">FAQs</a>
                                    </li>
                                    <li>
                                        <a href="#">Forum</a>
                                    </li>
                                    <li>
                                        <a href="#">Sitemap</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="tnc">
                                <img src="images/logo_2.png" width="120" className="img-fluid" />
                                <div className="social-media">
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </div>
                                <p>&copy; 2021 Techvanto. All rights reserved.</p>
                                <div className="links">
                                    <span><a href="#">Terms of Use</a></span>
                                    <span><a href="#">Privacy Policy</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;