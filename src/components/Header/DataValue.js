import React from 'react';
import {Link} from 'react-router-dom';

const DataValue = (props) => {

    const renderOptions = ({courseValue}) => {
        if(courseValue){
            return courseValue.map((item) => {
                return (
                    <option value={item._id} key={item._id}>{item.sub_category_name}</option>
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