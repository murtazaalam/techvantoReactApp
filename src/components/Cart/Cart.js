import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './cart.css';
import Header from '../Header/Header';

const ordersUrl = "http://techvanto.herokuapp.com/placeOrder";
const couponUrl = "http://techvanto.herokuapp.com/coupon?code=";
class Cart extends React.Component {
    constructor(props) {
        super(props);
        
        this.state={
            id:Math.floor(Math.random()*100000),
            name:localStorage.getItem('name')?localStorage.getItem('name'):'',
            phone:localStorage.getItem("phone")?localStorage.getItem("phone"):'',
            email:localStorage.getItem("email")?localStorage.getItem("email"):'',
            cost:'',
            courseId:'',
            courseName:'',
            discount: 0,
            currentDateTime: new Date().toLocaleString()
        }
    }
    
    checkout = () => {
        document.getElementById("user-msg").innerHTML = "";
        if(sessionStorage.getItem("courseDetails")){
            var cost = document.getElementById("final-cost").innerHTML;
            var courseId = document.getElementById("course-id").value;
            var courseName = document.getElementById("course-name").innerHTML;
            
            this.setState({
                cost:cost,
                courseId:courseId,
                courseName:courseName
            })
        }
    }
    payment = () => {
        localStorage.setItem('courseName',this.state.courseName);
        var obj = this.state;
        if(localStorage.getItem("token")){
            axios.post(ordersUrl, obj).then((res) => {
                //window.location.href='http://localhost:4100/paynow'
                console.log("course added")
            }).catch((err) => {
                console.log(err);
            })
        }
        else{
            document.getElementById("user-msg").innerHTML = "Please login to pay";
            document.getElementById("user-msg").style.color = "red";
            document.getElementById("user-msg").style.fontWeight = "600";
        }
    }
    confirm = () => {
        sessionStorage.removeItem("courseDetails");
        this.props.history.push('/cart');
        document.getElementById("alert").style.display = "none";
        document.getElementsByClassName("modal-backdrop")[0].classList.remove("modal-backdrop")
        document.getElementsByTagName("body")[0].style.overflow = "auto";
        document.getElementsByTagName("body")[0].style.paddingRight = "0";
        document.getElementById("navbar-top").style.paddingRight = "0";
    }
    blankCoupon = (e) => {
        if(e.target.value == ""){
            document.getElementById("msg").innerHTML = "Please Enter A Coupon Code";
            document.getElementById("msg").style.color = '#cf202d';
        }
        else{
            document.getElementById("msg").innerHTML = "";
        }
    }
    coupon = () => {
        var code = document.getElementById("coupon").value;
        var currentDate = new Date(this.state.currentDateTime.split(',')[0]);
            if(sessionStorage.getItem("courseDetails")){
                if(code != ""){
                    axios.get(`${couponUrl}${code}`).then((res) => {
                        if(res.data[0]){
                            var expiry = new Date(res.data[0].expiry.split('T')[0]);
                            var diffTime = expiry - currentDate;
                            if(diffTime >= 0){
                                document.getElementById("msg").innerHTML = `<i class='fas fa-check-circle'></i> Coupon Code ${res.data[0].code} Applied Successfully`;
                                document.getElementById("msg").style.color = '#08a108';
                                this.setState({discount:res.data[0].discount})
                            }
                            else{
                                document.getElementById("msg").innerHTML = "Coupon Expired";
                                document.getElementById("msg").style.color = '#cf202d';
                            }
                            
                        }
                        else{
                            document.getElementById("msg").innerHTML = "Invalid Coupon";
                            document.getElementById("msg").style.color = '#cf202d';
                        }
                    }).catch((err) => {
                        console.log(err);
                    })
                }
                else{
                    document.getElementById("msg").innerHTML = "Please Enter A Coupon Code";
                    document.getElementById("msg").style.color = '#cf202d';
                }
            }
        else{
            document.getElementById("msg").innerHTML = "Please choose a course";
            document.getElementById("msg").style.color = '#cf202d';
        }
    }
    render() {
        let course = sessionStorage.getItem("courseDetails");
        let courseArray = [];
        localStorage.removeItem("onAllCourse");
        localStorage.removeItem("seaarchData");
        if(course){
            course.split(",").map((item) => {
                courseArray.push(item);
            })
        }
        
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
                                <li className="breadcrumb-item active">
                                    Cart
                                </li>
                            </ol>
                        </nav>
                        <h1>Cart</h1>
                    </div>
                </section>
                <section className="cart-area">
                    <div className="container">
                        <table className="table product-table">
                            <thead>
                                <tr className="table-heading">
                                    <th>
                                        Product
                                    </th>
                                    <th>

                                    </th>
                                    <th>
                                        Price
                                    </th>
                                    <th>

                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {sessionStorage.getItem("courseDetails") &&
                                    <tr>
                                        <td className="img-column">
                                            <img src={courseArray[2]} width="130" className="img-fluid"/>
                                        </td>
                                        <td style={{paddingLeft: '10px'}} id="course-name">
                                            {courseArray[0]}
                                        </td>

                                        <td>
                                            <span><i className="fas fa-rupee-sign"></i></span> <b>{courseArray[1]}.00</b>
                                        </td>
                                        <td>
                                            <div className="remove-item">
                                                <span data-bs-toggle="modal" data-bs-target="#alert">
                                                    Remove
                                                    <div className="line-1"></div>
                                                    <div className="line-2"></div>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                        <div className="lower-button">
                            <div className="continue-clear-btn">
                                <button type="button" className="">Continue shoping</button>
                                <span className="clear">
                                    <span>
                                        <i className="fa fa-times"></i>
                                    </span>
                                    <span>Clear cart</span>
                                </span>
                            </div>
                            <div className="update-cart">
                                <button type="button" disabled>Update cart</button>
                            </div>
                        </div>
                        <div className="total-n-coupon">
                            <div className="coupon">
                                <h6>Coupon Discount</h6>
                                <p>Enter coupon code if you have</p>
                                <input type="text" id="coupon" className="" placeholder="Coupon code" onChange={this.blankCoupon} />
                                <span id="msg" className="coupon-msg"></span>
                                <button type="button" onClick={this.coupon}>Apply coupon</button>
                            </div>
                            <div className="total">
                                <table className="table">
                                    <thead>
                                        
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="subtotal">
                                                Subtotal
                                            </td>
                                            <td className="sub-amt">
                                                <span><i className="fas fa-rupee-sign"></i></span> <b>{courseArray[1]}.00</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="total-txt">
                                                Total
                                            </td>
                                            <td className="total-amt">
                                                <span>
                                                    <i className="fas fa-rupee-sign"></i>
                                                </span> <b id="final-cost">
                                                    {Math.ceil(courseArray[1] - (courseArray[1]*(this.state.discount/100)))}
                                                    </b>.00
                                                {this.state.discount > 0 &&
                                                    <p className="discout-amount" id="discount">
                                                        - <i className="fas fa-rupee-sign"></i>&nbsp; 
                                                        {Math.floor(courseArray[1]*(this.state.discount/100))}
                                                    </p>
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button type="button" className="checkout-btn" onClick={this.checkout} data-bs-toggle="modal" 
                                data-bs-target="#paymentAlert">Checkout</button>
                            </div>

                        </div>
                    </div>
                </section>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="paymentAlert" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" 
                    aria-labelledby="paymentAlertLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="paymentAlertLabel">
                            Payment
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="text-center user-msg" id="user-msg"></p>
                        {sessionStorage.getItem("courseDetails") ?
                            <table className="table table-borderless">
                                <thead>

                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Course Name : </td>
                                        <td><b>{courseArray[0]}</b></td>
                                    </tr>
                                    <tr>
                                        <td>Total Amount : </td>
                                        <td><span><i className="fas fa-rupee-sign"></i></span> <b>{this.state.cost}</b></td>
                                    </tr>
                                </tbody>
                            </table>:
                            <div>
                                <span style={{color:'red'}}>
                                    <i className="fas fa-exclamation-triangle"></i>
                                </span> <b>Please Choose a Course.</b>
                            </div>
                        }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        {/* http://localhost:4100/paynow */}
                        <form action="https://techpayment.herokuapp.com/paynow" method="post">
                            <input type="hidden" name="id" value={this.state.id}/>
                            <input type="hidden" name="cost" value={this.state.cost}/>
                            <input type="hidden" name="name" value={this.state.name}/>
                            <input type="hidden" name="email" value={this.state.email}/>
                            <input type="hidden" name="phone" value={this.state.phone}/>
                            <input type="hidden" name="courseName" value={this.state.courseName}/>
                            <input type="hidden" id="course-id" value={courseArray[3]}/>
                            {sessionStorage.getItem("courseDetails") &&
                            <button type={localStorage.getItem('token')?'submit':'button'} className="btn btn-primary" 
                                onClick={this.payment}>Pay Now</button>
                            }
                        </form>
                    </div>
                    </div>
                </div>
                </div>

                {/* alert */}
                <div className="modal fade" id="alert" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" 
                    aria-labelledby="alertLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="paymentAlertLabel">
                            <b>Are You Sure ?</b>
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <span style={{color:'red'}}>
                            <i className="fas fa-exclamation-triangle"></i>
                        </span> <b>Do you really want to remove the course ?</b>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-danger" onClick={this.confirm}>Confirm</button>
                    </div>
                    </div>
                </div>
                </div>
            </>
        )
    }
}
export default Cart;