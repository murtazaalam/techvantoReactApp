import React from 'react';

class TopCategory extends React.Component {
    render() {
        return (
            <section class="top-category">
                <div class="container">
                    <div class="heading">
                        <h3>Top Categories</h3>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="category-box">
                                <div class="icon">
                                    <i class="fas fa-paint-brush"></i>
                                </div>
                                <div class="text">Art & Design</div>
                            </div>
                            <div class="category-box">
                                <div class="icon">
                                    <i class="fas fa-briefcase"></i>
                                </div>
                                <div class="text">Business</div>
                            </div>
                            <div class="category-box">
                                <div class="icon">
                                    <i class="fas fa-atom"></i>
                                </div>
                                <div class="text">Data Science</div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="category-box">
                                <div class="icon">
                                    <i class="far fa-file-code"></i>
                                </div>
                                <div class="text">Development</div>
                            </div>
                            <div class="category-box">
                                <div class="icon">
                                    <i class="fas fa-file-invoice-dollar"></i>
                                </div>
                                <div class="text">Finance</div>
                            </div>
                            <div class="category-box">
                                <div class="icon">
                                    <i class="fas fa-walking"></i>
                                </div>
                                <div class="text">Health & Fitness</div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="category-box">
                                <div class="icon">
                                    <i class="fas fa-hand-holding-heart"></i>
                                </div>
                                <div class="text">Lifestyle</div>
                            </div>
                            <div class="category-box">
                                <div class="icon">
                                    <i class="fas fa-ad"></i>
                                </div>
                                <div class="text">Marketing</div>
                            </div>
                            <div class="category-box">
                                <div class="icon">
                                    <i class="fas fa-music"></i>
                                </div>
                                <div class="text">Music</div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="category-box">
                                <div class="icon">
                                    <i class="far fa-lightbulb"></i>
                                </div>
                                <div class="text">Personal Development</div>
                            </div>
                            <div class="category-box">
                                <div class="icon">
                                    <i class="fas fa-camera"></i>
                                </div>
                                <div class="text">Photography</div>
                            </div>
                            <div class="category-box">
                                <div class="icon">
                                    <i class="fas fa-chalkboard-teacher"></i>
                                </div>
                                <div class="text">Teaching & Academics</div>
                            </div>
                        </div>
                    </div>
                </div>            
            </section>
        )
    }
}
export default TopCategory;