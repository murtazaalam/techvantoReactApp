import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import AllCoursesDisplay from './AllCoursesDisplay';
import Pagination from './Pagination';
import AllCategory from './AllCategory';
import CostFilter from './CostFilter';
import LevelFilter from './LevelFilter';
import './allCourses.css';
import Header from '../Header/Header';

const url = "http://techvanto.herokuapp.com/allcourses";
const allCat = "https://techvanto.herokuapp.com/category";
var skipValue = 0;
var limitValue = 9;

class AllCourses extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            allCourses:'',
            totalCourse:'',
            categories:''
        }
    }
    update = (value) => {
        this.setState({allCourses:value})
    }
    render(){
        var numOfPage = Math.ceil(this.state.totalCourse/9);
        return(
            <>
                <Header searchData={(data) => this.update(data)}/>
                <section className="page-heading">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/" className="home">
                                        Home
                                        <div className="line"></div>
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Courses
                                </li>
                            </ol>
                        </nav>
                        <h1>Courses</h1>
                    </div>
                </section>
                <section className="courses-area">
                    <div className="container">
                        <div className="row row-area">
                            <div className="col-lg-3 col-md-3">
                                <div className="filter-area">
                                    <div className="category-by">
                                        <h4>Filter by category</h4>
                                        <ul>
                                            <AllCategory allCategories={this.state.categories} 
                                                categoryFilter={(data) => this.update(data)}/>
                                        </ul>
                                    </div>
                                    <div className="filter-by-all">
                                        <div className="price-by">
                                            <h5>Price</h5>
                                            <ul>
                                                <CostFilter costFilter={(data) => this.update(data)} />
                                            </ul>
                                        </div>
                                        <div className="level-by">
                                            <h5>Level</h5>
                                            <ul>
                                                <LevelFilter levelFilter={(data) => this.update(data)} />
                                                
                                            </ul>
                                        </div>
                                        <div className="language-by">
                                            <h5>Language</h5>
                                            <ul>
                                                <li> 
                                                    <input type="checkbox" className="form-check-input"/>
                                                    <label className="form-check-label">English(13)</label>
                                                </li>
                                                <li> 
                                                    <input type="checkbox" className="form-check-input"/>
                                                    <label className="form-check-label">French(2)</label>
                                                </li>
                                                <li> 
                                                    <input type="checkbox" className="form-check-input"/>
                                                    <label className="form-check-label">Italian(7)</label>
                                                </li>
                                                <li> 
                                                    <input type="checkbox" className="form-check-input"/>
                                                    <label className="form-check-label">Japanese(4)</label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="rating-by">
                                            <h5>Rating</h5>
                                            <ul>
                                                <li> 
                                                    <input type="checkbox" className="form-check-input"/>
                                                    <label className="form-check-label">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <span>(16)</span>
                                                    </label>
                                                </li>
                                                <li> 
                                                    <input type="checkbox" className="form-check-input"/>
                                                    <label className="form-check-label">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                        <span>(10)</span>
                                                    </label>
                                                </li>
                                                <li> 
                                                    <input type="checkbox" className="form-check-input"/>
                                                    <label className="form-check-label">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                        <span>(5)</span>
                                                    </label>
                                                </li>
                                                <li> 
                                                    <input type="checkbox" className="form-check-input"/>
                                                    <label className="form-check-label">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                        <span>(0)</span>
                                                    </label>
                                                </li>
                                                <li> 
                                                    <input type="checkbox" className="form-check-input"/>
                                                    <label className="form-check-label">
                                                        <i className="fas fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                        <span>(0)</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="duration-by">
                                            <h5>Duration</h5>
                                            <ul>
                                                <li> 
                                                    <input type="checkbox" className="form-check-input"/>
                                                    <label className="form-check-label">Less than 2 hours (58)</label>
                                                </li>
                                                <li> 
                                                    <input type="checkbox" className="form-check-input"/>
                                                    <label className="form-check-label">3 to 6 hours (5)</label>
                                                </li>
                                                <li> 
                                                    <input type="checkbox" className="form-check-input"/>
                                                    <label className="form-check-label">7 to 16 hours (9)</label>
                                                </li>
                                                <li> 
                                                    <input type="checkbox" className="form-check-input"/>
                                                    <label className="form-check-label">17+ hours (26)</label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-9">
                                <div className="top-filter">
                                    <p>We found <span>{this.state.allCourses.length}/{this.state.totalCourse.length}</span> courses available for you</p>
                                    <div className="filter">
                                        <span>See</span>
                                        <span className="active-menu"><i className="fa fa-th"></i></span>
                                        <span className=""><i className="fas fa-bars"></i></span>
                                        <span>
                                            <a href="#">
                                                <i className="fas fa-filter"></i>
                                                Filter
                                                <i className="fas fa-chevron-down marginLeft14"></i>
                                            </a>
                                            
                                        </span>
                                    </div>
                                </div>
                                <div className="row marginTop24">
                                    <AllCoursesDisplay allCourseData={this.state.allCourses} />
                                </div>
                                <div className="page">
                                    <ul className="pagination">
                                        <Pagination totalPage={numOfPage} />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
    componentDidMount(){
        axios.get(url, {method:'GET'})
        .then((res) => {
            this.setState({totalCourse:res.data});
        })
        axios.get(`${url}?skip_value=${skipValue}&limit_value=${limitValue}`, 
        {method: 'GET',}).then((res) => {
            this.setState({allCourses:res.data})
        })
        axios.get(allCat, {method:'GET'})
        .then((res) => {
            this.setState({categories:res.data})
        })
    }
}
export default AllCourses;