import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import RelatedCourses from './RelatedCourses';
import './singleCourse.css';
import CategoryDisplay from '../Header/CategoryDisplay';

const courseUrl = "http://techvanto.herokuapp.com/allcourses";
const instructorUrl = "http://techvanto.herokuapp.com/instructor";
const catUrl = "http://techvanto.herokuapp.com/category";
const coursesByCatUrl = "https://techvanto.herokuapp.com/courses";

class SingleCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            singleCourse:'',
            instructorData:'',
            courseCat:'',
            coursesByCategory:'',
            newCourseId:'',
            allCat:''
        }
    }

    render(){
        var courseDetails = this.state.singleCourse;
        var instructorDetails = this.state.instructorData;
        var courseCategory = this.state.courseCat;
        console.log("all",this.state.allCat);
        return(
            <>
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
                                <li className="breadcrumb-item">
                                    <Link to="/courses" className="home">
                                        Courses
                                        <div className="line"></div>
                                    </Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="#" className="home">
                                        {courseCategory.category_name}
                                        <div className="line"></div>
                                    </a>
                                </li>
                                <li className="breadcrumb-item active">
                                    {courseDetails.sub_category_name}
                                </li>
                            </ol>
                        </nav>
                        <div className="my-container">
                            <div className="course-head">
                                <h4>
                                    <a href="#">{courseCategory.category_name}</a>
                                </h4>
                                <h2>
                                    {courseDetails.sub_category_name}
                                </h2>
                                <div className="instructor-info">
                                    <div className="instr-pic">
                                        <img src={instructorDetails.image} className="img-fluid" alt="instructor-image"/>
                                    </div>
                                    <div className="instr-name">
                                        <span>{instructorDetails.name}</span>
                                    </div>
                                    <div className="update-date">
                                        <span>Last Update July 5, 2021</span>
                                    </div>
                                </div>
                                <div className="total-enrolled">
                                    <i className="fa fa-user"></i>
                                    <span>3 already enrolled</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="course-detail">
                    <div className="container">
                        <div className="my-container row">
                            <div className="col-lg-8 col-md-12">

                                <div className="about-course">
                                    <h4>About This Course</h4>
                                    <p>
                                        From <b>Setup</b> to <b>Deployment</b>, this course covers it all! You’ll learn all about Components, Directives, 
                                        Services, Forms, Http Access, Authentication, Optimizing an Angular App with Modules and Offline 
                                        Compilation and much more – and in the end: You’ll learn how to deploy an application!<br/><br/>
                                        But that’s not all! This course will also show you how to use the Angular CLI and feature 
                                        a complete project, which allows you to practice the things learned throughout the course!<br/><br/>
                                        Angular is one of the most modern, performance-efficient and powerful frontend frameworks you 
                                        can learn as of today. It allows you to build great web apps which offer awesome user experiences! 
                                        Learn all the fundamentals you need to know to get started developing Angular applications right away.
                                    </p> 
                                </div>
                                <div className="learning-obj">
                                    <h4>Learning Objectives</h4>
                                    <div className="lo-list row">
                                        <div className="col-lg-6 col-md-6">
                                            <p>
                                                <span><i className="fa fa-check"></i></span>
                                                Develop modern, complex, responsive and scalable web applications with Angular 11
                                            </p>
                                            <p>
                                                <span><i className="fa fa-check"></i></span>
                                                Use the gained, deep understanding of the Angular fundamentals to quickly establish yourself 
                                                as a frontend developer
                                            </p>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <p>
                                                <span><i className="fa fa-check"></i></span>
                                                Fully understand the architecture behind an Angular application and how to use it
                                            </p>
                                            <p>
                                                <span><i className="fa fa-check"></i></span>
                                                Create single-page applications with one of the most modern JavaScript frameworks out there
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="requirements">
                                    <h4>Requirements</h4>
                                    <ul>
                                        <li>
                                            <span><i className="fa fa-check"></i></span>
                                            <span>NO Angular 1 or Angular 2 knowledge is required!</span>
                                        </li>
                                        <li>
                                            <span><i className="fa fa-check"></i></span>
                                            <span>Basic HTML and CSS knowledge helps, but isn't a must-have</span>
                                        </li>
                                        <li>
                                            <span><i className="fa fa-check"></i></span>
                                            <span>Prior TypeScript knowledge also helps but isn't necessary to benefit from this course</span>
                                        </li>
                                        <li>
                                            <span><i className="fa fa-check"></i></span>
                                            <span>Basic JavaScript knowledge is required</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="target-audience">
                                    <h4>Target Audience</h4>
                                    <ul>
                                        <li>
                                            <span><i className="fas fa-long-arrow-alt-right"></i></span>
                                            <span>
                                                Newcomer as well as experienced frontend developers interested in learning a modern 
                                                JavaScript framework
                                            </span>
                                            </li>
                                        <li>
                                            <span><i className="fas fa-long-arrow-alt-right"></i></span>
                                            <span>
                                                This course is for everyone interested in learning a state-of-the-art frontend JavaScript 
                                                framework
                                            </span>
                                        </li>
                                        <li>
                                            <span><i className="fas fa-long-arrow-alt-right"></i></span>
                                            <span>
                                                Prior TypeScript knowledge also helps but isn't necessary to benefit from this course
                                            </span>
                                        </li>
                                        <li>
                                            <span><i className="fas fa-long-arrow-alt-right"></i></span>
                                            <span>
                                                Taking this course will enable you to be amongst the first to gain a very solid understanding 
                                                of Angular
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="curriculum">
                                    <div className="header">
                                        <h4>Curriculum</h4>
                                        <div>
                                            <p>6 Lessons</p>
                                            <p>32h 45m</p>
                                        </div>
                                    </div>
                                    <div className="cu-list">
                                        <div className="accordion">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button type="button" className="accordion-button" data-bs-toggle="collapse" 
                                                    data-bs-target="#basic">
                                                        <span className="minus active"><i className="fas fa-minus"></i></span>
                                                        <span className="plus active"><i className="fas fa-plus"></i></span>
                                                        The Basics
                                                </button>
                                                </h2>
                                                <div id="basic" className="accordion-collapse collapse show">
                                                    <div className="accordion-body">
                                                        hiiiii
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button type="button" className="accordion-button" data-bs-toggle="collapse" 
                                                    data-bs-target="#project">
                                                        <span className="minus"><i className="fas fa-minus"></i></span>
                                                        <span className="plus"><i className="fas fa-plus"></i></span>
                                                        Course Project - Components & Databinding
                                                </button>
                                                </h2>
                                                <div id="project" className="accordion-collapse collapse">
                                                    <div className="accordion-body">
                                                        hiiiii
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button type="button" className="accordion-button" data-bs-toggle="collapse" 
                                                    data-bs-target="#services">
                                                        <span className="minus"><i className="fas fa-minus"></i></span>
                                                        <span className="plus"><i className="fas fa-plus"></i></span>
                                                        Using Services & Dependency Injection
                                                </button>
                                                </h2>
                                                <div id="services" className="accordion-collapse collapse">
                                                    <div className="accordion-body">
                                                        hiiiii
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="instructor">
                                    <h4>Your Instructor</h4>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-4 small-col-4">
                                            <div className="instr-image">
                                                <img src={instructorDetails.image} className="img-fluid" alt="instr-image"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-8 col-sm-8 small-col-8">
                                            <div className="instr-name">
                                                {instructorDetails.name}
                                            </div>
                                            <div className="instr-rating">
                                                <span>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                                <span>{instructorDetails.rating}</span>
                                                <span>/5</span>
                                            </div>
                                            <div className="instr-other-details">
                                                <div className="other-details">
                                                    <i className="far fa-play-circle"></i>
                                                    <span>{instructorDetails.number_of_courses} Courses</span>
                                                </div>
                                                <div className="other-details">
                                                    <i className="far fa-comment-alt"></i>
                                                    <span>{instructorDetails.reviews} Reviews</span>
                                                </div>
                                                <div className="other-details">
                                                    <i className="far fa-user"></i>
                                                    <span>{instructorDetails.number_of_students} Students</span>
                                                </div>
                                            </div>
                                            <div className="instr-about">
                                                {instructorDetails.description}
                                                <a href="#">
                                                    <i className="fa fa-plus"></i>
                                                    <span>See more</span>
                                                </a>   
                                            </div>
                                        </div>
                                    </div>
                                    <div className="instr-review">
                                        <h4>Write a review</h4>
                                        <button type="button">Write a review</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="video-box">
                                    <div className="video">
                                        <img src={courseDetails.image} className="img-fluid" />
                                        {/* <iframe src="https://www.youtube.com/embed/oOm66m59jLc" 
                                            title="YouTube video player" frameborder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                            allowfullscreen>
                                        </iframe> */}
                                    </div>
                                    <div className="course-detail">
                                        <div className="course-price">
                                            <span><i className="fas fa-rupee-sign"></i> {courseDetails.price}</span>
                                            <span>.00</span>
                                        </div>
                                        <div className="other">
                                            <p>
                                                <span className="icon"><i className="fas fa-sliders-h"></i></span>
                                                <span className="heading">Level</span>
                                            </p>
                                            <p className="sub-heading">
                                                {courseDetails.level}
                                            </p>    
                                        </div> 
                                        <div className="other">
                                            <p>
                                                <span className="icon"><i className="far fa-clock"></i></span>
                                                <span className="heading">Duration</span>
                                            </p>
                                            <p className="sub-heading">
                                                32.8 hours
                                            </p>    
                                        </div>   
                                        <div className="other">
                                            <p>
                                                <span className="icon"><i className="far fa-play-circle"></i></span>
                                                <span className="heading">Lectures</span>
                                            </p>
                                            <p className="sub-heading">
                                                6 Lectures
                                            </p>   
                                        </div> 
                                        <div className="other">
                                            <p>
                                                <span className="icon"><i className="fas fa-tag"></i></span>
                                                <span className="heading">Subject</span>
                                            </p>
                                            <p className="sub-heading">
                                                Programming Language
                                            </p>    
                                        </div>     
                                        <div className="other">
                                            <p>
                                                <span className="icon"><i className="fas fa-globe"></i></span>
                                                <span className="heading">Language</span>
                                            </p>
                                            <p className="sub-heading">
                                                Russian
                                            </p>    
                                        </div> 
                                        <div> 
                                            <button type="button">
                                                <span>
                                                    <i className="fas fa-shopping-cart"></i>
                                                </span>
                                                Add to cart
                                            </button>
                                            <button type="button">
                                                Add to wishlist
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="category-box">
                                    <h4>Course categories</h4>
                                    <ul>
                                        <CategoryDisplay allCategories={this.state.allCat} />
                                    </ul>
                                </div>
                                <div className="related-course">
                                    <h4>Related Courses</h4>
                                    <RelatedCourses relatedCoursesData={this.state.coursesByCategory}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

    componentDidMount(){
        var courseId = this.props.match.params.id;
        this.setState({newCourseId:courseId})
        //get course by course id
        fetch(`${courseUrl}/${courseId}`, {method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({singleCourse:data[0]});

            //get category of course
            axios.get(`${catUrl}/${data[0].category_id}`, {method:'GET'})
            .then((cat) => {
                this.setState({courseCat:cat.data[0]})
            })

            //get courses with respect to category id (for related courses) 
            axios.get(`${coursesByCatUrl}/${data[0].category_id}?limit_value=2`,
            {method: 'GET'}).then((catCourses) => {
                this.setState({
                    coursesByCategory:catCourses.data
                })
            })
        })
        //get instructor details of course by course Id
        fetch(`${instructorUrl}/${courseId}`, {method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({instructorData:data})
        })

        axios.get(catUrl, {method:'GET'})
        .then((res) => {
            this.setState({allCat:res.data})
        })
    }

    componentDidUpdate(){
        if(this.state.newCourseId != this.props.match.params.id){
            this.componentDidMount();
        }
    }
}
export default SingleCourse;