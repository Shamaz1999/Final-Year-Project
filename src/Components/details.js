import React, { Component } from 'react'; 
import "./../bootstrap/bootstrapC.css";
import { Link } from 'react-router-dom';
import man from './../images/man.png'
import girl from './../images/girl.png'


class Details extends Component {

    render(){
        return(
            <div className="app">
                <div className="container">
                
                    <div className="detail-container">
                        <div className="profile-pic-container">
                            <img height="150" width="150" src={man} alt="profile-pic" />
                        </div>

                        <span className="detail-text-group">
                                <label htmlFor="exampleInputEmail1">Your Name</label>
                                <br/>
                                <input type="text" name="detail-name" className="detail-input"  />                               
                        </span>
                        <span className="detail-text-group">
                                <label htmlFor="exampleInputEmail1">About Me (optional)</label>
                                <br/>
                                <input type="text" name="detail-info" className="detail-input"  />                               
                        </span>
                        <span className="detail-text-group">
                                <label htmlFor="exampleInputEmail1">Mobile Number</label>
                                <br/>
                                <input type="text" name="detail-mobile" className="detail-input"/>
                        </span>
                        <span className="detail-text-group">
                                <label htmlFor="exampleInputEmail1">Change Password</label>
                                <br/>
                                <input type="text" name="detail-name" className="detail-input" />     
                        </span>

                        <button className="btn btn-outline-danger mt-3">Delete my account and data</button>

                        <div className="container">
                        <hr/>
                        </div>

                        <button className="btn btn-outline-info mt-3">Discard</button>

                        <button className="btn login-btn float-right">Save Changes</button>

                    </div>

                   

                </div>
            </div>
        );
    }
}

export default Details