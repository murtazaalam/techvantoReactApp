import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import SingleCourse from './SingleCourse/SingleCourse';
import Home from "./Home";
import AllCourses from "./AllCourses/AllCourses";

const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/course/:id" component={SingleCourse}></Route>
                    <Route path="/courses" component={AllCourses}></Route>
                <Footer/>
            </BrowserRouter>
        </>
    )
}
export default Routing;