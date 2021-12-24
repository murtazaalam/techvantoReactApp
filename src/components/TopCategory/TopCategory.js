import React from 'react';
import TopCategoryDisplay from './TopCategoryDisplay';

const url = "http://techvanto.herokuapp.com/category";
class TopCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryList:''
        }
    }
    render() {
        
        return (
            <section className="top-category">
                <div className="container">
                    <div className="heading">
                        <h3>Top Categories</h3>
                    </div>
                    <div className="row">
                        <TopCategoryDisplay categoryData={this.state.categoryList}/>
                    </div>
                </div>            
            </section>
        )
    }

    componentDidMount(){
        fetch(url, {method: 'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({categoryList:data})
        })
    }

}
export default TopCategory;