import React from 'react';

const Pagination = (props) => {
    const renderPage = ({totalPage}) => {
        if(totalPage < 1){
            return (
                <li className="page-item active">
                    <span className="page-link">{i+1}</span>
                </li>
            )
        }
        for(var i = 0; i < Number(totalPage); i++) {
            console.log(">>",i)
            return (
                <li className="page-item active">
                    <span className="page-link">{i+1}</span>
                </li>
            )
        }
    }
    return (
        <>
            {renderPage(props)}

            {/* <li className="page-item active">
                <span className="page-link">1</span>
            </li>
            <li className="page-item">
                <span className="page-link">
                    <a href="#">2</a>
                </span>
            </li>
            <li className="page-item">
                <span className="page-link">
                    ...
                </span>
            </li>
            <li className="page-item">
                <span className="page-link">
                    <a href="#">7</a>
                </span>
            </li>
            <li className="page-item">
                <span className="page-link">
                    <a href="#">
                        <i className="fas fa-angle-double-right"></i>
                    </a>
                </span>
            </li> */}
        </>
    )
}
export default Pagination;