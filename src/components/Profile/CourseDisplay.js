import React from 'react';
import axios from 'axios';
import './profile.css';
const url = "http://techvanto.herokuapp.com/allcourses";

class CourseDisplay extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            courseDetail:''
        }
    }
    getCourseDetail = (id) => {
        axios.get(`${url}/${id}`).then((res)=>{
            this.setState({courseDetail:res.data[0]})
        })
    }
    renderTable = ({courseData}) => {
        if(courseData){
            return courseData.map((item) => {
                return(
                    <tr key={item._id}>
                        <td>{item.id}</td>
                        <td onClick={() => this.getCourseDetail(item.courseId)} className="course-name" data-bs-toggle="modal" 
                            data-bs-target="#detail">
                            {item.courseName}
                        </td>
                        <td><span><i className="fas fa-rupee-sign"></i></span> <b>{item.cost}</b></td>
                        <td>{item.date}</td>
                        <td>{item.bank_status}</td>
                        <td>{item.bank}</td>
                    </tr>
                )
            })
        }

    }
    render(){
        var course = this.state.courseDetail;
        return(
            <>
                {this.renderTable(this.props)}
                <div className="modal fade" id="detail" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" 
                    aria-labelledby="detailLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-md">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="detailLabel">
                                <b>Course Detail</b>
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <table className="table table-stripped table-borderless">
                                <thead>
                                    
                                </thead>
                                {course && 
                                <tbody>
                                    <tr>
                                        <td colspan="2"><img src={course.image} className="img-fluid"/></td>
                                    </tr>
                                    <tr>
                                        <td>Course Name : </td>
                                        <td><b>{course.sub_category_name}</b></td>
                                    </tr>
                                    <tr>
                                        <td>Trainer Name : </td>
                                        <td><b>{course.trainer_name}</b></td>
                                    </tr>
                                    <tr>
                                        <td>Price : </td>
                                        <td><b>{course.price}</b></td>
                                    </tr>
                                    <tr>
                                        <td>Duration : </td>
                                        <td><b>{course.duration}</b></td>
                                    </tr>
                                    <tr>
                                        <td>Rating : </td>
                                        <td><b>{course.rating}</b></td>
                                    </tr>
                                    <tr>
                                        <td>Level : </td>
                                        <td><b>{course.level}</b></td>
                                    </tr>
                                </tbody>}
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default CourseDisplay;