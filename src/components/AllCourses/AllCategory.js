import React from 'react';

const AllCategory = (props) => {
    const renderCategories = ({allCategories}) => {
        if(allCategories){
            return allCategories.map((item) => {
                return (
                    <li> 
                        <input type="checkbox" className="form-check-input"/>
                        <label className="form-check-label">{item.category_name}(8)</label>
                    </li>
                )
            })
        }
    }
    return (
        <>
            {renderCategories(props)}
        </>
    )
}
export default AllCategory;