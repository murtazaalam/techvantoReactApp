import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './singleCat.css';
import Header from '../Header/Header';
import CarouselData from './CarouselData';

const url = "http://techvanto.herokuapp.com/courses";
const catUrl = "http://techvanto.herokuapp.com/category";
class SingleCat extends React.Component{
    constructor(props){
        super(props);
        this.state={
            courses:'',
            oldCat:'',
            catName:''
        }
    }
    render() {
        return (
            <>
                <Header/>
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
                                <li className="breadcrumb-item active">
                                    {this.state.catName}
                                </li>
                            </ol>
                        </nav>
                        <h1>{this.state.catName}</h1>
                    </div>
                </section>
                <section className="top-category">
                    <div className="container">
                        <div className="heading">
                            <h3>All Courses</h3>
                        </div>
                        <div className="row">
                            <CarouselData courseData={this.state.courses} />
                        </div>
                    </div>            
                </section>
            </>
        )
    }
    componentDidMount(){
        var catId = this.props.match.params.id; 
        this.setState({oldCat:catId})
        //or var catId = this.props.location.pathname.split('/')[2]; 
        axios.get(`${url}/${catId}`).then((res) => {
            this.setState({courses:res.data})
        })
        axios.get(`${catUrl}/${catId}`).then((res) => {
            this.setState({catName:res.data[0].category_name})
        })
    }
    componentDidUpdate(){
        if(this.state.oldCat != this.props.match.params.id){
            this.componentDidMount()
        }
    }
}
export default SingleCat;