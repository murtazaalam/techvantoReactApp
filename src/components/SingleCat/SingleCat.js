import React from 'react';
import {Link} from 'react-router-dom';
import './singleCat.css';
import Header from '../Header/Header';

const SingleCat = () => {
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
                                Category
                            </li>
                        </ol>
                    </nav>
                    <h1>Category</h1>
                </div>
            </section>
            <section className="top-category">
                <div className="container">
                    <div className="heading">
                        <h3>All Courses</h3>
                    </div>
                    <div className="row">
                        
                    </div>
                </div>            
            </section>
        </>
    )
}
export default SingleCat;