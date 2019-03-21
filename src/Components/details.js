import React, { Component } from 'react'; 
import "./../bootstrap/bootstrapC.css";
import { Link } from 'react-router-dom';
import man from './../images/man.png'
import girl from './../images/girl.png'
import {connect} from 'react-redux'



class Details extends Component {
    disp=()=>{
        this.props.dispatch({type:"insertads",payload:"Samsung"})
    }
    delete = ()=>{

        let retVal = window.confirm("Do you want to delete your account ?");
               if( retVal == true ) {
                  document.write ("Your account has been deleted");
                  return true;
               } else {
                  return false;
               }
    }

    discard = ()=>{
        this.forceUpdate()  
    }

    save = ()=>{
        alert('Your changes have been saved')
    }
    render(){
        return(
            
            <div className="app">
                {console.log(this.props.data)}
                <button onClick={this.disp}>Click ME</button>
                <div className="container">
                
                    <div className="detail-container">
                        <div className="profile-pic-container">
                            <img height="150" width="150" src={man} alt="profile-pic" />
                        </div>
                        <div style={{textAlign:'center'}}>
    
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
                        </div>

                        <button className="btn btn-outline-danger mt-3" onClick={this.delete}>Delete my account and data</button>

                        <div className="container">
                        <hr/>
                        </div>

                        <button className="btn btn-outline-info mt-3" onClick={this.discard}>Discard</button>

                        <button className="btn login-btn float-right" onClick={this.save}>Save Changes</button>

                    </div>

                   

                </div>
            </div>
        );
    }
}
const mapStateToProps=(store)=>{
    return {
        data:store.adsReducer
    }
}

export default connect(mapStateToProps)(Details)