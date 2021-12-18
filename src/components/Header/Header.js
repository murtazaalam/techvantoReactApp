import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            
            <header id="navbar-top" class="header-box">
                <div class="page-top-bar">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 text">
                                Keep learning with free resources during 
                                <span>COVID-19.</span>
                                <a href="#">Leanrn more</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container main-header">
                    <div class="header-wrap">
                        <div class="left-content">
                            <Link to="/" class="logo">
                                <img src="images/logo_2.png" width="60" />
                            </Link>
                            <div class="category-menu">
                                <a href="#" class="">
                                    <div class="dots-icon">
                                        <i class="fa fa-th"></i>
                                    </div>
                                    <div class="text">Category</div>
                                    <nav class="category-list">
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
                        <div class="right-content">
                            <div class="center-content">
                                <div class="left-content">
                                    <div class="search">
                                        <div class="search-icon">
                                            <i class="fas fa-search"></i>
                                        </div>
                                        <input type="text" class="" placeholder="Search..."/>
                                    </div>
                                    <div class="page-navigation">
                                        <nav class="nav">
                                            <ul>
                                                <li class="menu menu-item demo">
                                                    <a href="#" style={{color: '#cf202d'}} class="left-item">
                                                        Demo
                                                        <i class="fas fa-angle-down" style={{paddingTop: 4+'px'}}></i> 
                                                    </a>
                                                    <div class="demo-content">
                                                        <a href="courses.html">Courses</a>
                                                    </div>
                                                </li>
                                                <li class="menu menu-item become-instructor">
                                                    <a href="#">
                                                        Courses
                                                        <div class="moving-line"></div>
                                                    </a>
                                                    
                                                </li>
                                            </ul>

                                        </nav>
                                    </div>
                                    <div class="cart">
                                        <a href="cart.html" class="">
                                            <img src="images/shopping-cart.png" width="23" />
                                            <div class="counting">0</div>
                                        </a>
                                    </div>
                                    
                                </div>
                                <div class="right-content">
                                    <div class="user">
                                        <div class="login">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#openForm" 
                                                onclick="loginSignupForm('Log in')">
                                                Log In
                                                <div class="moving-line"></div>
                                            </a>
                                        </div>
                                        <div class="sign-up">
                                            <a href="" data-bs-toggle="modal" class="sign-up-btn" data-bs-target="#openForm"
                                                onclick="loginSignupForm('Sign up')">
                                                Sign Up
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mobile-menu">
                                <div class="open-item menu-bar">
                                    <a href="#">
                                        <i class="fa fa-bars"></i>
                                    </a>
                                </div>
                                <div class="open-item search-bar-popup">
                                    <a href="#">
                                        <i class="fa fa-ellipsis-h"></i>
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