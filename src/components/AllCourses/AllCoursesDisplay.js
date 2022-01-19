import React from "react";
import {Link} from "react-router-dom";

const AllCoursesDisplay = (props) => {

    const renderCourses = ({allCourseData}) => {
        if(allCourseData){
            return allCourseData.map((item) => {
                return (
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12" key={item._id}>
                        <div className="course-item">
                            <div className="image">
                                <Link to={`/course/${item._id}`}>
                                    <img src={item.image} className="img-fluid" alt={item.sub_category_name} />
                                </Link>
                            </div>
                            {item.level == "All Level" &&  <button className="level-badge" 
                                style={{background: '#c8e1c8',color: '#13ad13'}}>{item.level}</button>}

                            {item.level == "Intermediate" &&  <button className="level-badge"
                                style={{background: '#edbfbf',color: '#f71111'}}>{item.level}</button>}

                            {item.level == "Beginner" &&  <button className="level-badge"
                                style={{background: '#e7e8ff',color: '#5b63fe'}}>{item.level}</button>}
                                
                            <h3 className="title">
                                <Link to={`/course/${item._id}`}>
                                    {item.sub_category_name}
                                </Link>
                            </h3>
                            <p className="text">{item.trainer_name}</p>
                            <span className="price">
                                {item.price != "0" &&
                                    <>
                                        <i className="fa fa-rupee-sign"></i> {item.price}.<span className="decimal">00</span>
                                    </>
                                }
                                {
                                    item.price == "0" &&
                                    <span>Free</span>
                                }
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
export default AllCoursesDisplay;