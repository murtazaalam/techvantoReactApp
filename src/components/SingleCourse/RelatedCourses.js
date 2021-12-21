import React from 'react';
import {Link} from 'react-router-dom';

const RelatedCourses = (props) => {
    const renderCourses = ({relatedCoursesData}) => {
        if(relatedCoursesData){
            return relatedCoursesData.map((item) => {
                return(
                    <div className="course-box">
                        <Link to={`course/${item._id}`} key={item._id}>
                            <img src={item.image} className="img-fluid" width="112"/>
                        </Link>  
                        <div className="detail">
                            <Link to={`${item._id}`} key={item._id} class="title">
                                {item.sub_category_name}
                            </Link>
                            <div>
                                <span><i className="fas fa-rupee-sign"></i>&nbsp;{item.price}</span>
                                <span>.00</span>
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
export default RelatedCourses;