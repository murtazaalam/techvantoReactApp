import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import SingleCourse from './SingleCourse/SingleCourse';
import Home from "./Home";
import AllCourses from "./AllCourses/AllCourses";
import SingleCat from "./SingleCat/SingleCat";
import Cart from './Cart/Cart';
import Profile from "./Profile/Profile";

const Routing = () => {
    return (
        <>
            <BrowserRouter>
                
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/course/:id" component={SingleCourse}></Route>
                    <Route path="/courses" component={AllCourses}></Route>
                    <Route path="/category/:id" component={SingleCat}></Route>
                    <Route path="/cart" component={Cart}></Route>
                    <Route path="/profile" component={Profile}></Route>
                <Footer/>
            </BrowserRouter>
        </>
    )
}
export default Routing;