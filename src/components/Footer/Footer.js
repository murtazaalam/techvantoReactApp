import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-12">
                            <div class="f-section">
                                <h4 class="f-heading">About</h4>
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
                        <div class="col-lg-3 col-md-3 col-sm-12">
                            <div class="f-section">
                                <h4 class="f-heading">Links</h4>
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
                        <div class="col-lg-3 col-md-3 col-sm-12">
                            <div class="f-section">
                                <h4 class="f-heading">Support</h4>
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
                        <div class="col-lg-3 col-md-3 col-sm-12">
                            <div class="tnc">
                                <img src="images/logo_2.png" width="120" class="img-fluid" />
                                <div class="social-media">
                                    <a href="#">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fab fa-youtube"></i>
                                    </a>
                                </div>
                                <p>&copy; 2021 Techvanto. All rights reserved.</p>
                                <div class="links">
                                    <span class=""><a href="#">Terms of Use</a></span>
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