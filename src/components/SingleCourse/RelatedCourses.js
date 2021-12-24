import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const url = "http://techvanto.herokuapp.com/allcourses";

class RelatedCourses extends React.Component {
    constructor(props) {
        super(props);
    }
    
    renderCourses = ({relatedCoursesData}) => {
        if(relatedCoursesData){
            return relatedCoursesData.map((item) => {
                return(
                    <div className="course-box">
                        <Link to={`/course/${item._id}`} key={item._id}>
                            <img src={item.image} className="img-fluid" width="112"/>
                        </Link>  
                        <div className="detail">
                            <Link to={`/course/${item._id}`} key={item._id} class="title">
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
    render(){
        return (
            <>
                {this.renderCourses(this.props)}
            </>
        )
    }
    
}
export default RelatedCourses;