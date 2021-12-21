import React from "react";

const TopCategoryDisplay = (props) => {
    const renderCategories = ({categoryData}) => {
        if(categoryData){
            return categoryData.map((item) =>{
                return(
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={item._id}>
                        <div className="category-box">
                            <div className="icon">
                                <i className={item.icon}></i>
                            </div>
                            <div className="text">{item.category_name}</div>
                        </div>
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