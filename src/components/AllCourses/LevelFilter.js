import React from 'react';
import axios from 'axios';

const url = "http://techvanto.herokuapp.com/allcourses";

class LevelFilter extends React.Component {
    levelChange = (value) => {
        document.getElementById("pagination").style.display = "none";
        localStorage.removeItem("seaarchData");
        axios.get(`${url}?level=${value}`).then((res) => {
            this.props.levelFilter(res.data);
        })
    }
    render() {
        return (
            <>
                <li> 
                    <input type="radio" name="radio" className="form-check-input" value="All Level" 
                        onChange={(e) => this.levelChange(e.target.value)}/>
                    <label className="form-check-label">All Levels</label>
                </li>
                <li> 
                    <input type="radio" name="radio" className="form-check-input" value="Beginner"
                        onChange={(e) => this.levelChange(e.target.value)}/>
                    <label className="form-check-label">Beginners</label>
                </li>
                <li> 
                    <input type="radio" name="radio" className="form-check-input" value="Intermediate"
                        onChange={(e) => this.levelChange(e.target.value)}/>
                    <label className="form-check-label">Intermediate</label>
                </li>
            </>
        )
    }
}
export default LevelFilter;