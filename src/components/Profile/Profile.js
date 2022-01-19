import React from 'react';
import './profile.css';
import axios from 'axios';
import Header from '../Header/Header';
import CourseDisplay from './CourseDisplay';
import {withRouter} from 'react-router-dom';
import emailjs from '@emailjs/browser';

const url = "https://signinup.herokuapp.com/api/auth/user-info";
const ordersUrl = "http://techvanto.herokuapp.com/orders";
const putUrl = "http://techvanto.herokuapp.com/update-status";

const templateParams = {
    name: localStorage.getItem('name'),
    course_name: localStorage.getItem('courseName'),
    to_email: localStorage.getItem('email'),
    message: 'Click here www.techvantoacademy.com'
};
class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders:''
        }
    }
    render() {
        localStorage.removeItem("onAllCourse");
        localStorage.removeItem("seaarchData");
        
        if(localStorage.getItem("token")){
            return(
                <>
                    <Header/>
                    <div className="container profile-box">
                        <div className="profile">
                            <div>
                                <div className="abbr-box">
                                    <h3 className="abbr">{localStorage.getItem("name")[0]}</h3>
                                </div>
                                <div className="text">
                                    <span className="title">Name : </span>
                                    <span className="title-value">{localStorage.getItem("name")}</span>
                                </div>
                                <div className="text">
                                    <span className="title">Email : </span>
                                    <span className="title-value">{localStorage.getItem("email")}</span>
                                </div>
                                <div className="text">
                                    <span className="title">Phone : </span>
                                    <span className="title-value">{localStorage.getItem("phone")}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <table className="table table-stripped">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Course Name</th>
                                        <th>Cost</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th>BankName</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <CourseDisplay courseData={this.state.orders} />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )
        }
        else{
            this.props.history.push("/");
            return (
                <>
                </>
            )
            
        }
    }
    componentDidMount(){
        if(this.props.location){
            var qparams = this.props.location.search;
            
            if(qparams){
                var bank = qparams.split('&')[3].split('=')[1].split('%20');
                var bankName = '';
                for(var i = 0; i < bank.length; i++){
                    bankName = bankName + bank[i] + ' '
                }
                var data = {
                    "date": `${qparams.split('&')[2].split('=')[1].split('%20')[0]}/${qparams.split('&')[2].split('=')[1].split('%20')[1]}`,
                    "bank_status": qparams.split('&')[0].split('=')[1],
                    "bank": bankName
                }
                var id = qparams.split('&')[1].split('=')[1].split('_')[1];
                axios.put(`${putUrl}/${id}`, data).then((res)=>{
                    axios.get(`${ordersUrl}?email=${localStorage.getItem("email")}`).then((res) => {
                        this.setState({orders:res.data})
                    })
                    this.props.history.push('/profile');
                    emailjs.send(
                        'service_cztnqkw',
                        'template_8juznzl',
                        templateParams,
                        'user_DGjgMzRrgkoYTBXJCkp1b'
                    ).then((res) => {
                        console.log(res);
                    }).catch((err) => {
                        console.log(err);
                    })
                    sessionStorage.removeItem("courseDetails");
                }).catch((err) => {
                    console.log(err);
                })
            }
            else{
                axios.get(`${ordersUrl}?email=${localStorage.getItem("email")}`).then((res) => {
                    this.setState({orders:res.data})
                })
            }
        }
    }
}
export default withRouter(Profile);