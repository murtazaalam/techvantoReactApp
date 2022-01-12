import React from 'react';
import StudentsViewDisplay from './StudentsViewDisplay';
import './studentsView.css';

const url = "http://techvanto.herokuapp.com/allcourses";

class StudentsView extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            allCourses:''
        }
    } 
    render(){
        return (
            <section className="student-view">
                <div className="container">
                    <div className="heading heading-for-mob">
                        <h3>Students are Viewing</h3>
                    </div>
                    <div className="accordion accordion-flush accordion-for-mobile" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button btn-focus" type="button" data-bs-toggle="collapse" 
                                    data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                                All
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" 
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <StudentsViewDisplay allCoursesData={this.state.allCourses}/>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Trending
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" 
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    Trending content
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                                    data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Popularity
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" 
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    Popularity content
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                                    data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    Featured
                                </button>
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" 
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    Featured content
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="student-view-tabs">
                        <div className="heading heading-for-lap">
                            <h3>Students are Viewing</h3>
                        </div>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <button type="button" className="nav-link active" data-bs-toggle="tab" data-bs-target="#allTab" aria-selected="true"
                                role="tab">All</button>
                            </li>
                            <li className="nav-item">
                                <button href="#" className="nav-link" data-bs-toggle="tab" data-bs-target="#trendingTab" aria-selected="false"
                                role="tab">Trending</button>
                            </li>
                            <li className="nav-item">
                                <button href="#" className="nav-link" data-bs-toggle="tab" data-bs-target="#popularityTab" aria-selected="false"
                                role="tab">Popularity</button>
                            </li>
                            <li className="nav-item">
                                <button href="#" className="nav-link" data-bs-toggle="tab" data-bs-target="#featuredTab" aria-selected="false"
                                role="tab">Featured</button>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" role="tabpanel" id="allTab">
                            <div className="row">
                                <StudentsViewDisplay allCoursesData={this.state.allCourses}/>
                            </div>
                        </div>
                        <div className="tab-pane fade" role="tabpanel" id="trendingTab">workingt</div>
                        <div className="tab-pane fade" role="tabpanel" id="popularityTab">workingp</div>
                        <div className="tab-pane fade" role="tabpanel" id="featuredTab">workingf</div>
                    </div>
                </div>
            </section>
        )
    }

    componentDidMount(){
        fetch(url, {method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                allCourses:data
            })
        })
    }
}
export default StudentsView;