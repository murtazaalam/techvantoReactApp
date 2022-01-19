import React from 'react';
import axios from 'axios';

const url = "http://techvanto.herokuapp.com/courses";
class AllCategory extends React.Component {
    constructor(props) {
        super(props);
    }
    getcat = (id) => {
        localStorage.removeItem("seaarchData");
        document.getElementById("pagination").style.display = "none";
        axios.get(`${url}/${id}`).then((res) => {
            this.props.categoryFilter(res.data)
        })
    }
    renderCategories = ({allCategories}) => {
        if(allCategories){
            return allCategories.map((item) => {
                return (
                    <li key={item._id}> 
                        <input type="radio" name="radio" onChange={(e) => this.getcat(e.target.value)} value={item._id} 
                            className="form-check-input"/>
                        <label className="form-check-label">{item.category_name}</label>
                    </li>
                )
            })
        }
    }
    render(){
        return (
            <>
                {this.renderCategories(this.props)}
            </>
        )
    }
}
export default AllCategory;