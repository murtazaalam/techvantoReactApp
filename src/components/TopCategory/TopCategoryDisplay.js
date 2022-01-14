import React from "react";
import {Link} from "react-router-dom";
import './topCategory.css';

const TopCategoryDisplay = (props) => {
    const renderCategories = ({categoryData}) => {
        if(categoryData){
            return categoryData.map((item) =>{
                return(
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={item._id}>
                        <Link to={`/category/${item._id}`} className="cat-link">
                            <div className="category-box">
                                <div className="icon">
                                    <i className={item.icon}></i>
                                </div>
                                <div className="text">{item.category_name}</div>
                            </div>
                        </Link>
                    </div>
                )
            })
        }
    }
    
    return(
        <>
            {renderCategories(props)}
        </>
    )
}
export default TopCategoryDisplay;