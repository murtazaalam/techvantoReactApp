import React from "react";
import StudentsView from "./StudentsView/StudentsView";
import TopCategory from "./TopCategory/TopCategory";

const Home = () => {
    return(
        <>
            <section class="start-to-success">
                    <div class="" id="top-space"></div>
                    <div class="container">
                        <div class="inner-content row">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div class="success-text">
                                    <h3>Start to success</h3>
                                </div>
                                <div class="page-title">
                                    <h2>
                                        Access To 
                                        <mark>5500+</mark>
                                        Courses From 
                                        <mark>480</mark>
                                        Instructors & Institutions
                                    </h2>
                                </div>
                                <div class="page-sub-title">
                                    Take your learning to the next level.
                                </div>
                                <div class="search-field">
                                    <form method="get" action="#">
                                        <input type="text" placeholder="What do you want to learn?" />
                                        <button type="submit">
                                            <i class="fa fa-search"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div class="image-field">
                                    <img src="images/home-image.png" class="img-fluid" alt="Home Image"/>
                                    <div class="notification-bar">
                                        <div class="notification-text">
                                            Tomorrow is our <mark>"When I Grew Up" Spirit Day!</mark>
                                            <div class="notification-icon">
                                                <img src="images/bell.png" alt="Bell icon"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            <section class="highlights">
                <div class="container">
                    <div class="row highlights-content">
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="icon">
                                <img src="images/book.png" />
                            </div>
                            <div class="text">
                                Learn The Essential Skills
                            </div>

                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="icon">
                                <img src="images/certificate.png" />
                            </div>
                            <div class="text">
                                Earn Certificates And Degrees
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="icon">
                                <img src="images/promotion.png" />
                            </div>
                            <div class="text">
                                Get Ready For The Next Career
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="icon">
                                <img src="images/user.png" />
                            </div>
                            <div class="text">
                                Master At Different Areas
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <TopCategory/>
            <StudentsView/>
            <section class="get-started">
                <div class="container">
                    <div class="get-started-box">
                        <div class="text">
                            <p>Let Us Help</p>
                            <p>Finding Your <b>Right Courses</b></p>
                        </div>
                        <div class="get-started-btn">
                            <button type="button">Get Started</button>
                        </div>
                        <div class="icon">
                            <i class="fas fa-bolt"></i>
                        </div>
                    </div>
                </div>
            </section>
            <section class="review">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-12 col-sm-12 col-12">
                            <div class="heading">
                                <h3>People Say<br/> About Techvanto</h3>
                            </div>
                            <div class="text">
                                <p>One-stop solution for any eLearning center, online courses. People love Techvanto because they can
                                    create their sites with ease here.
                                </p>
                            </div>
                            <div class="view-all-btn">
                                <button type="button">View all</button>                            
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-12 col-sm-12 col-12">
                            <div class="wrapper">
                                <div class="carousel owl-carousel">
                                    <div class="revw">
                                        <h4>Great Quality!</h4>
                                        <div class="revw-text">
                                            I wanted to place a review since their support helped me within a day or so, which is nice! 
                                            Thanks and 5 Star!
                                        </div>
                                        <div class="info">
                                            <div class="img">
                                                <img src="images/review_img_1.jpg" />
                                            </div>
                                            <div class="detail">
                                                <h2>Oliver Beddows</h2>
                                                <p>Designer, Manchester</p>
                                            </div>
                                        </div>
                                        <div class="quote">
                                            <i class="fas fa-quote-right"></i>
                                        </div>
                                    </div>
                                    <div class="revw">
                                        <h4>Great Quality!</h4>
                                        <div class="revw-text">
                                            I wanted to place a review since their support helped me within a day or so, which is nice! 
                                            Thanks and 5 Star!
                                        </div>
                                        <div class="info">
                                            <div class="img">
                                                <img src="images/review_img_1.jpg" />
                                            </div>
                                            <div class="detail">
                                                <h2>Oliver Beddows</h2>
                                                <p>Designer, Manchester</p>
                                            </div>
                                        </div>
                                        <div class="quote">
                                            <i class="fas fa-quote-right"></i>
                                        </div>
                                    </div>
                                    <div class="revw">
                                        <h4>Great Quality!</h4>
                                        <div class="revw-text">
                                            I wanted to place a review since their support helped me within a day or so, which is nice! 
                                            Thanks and 5 Star!
                                        </div>
                                        <div class="info">
                                            <div class="img">
                                                <img src="images/review_img_1.jpg" />
                                            </div>
                                            <div class="detail">
                                                <h2>Oliver Beddows</h2>
                                                <p>Designer, Manchester</p>
                                            </div>
                                        </div>
                                        <div class="quote">
                                            <i class="fas fa-quote-right"></i>
                                        </div>
                                    </div>
                                    <div class="revw">
                                        <h4>Great Quality!</h4>
                                        <div class="revw-text">
                                            I wanted to place a review since their support helped me within a day or so, which is nice! 
                                            Thanks and 5 Star!
                                        </div>
                                        <div class="info">
                                            <div class="img">
                                                <img src="images/review_img_1.jpg" />
                                            </div>
                                            <div class="detail">
                                                <h2>Oliver Beddows</h2>
                                                <p>Designer, Manchester</p>
                                            </div>
                                        </div>
                                        <div class="quote">
                                            <i class="fas fa-quote-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <section class="activity">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="activity-box" style={{background: '#F6F3ED'}}>
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div class="content">
                                            <h3>Become An Instructor</h3>
                                            <p>Top instructors from around the world teach millions of students on Techvanto.</p>
                                            <button type="button">Start teaching today</button>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 image-aria">
                                        <div class="image">
                                            <img src="images/banner-image-group-teachers.png" class="img-fluid"/>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="activity-box" style={{background: '#EEF0F4'}}>
                                <div class="row">
                                    <div class="col-lg-7 col-md-6 col-sm-12 col-xs-12">
                                        <div class="content">
                                            <h3>Transfer Access To Education</h3>
                                            <p>Create an account to receive our newsletter, course recommendations and promotions.</p>
                                            <button type="button">Register for free</button>
                                        </div>
                                    </div>
                                    <div class="col-lg-5 col-md-6 col-sm-12 col-xs-12 image-aria">
                                        <div class="image">
                                            <img src="images/banner-image-laptop.png" class="img-fluid" />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="partners">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-12 text">
                            <div class="heading">
                                <h3>Who Will You <br/>Learn With?</h3>
                            </div>
                            <p>You can list your partners or instructors's brands here to show off your sites reputation and students
                                can trust you more.
                            </p>
                            <button type="button">View all partners</button>
                        </div>
                        <div class="col-lg-9 col-md-12">
                            <div class="row">
                                <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
                                    <img src="images/client-logo-01.jpg" class="img-fluid"/>
                                </div>
                                <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
                                    <img src="images/client-logo-02.jpg" class="img-fluid"/>
                                </div>
                                <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
                                    <img src="images/client-logo-03.jpg" class="img-fluid"/>
                                </div>
                                <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
                                    <img src="images/client-logo-04.jpg" class="img-fluid"/>
                                </div>
                                <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
                                    <img src="images/client-logo-05.jpg" class="img-fluid"/>
                                </div>
                                <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
                                    <img src="images/client-logo-06.jpg" class="img-fluid"/>
                                </div>
                                <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
                                    <img src="images/client-logo-07.jpg" class="img-fluid"/>
                                </div>
                                <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
                                    <img src="images/client-logo-08.jpg" class="img-fluid"/>
                                </div>
                                <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
                                    <img src="images/client-logo-09.jpg" class="img-fluid"/>
                                </div>
                                <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
                                    <img src="images/client-logo-10.jpg" class="img-fluid"/>
                                </div>
                                <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
                                    <img src="images/client-logo-11.jpg" class="img-fluid"/>
                                </div>
                                <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
                                    <img src="images/client-logo-12.jpg" class="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="modal fade signup-modal" id="openForm" aira-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" id="formDialog">
                    <div class="modal-content">
                        <div class="modal-header border-0">
                            <div class="w-100">
                                <h5 class="modal-title text-center" id="formHeading">Sign Up</h5>
                            </div>
                            
                            <button type="button" class="close" data-bs-dismiss="modal">
                                X
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="already-account">
                                <span class=""><span id="optionText">Already have an account?</span>
                                    <a href="#" onclick="loginSignupForm('')">
                                        <span id="actionText">Log in</span>
                                        <div class="line"></div>
                                    </a>
                                </span>
                            </div>
                            
                            <form class="row">
                                <div class="col-md-6 input-area">
                                    <label for="firstName" class="form-label">FIRST NAME*</label>
                                    <input type="text" class="form-control" id="firstName" minlength="3"
                                    placeholder="First Name" oninput="checkValue(this.id, 0)" 
                                    onblur="checkValue(this.id, 0)" />
                                    <p class="error">Please Enter Your First Name</p>
                                </div>
                                <div class="col-md-6 input-area">
                                    <label for="lastName" class="form-label">LAST NAME*</label>
                                    <input type="text" class="form-control" id="lastName"
                                    placeholder="Last Name" oninput="checkValue(this.id, 1)" 
                                    onblur="checkValue(this.id, 1)" />
                                    <p class="error">Please Enter Your Last Name</p>
                                </div>
                                <div class="col-md-6 input-area">
                                    <label for="userName" class="form-label">USERNAME*</label>
                                    <input type="text" class="form-control" id="userName"
                                    placeholder="Username" oninput="checkValue(this.id, 2)" 
                                    onblur="checkValue(this.id, 2)" />
                                    <p class="error">Please Enter UserName</p>
                                </div>
                                <div class="col-md-6 input-area">
                                    <label for="email" class="form-label">EMAIL*</label>
                                    <input type="email" class="form-control" id="email"
                                    placeholder="Email" oninput="checkValue(this.id, 3)" 
                                    onblur="checkValue(this.id, 3)" />
                                    <p class="error">Please Enter Your Email</p>
                                </div>
                                <div class="col-md-6 password input-area">
                                    <label for="password" class="form-label">PASSWORD*</label>
                                    <div class="position-relative">
                                        <input type="password" class="form-control" id="password"
                                            placeholder="Password" oninput="checkValue(this.id, 4)" 
                                            onblur="checkValue(this.id, 4)" />
                                        <div class="icon eye-icon" onclick="showHide('password')">
                                            <i class="fas fa-eye"></i>
                                        </div>
                                    </div>
                                    <p class="error">Please Enter Your Password</p>
                                    <div class="strength" id="strength">
                                        <p id="stren">Weak</p>
                                        <div class="stren-line" id="strenLine"></div>
                                    </div>
                                    <a class="forgot-p" id="forgotP">Forgot password ?</a>
                                </div>
                                <div class="col-md-6 password input-area">
                                    <label for="reEnterPassword" class="form-label">RE-ENTER PASSWORD</label>
                                    <div class="position-relative">
                                        <input type="password" class="form-control" id="reEnterPassword" 
                                            oninput="checkValue(this.id, 5)" placeholder="Re-Enter Password"/>
                                        <div class="icon eye-icon" onclick="showHide('reEnterPassword')">
                                            <i class="fas fa-eye"></i>
                                        </div>
                                    </div>
                                    <p class="error">Password does not match</p>
                                </div>
                                <div class="col-md-12 tnc-check input-area">
                                    <input type="checkbox" class="form-check-input" onchange="tncCheck()" id="tnc"/>
                                    <span for="tnc" class="form-label">
                                        <a href="#" id="tnc-link">Accept the Terms and Privacy Policy</a>
                                    </span>
                                    <p class="error">Please tick above to agree terms and conditions</p>
                                </div>
                                <div class="col-md-12">
                                    <button type="button" onclick="formSubmit()" class="btn-register" id="btn-user">Register</button>
                                </div>

                            </form>
                        </div>
                        <div class="modal-footer border-0">
                            <div class="login-by-social" id="loginBySocial">
                                <h2>Or</h2>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <button type="button" class="f-btn">
                                            <span class="f-icon"><i class="fab fa-facebook"></i></span>
                                            Continue with Facebook
                                        </button>
                                    </div>
                                    <div class="col-lg-12">
                                        <button type="button" class="g-btn">
                                            <span class="g-icon"><i class="fab fa-google"></i></span>
                                            Continue with Google
                                        </button>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;