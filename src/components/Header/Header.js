import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import './header.css';

class Header extends React.Component {
    constructor() {
        super();
    }
    sideMenu = () => {
        console.log("helloooooo");
    }
    render() {
        return (
            
            <header id="navbar-top" className="header-box">
                <div className="page-top-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text">
                                Keep learning with free resources during 
                                <span>COVID-19.</span>
                                <a href="#">Leanrn more</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container main-header">
                    <div className="header-wrap">
                        <div className="left-content">
                            <Link to="/" className="logo">
                                <img src="images/logo_2.png" width="60" />
                            </Link>
                            <div className="category-menu">
                                <a href="#" className="">
                                    <div className="dots-icon">
                                        <i className="fa fa-th"></i>
                                    </div>
                                    <div className="text">Category</div>
                                    <nav className="category-list">
                                        <ul>
                                            <li>list 1</li>
                                            <li>list 2</li>
                                            <li>list 3</li>
                                            <li>list 4</li>
                                        </ul>
                                    </nav>
                                </a>        
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="search">
                                <div className="search-icon">
                                    <i className="fas fa-search"></i>
                                </div>
                                <input type="text" className="" placeholder="Search..."/>
                            </div>
                            <div className="center-content">
                                <div className="left-content">
                                    <div className="page-navigation">
                                        <nav className="nav">
                                            <ul>
                                                {/* <li className="menu menu-item demo">
                                                    <a href="#" style={{color: '#cf202d'}} className="left-item">
                                                        Demo
                                                        <i className="fas fa-angle-down" style={{paddingTop: 4+'px'}}></i> 
                                                    </a>
                                                    <div className="demo-content">
                                                        <a href="courses.html">Courses</a>
                                                    </div>
                                                </li> */}
                                                <li className="menu menu-item become-instructor">
                                                    <Link to="/courses">
                                                        Courses
                                                        <div className="moving-line"></div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="cart">
                                        <a href="cart.html" className="">
                                            <img src="images/shopping-cart.png" width="23" />
                                            <div className="counting">0</div>
                                        </a>
                                    </div>
                                </div>
                                <div className="right-content">
                                    <div className="user">
                                        <div className="login">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#openForm" 
                                                onClick="loginSignupForm('Log in')">
                                                Log In
                                                <div className="moving-line"></div>
                                            </a>
                                        </div>
                                        <div className="sign-up">
                                            <a href="" data-bs-toggle="modal" className="sign-up-btn" data-bs-target="#openForm"
                                                onClick="loginSignupForm('Sign up')">
                                                Sign Up
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mobile-menu">
                                <div className="open-item menu-bar">
                                    <a href="#" onClick={this.sideMenu()}>
                                        <i className="fa fa-bars"></i>
                                    </a>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;