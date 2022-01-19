import React from "react";
import StudentsView from "./StudentsView/StudentsView";
import TopCategory from "./TopCategory/TopCategory";
import StartSuccess from './StartSuccess/StartSuccess';
import Highlight from './Highlight/Highlight';
import GetStarted from './GetStarted/GetStarted';
import Partners from './Partners/Partners';
import Activity from './Activity/Activity';
import Reviews from './Reviews/Reviews';
import Header from './Header/Header';

const Home = () => {
    localStorage.removeItem("onAllCourse");
    localStorage.removeItem("seaarchData");
    return(
        <>
            <Header/>
            <StartSuccess/>
            <Highlight/>
            <TopCategory/>
            <StudentsView/>
            <GetStarted/>
            <Reviews/>
            <Activity/>
            <Partners/>
        </>
    )
}
export default Home;