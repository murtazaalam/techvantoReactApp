import React from "react";
import {Link} from "react-router-dom";

const CategoryDisplay = (props) => {
    const renderCategory = ({allCategories}) => {
        if(allCategories){
            return allCategories.map((item) => {
                return (
                    <li key={item._id}>
                        <Link to={`/category/${item._id}`} className="category">
                            {item.category_name}
                        </Link>
                    </li>
                )
            })
        }
    }
    return (
        <>
            {renderCategory(props)}
        </>
    )
}
export default CategoryDisplay;