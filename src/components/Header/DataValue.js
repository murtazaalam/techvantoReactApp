import React from 'react';
import {Link} from 'react-router-dom';

const DataValue = (props) => {

    const renderOptions = ({courseValue}) => {
        if(courseValue){
            return courseValue.map((item) => {
                return (
                    <option value={item.sub_category_name} key={item._id}/>
                )
            })
        }
    }
    return (
        <>
            {renderOptions(props)}
        </>
    )
}
export default DataValue;