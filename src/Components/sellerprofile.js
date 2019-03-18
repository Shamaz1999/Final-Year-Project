import React, { Component } from 'react'; 
import "./../bootstrap/bootstrapC.css";
import { Link } from 'react-router-dom';
import man from './../images/man.png'
import girl from './../images/girl.png'


class Seller extends Component {

    
    render(){
        console.log(this.props)

       const gender= 'male';
       let profile = '';
        
        if (gender == 'male') {
            profile = man
        }
        else {
            profile = girl
        }

        return(
            <div className="app">
                <div className="container">
                
                    <div className="detail-container text-center">
                        <div className="profile-pic-container">
                            <img height="150" width="150" src={profile} alt="profile-pic" />
                        </div>

                        <span className="detail-text-group">
                                <label htmlFor="exampleInputEmail1">Your Name</label>
                                <br/>
                                <input type="text" name="detail-name" className="detail-input"  />                               
                        </span>
                        <span className="detail-text-group">
                                <label htmlFor="exampleInputEmail1">About Me</label>
                                <br/>
                                <input type="text" name="detail-info" className="detail-input"  />                               
                        </span>
                        <span className="detail-text-group">
                                <label htmlFor="exampleInputEmail1">Mobile Number</label>
                                <br/>
                                <input type="text" name="detail-mobile" className="detail-input"/>
                        </span>
                        <div className="container">
                        <hr/>
                        </div>

                    </div>

                   

                </div>
            </div>
        );
    }
}

export default Seller