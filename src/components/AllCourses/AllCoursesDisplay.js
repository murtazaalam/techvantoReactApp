import React from "react";

const AllCoursesDisplay = (props) => {

    const renderCourses = ({allCourseData}) => {
        if(allCourseData){
            return allCourseData.map((item) => {
                return (
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="course-item">
                            <div className="image">
                                <img src={item.image} className="img-fluid" />
                            </div>
                            {item.level == "All Level" &&  <button className="level-badge" 
                                style={{background: '#c8e1c8',color: '#13ad13'}}>{item.level}</button>}

                            {item.level == "Intermediate" &&  <button className="level-badge"
                                style={{background: '#edbfbf',color: '#f71111'}}>{item.level}</button>}

                            {item.level == "Beginner" &&  <button className="level-badge"
                                style={{background: '#e7e8ff;',color: '#5b63fe'}}>{item.level}</button>}
                                
                            <h3 className="title">
                                <a href="#">
                                    {item.sub_category_name}
                                </a>
                            </h3>
                            <p className="text">{item.trainer_name}</p>
                            <span className="price">
                                <i className="fa fa-rupee-sign"></i>{item.price}.<span className="decimal">00</span>
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