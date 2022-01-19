import React from 'react';
import axios from 'axios';

const url = "http://techvanto.herokuapp.com/allcourses";

class CostFilter extends React.Component{
    constructor(props) {
        super(props);
    }
    
    getValue = (value) => {
        
        localStorage.removeItem("seaarchData");
        document.getElementById("pagination").style.display = "none";

        if(value == ""){
            axios.get(`${url}?status=active`).then((res) => {
                this.props.costFilter(res.data);
            })
        }
        else if(value == "0"){
            axios.get(`${url}?cost=0`).then((res) => {
                this.props.costFilter(res.data);
            })
        }
    }
    render() {
        return(
        <>
            <li> 
                <input type="radio" name="radio" className="form-check-input" value="" onChange={(e) => this.getValue(e.target.value)}/>
                <label className="form-check-label">All</label>
            </li>
            <li> 
                <input type="radio" name="radio" className="form-check-input" value="0" onChange={(e) => this.getValue(e.target.value)}/>
                <label className="form-check-label">Free</label>
            </li>
            <li> 
                <input type="radio" name="radio" className="form-check-input" value="10" onChange={(e) => this.getValue(e.target.value)}/>
                <label className="form-check-label">Paid</label>
            </li>
        </>
        )
    }
}

export default CostFilter;