import React from 'react';
import {Link} from 'react-router-dom';

const StudentsViewDisplay = (props) => {
    const renderCourses = ({allCoursesData}) => {
        if(allCoursesData){
            return allCoursesData.map((item) => {
                return(
                    <div className="col-lg-2 col-md-4 course-card">
                        <div className="course-item">
                            <div className="image">
                                <Link to={`course/${item._id}`} key={item._id}>
                                    <img src={item.image} alt={item.sub_category_name} className="img-fluid" />
                                </Link>   
                            </div>
                            
                            <button className="level-badge">{item.level}</button>
                            <h3 className="title">
                                <Link to={`course/${item._id}`} key={item._id}>
                                    {item.sub_category_name}
                                </Link>
                            </h3>
                            <p className="text">Trainer Name : <b>{item.trainer_name}</b></p>
                            <span className="price">
                                <i className="fas fa-rupee-sign"></i>{item.price}.<span className="decimal">99</span>
                            </span>
                            <div className="rating">
                                <span className="star-icon">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star" style={{color: '#ccc'}}></i>
                                    <i className="fas fa-star" style={{color: '#ccc'}}></i>
                                </span>
                                <span className="total-rating">({item.rating})</span>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }
    return (
        <>
            {renderCourses(props)}
        </>
    )
}
export default StudentsViewDisplay;