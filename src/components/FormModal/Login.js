import React from "react";
import './formModal.css';
import axios from "axios";
import {withRouter} from 'react-router-dom';

const url = "https://signinup.herokuapp.com/api/auth/login";
const urlUser = "https://signinup.herokuapp.com/api/auth/user-info";
let validation = true;

class Login extends React.Component {
    constructor(props){
        super(props);
    }

    checkValue = (event) => {
        var id = event.target.id;
        var index;
        var inputValue = document.getElementById(id).value;
        
        if(id == "lemail"){
            index = 0;
        }
        if(id == "lpassword"){
            index = 1;
        }
        document.getElementsByClassName("lerror")[index].style.display = 'none';
        document.getElementById(id).style.borderColor = "#88797a";
        if(inputValue == ""){
            document.getElementsByClassName("lerror")[index].style.display = 'block';
            document.getElementById(id).style.borderColor = "red";
            validation = false;
        }
        else{
            validation = true;
        }
    }
    formSubmit = () => {
        var email = document.getElementById("lemail").value;
        var password = document.getElementById("lpassword").value;
        if(email == ""){
            document.getElementById("lemail").style.borderColor = "red";
            document.getElementById("lmessg").innerText = "Email or Password can't be blank."
            document.getElementById("lmessg").style.color = "red";
            validation = false;
        }
        if(password == ""){
            document.getElementById("lpassword").style.borderColor = "red";
            document.getElementById("lmessg").innerText = "Email or Password can't be blank.";
            document.getElementById("lmessg").style.color = "red";
            validation = false;
        }
        var data={
            email: email,
            password: password
        }
        if(validation){
            document.getElementById("lmessg").innerText = "";
            axios.post(url, data)
            .then((res) => {
                localStorage.setItem("token",res.data.token);
                document.getElementById("lmessg").innerText = "Logged in Successfully.";
                document.getElementById("lmessg").style.color = "green";
                document.getElementsByClassName("modal-backdrop")[0].classList.remove("modal-backdrop");
                document.getElementById("loginForm").style.display = "none";
                document.getElementsByTagName("body")[0].style.overflow = "auto";
                document.getElementsByTagName("body")[0].style.paddingRight = "0";
                document.getElementById("navbar-top").style.paddingRight = "0";
                
                axios.get(urlUser, {
                    headers:{
                        "x-access-token":res.data.token
                    }
                }).then((result) => {
                    localStorage.setItem("name",result.data.name);
                    localStorage.setItem("email",result.data.email);
                    localStorage.setItem("phone",result.data.phone);
                    this.props.history.push("/");
                })
                
            })
            .catch((err) => {
                document.getElementById("lmessg").innerText = err.response.data.token;
                document.getElementById("lmessg").style.color = "red";
            })
        }
    }
    showHide = () => {
        if(document.getElementById("lpassword").type == "text") {
            document.getElementById("lpassword").type = "password";
        }else{
            document.getElementById("lpassword").type = "text";
        }
    }
    render() {
        return (
            <div className="modal fade signup-modal" id="loginForm" aira-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-md" id="formDialog">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <div className="w-100">
                                <h5 className="modal-title text-center" id="formHeading">Login</h5>
                            </div>
                            
                            <button type="button" className="close" data-bs-dismiss="modal">
                                X
                            </button>
                        </div>
                        <div className="modal-body">
                            <p id="lmessg" className="messg"></p>
                            <form className="row">
                                <div className="col-md-12 input-area">
                                    <label for="email" className="form-label">EMAIL*</label>
                                    <input type="email" className="form-control" id="lemail"
                                    placeholder="Email" onInput={(id) => this.checkValue(id)} />
                                    <p className="error lerror">Please Enter Your Email</p>
                                </div>
                                <div className="col-md-12 password input-area">
                                    <label for="password" className="form-label">PASSWORD*</label>
                                    <div className="position-relative">
                                        <input type="password" className="form-control" id="lpassword"
                                            placeholder="Password" onInput={(id) => this.checkValue(id)} />
                                        <div className="icon eye-icon" onClick={this.showHide}>
                                            <i className="fas fa-eye"></i>
                                        </div>
                                    </div>
                                    <p className="error lerror">Please Enter Your Password</p>
                                </div>
                                <div className="col-md-12">
                                    <button type="button" onClick={this.formSubmit} className="btn-register" id="btn-user">Login</button>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer border-0">
                    
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Login);