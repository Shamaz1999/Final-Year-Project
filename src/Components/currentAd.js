import React, { Component } from 'react'; 
import {Link} from 'react-router-dom'
import adImg from './../images/b3.jpg'

class Ad extends Component {
    state={
        name:"",
        topic:"",
        comments:""
    }

    render(){
        console.log(this.state)
        return(
            <div className="app">
                <div className="container">
                <div className="ad-img-container">

                    <img src={adImg} alt="Ad Image" height="500" width="600"/>                

                </div>
                
                </div>            
            </div>
            );
    }
}

export default Ad