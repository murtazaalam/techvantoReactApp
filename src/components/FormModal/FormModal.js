import React from "react";
import './formModal.css';

const FormModal = () => {
    return (
        <div className="modal fade signup-modal" id="openForm" aira-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" id="formDialog">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <div className="w-100">
                            <h5 className="modal-title text-center" id="formHeading">Sign Up</h5>
                        </div>
                        
                        <button type="button" className="close" data-bs-dismiss="modal">
                            X
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="already-account">
                            <span><span id="optionText">Already have an account?</span>
                                <a href="#" onClick="loginSignupForm('')">
                                    <span id="actionText">Log in</span>
                                    <div className="line"></div>
                                </a>
                            </span>
                        </div>
                        
                        <form className="row">
                            <div className="col-md-6 input-area">
                                <label for="firstName" className="form-label">FIRST NAME*</label>
                                <input type="text" className="form-control" id="firstName" minlength="3"
                                placeholder="First Name" oninput="checkValue(this.id, 0)" 
                                onblur="checkValue(this.id, 0)" />
                                <p className="error">Please Enter Your First Name</p>
                            </div>
                            <div className="col-md-6 input-area">
                                <label for="lastName" className="form-label">LAST NAME*</label>
                                <input type="text" className="form-control" id="lastName"
                                placeholder="Last Name" oninput="checkValue(this.id, 1)" 
                                onblur="checkValue(this.id, 1)" />
                                <p className="error">Please Enter Your Last Name</p>
                            </div>
                            <div className="col-md-6 input-area">
                                <label for="userName" className="form-label">USERNAME*</label>
                                <input type="text" className="form-control" id="userName"
                                placeholder="Username" oninput="checkValue(this.id, 2)" 
                                onblur="checkValue(this.id, 2)" />
                                <p className="error">Please Enter UserName</p>
                            </div>
                            <div className="col-md-6 input-area">
                                <label for="email" className="form-label">EMAIL*</label>
                                <input type="email" className="form-control" id="email"
                                placeholder="Email" oninput="checkValue(this.id, 3)" 
                                onblur="checkValue(this.id, 3)" />
                                <p className="error">Please Enter Your Email</p>
                            </div>
                            <div className="col-md-6 password input-area">
                                <label for="password" className="form-label">PASSWORD*</label>
                                <div className="position-relative">
                                    <input type="password" className="form-control" id="password"
                                        placeholder="Password" oninput="checkValue(this.id, 4)" 
                                        onblur="checkValue(this.id, 4)" />
                                    <div className="icon eye-icon" onClick="showHide('password')">
                                        <i className="fas fa-eye"></i>
                                    </div>
                                </div>
                                <p className="error">Please Enter Your Password</p>
                                <div className="strength" id="strength">
                                    <p id="stren">Weak</p>
                                    <div className="stren-line" id="strenLine"></div>
                                </div>
                                <a className="forgot-p" id="forgotP">Forgot password ?</a>
                            </div>
                            <div className="col-md-6 password input-area">
                                <label for="reEnterPassword" className="form-label">RE-ENTER PASSWORD</label>
                                <div className="position-relative">
                                    <input type="password" className="form-control" id="reEnterPassword" 
                                        oninput="checkValue(this.id, 5)" placeholder="Re-Enter Password"/>
                                    <div className="icon eye-icon" onClick="showHide('reEnterPassword')">
                                        <i className="fas fa-eye"></i>
                                    </div>
                                </div>
                                <p className="error">Password does not match</p>
                            </div>
                            <div className="col-md-12 tnc-check input-area">
                                <input type="checkbox" className="form-check-input" onchange="tncCheck()" id="tnc"/>
                                <span for="tnc" className="form-label">
                                    <a href="#" id="tnc-link">Accept the Terms and Privacy Policy</a>
                                </span>
                                <p className="error">Please tick above to agree terms and conditions</p>
                            </div>
                            <div className="col-md-12">
                                <button type="button" onClick="formSubmit()" className="btn-register" id="btn-user">Register</button>
                            </div>

                        </form>
                    </div>
                    <div className="modal-footer border-0">
                        <div className="login-by-social" id="loginBySocial">
                            <h2>Or</h2>
                            <div className="row">
                                <div className="col-lg-12">
                                    <button type="button" className="f-btn">
                                        <span className="f-icon"><i className="fab fa-facebook"></i></span>
                                        Continue with Facebook
                                    </button>
                                </div>
                                <div className="col-lg-12">
                                    <button type="button" className="g-btn">
                                        <span className="g-icon"><i className="fab fa-google"></i></span>
                                        Continue with Google
                                    </button>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FormModal;