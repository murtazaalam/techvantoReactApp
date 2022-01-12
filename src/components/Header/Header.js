import React, {Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import axios from 'axios';
import './header.css';
import CategoryDisplay from './CategoryDisplay';
import DataValue from './DataValue';
import LoginForm from '../FormModal/Login';
import RegisterForm from '../FormModal/Register';

const catUrl = "http://techvanto.herokuapp.com/category";
const courseUrl = "http://techvanto.herokuapp.com/allcourses";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            catData:'',
            courseData:''
        }
    }
    sideMenu = () => {
        var sideMenu = document.getElementById("mobile-content");
        var style = window.getComputedStyle(sideMenu);
        //var display = style.getPropertyValue("display");
        var rightValue = style.getPropertyValue("right");
        console.log(rightValue)
                    
        if(rightValue == "-148px"){
            document.getElementById("mobile-content").style.right = "0px";
        }
        else{
            document.getElementById("mobile-content").style.right = "-148px"; 
        }
    }
    handleSearch = () => {
        console.log("hello");
    }
    handleOptions = (e) => {
        console.log("hello>>>>>>>>>>>>>>>>>>>>>",e.target);
    }
    logout = () => {
        localStorage.setItem("token", "");
        localStorage.setItem("name", "");
    }
    // handleModal = () => {
    //     document.getElementsByClassName("modal-backdrop")[0].style.display = "block";
    //     document.getElementById("loginForm").style.display = "block";
    // }
    render() {
        return (
            <>
                <header id="navbar-top" className="header-box">
                    <div className="page-top-bar">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text">
                                    Keep learning with free resources during 
                                    <span> COVID-19. </span>
                                    <a href="#">Leanrn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container main-header">
                        <div className="header-wrap">
                            <div className="left-content logo-box">
                                <Link to="/" className="logo">
                                    <img src="https://i.ibb.co/BcH8pnR/logo-2.png" alt="logo" width="60" />
                                </Link>
                                <div className="category-menu">
                                    <a href="#" className="">
                                        <div className="cat-text">
                                            <div className="dots-icon">
                                                <i className="fa fa-th"></i>
                                            </div>
                                            <div className="text">Category</div>
                                        </div>
                                        <ul className="category-list">
                                            <CategoryDisplay allCategories={this.state.catData} />
                                        </ul>
                                    </a>        
                                </div>
                            </div>
                            <div className="right-content">
                                <div className="search">
                                    <div className="search-icon" onClick={this.handleSearch}>
                                        <i className="fas fa-search"></i>
                                    </div>
                                    <input type="text" list="data" className="search-course" placeholder="Search..." 
                                        onChange={this.handleOptions}/>
                                    <datalist id="data">
                                        <DataValue courseValue={this.state.courseData}/>
                                    </datalist>
                                </div>
                                <div className="center-content" id="mobile-content">
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
                                            <Link to="/cart" className="">
                                                <img src="https://i.ibb.co/X4YncQT/shopping-cart.png" alt="Cart" width="23" />
                                                <div className="counting">0</div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="right-content">
                                        { localStorage.getItem("token") == "" &&
                                        <div className="user">
                                            <div className="login">
                                                <a href="" data-bs-toggle="modal" data-bs-target="#loginForm"
                                                    onClick={this.handleModal}>
                                                    Log In
                                                    <div className="moving-line"></div>
                                                </a>
                                            </div>
                                            <div className="sign-up">
                                                <a href="" data-bs-toggle="modal" className="sign-up-btn" 
                                                    data-bs-target="#registerForm">
                                                    Sign Up
                                                </a>
                                            </div>
                                        </div>
                                        }
                                        { localStorage.getItem("token") != "" &&
                                            <div className="user">
                                                <div className="login">
                                                    <Link to="/profile" >
                                                        {localStorage.getItem("name")}
                                                        <div className="moving-line"></div>
                                                    </Link>
                                                </div>
                                                <div className="sign-up">
                                                    <Link to="/" className="sign-up-btn" onClick={this.logout}>
                                                        Logout
                                                    </Link>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className="mobile-menu">
                                    <div className="open-item menu-bar">
                                        <button onClick={this.sideMenu}>
                                            <i className="fa fa-bars"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
                </header>
                <RegisterForm/>
                <LoginForm/>
            </>
        )
 
    }
    componentDidMount(){
        axios.get(catUrl, {method: 'GET'})
        .then((res) => {
            this.setState({catData: res.data})
        })
        
        axios.get(courseUrl, {method: 'GET'})
        .then((res) => {
            this.setState({courseData: res.data})
        })
    }
}

export default Header;