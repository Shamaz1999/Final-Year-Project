import React, { Component } from 'react'; 
import "./../bootstrap/bootstrapC.css";
import man from './../images/man.png'
import girl from './../images/girl.png'
import { connect } from 'react-redux'


class Seller extends Component {
    state={
        id:'',
        name:'',
        phone:'',
        about:'',
        
    }

    componentDidMount(){


        let user = JSON.parse(localStorage.getItem('user'));
    if (user === null){
      user = {
        _id:this.props.user._id,
        name : this.props.user.name,
        email : this.props.user.email,
        password:this.props.user.password,
        DOB:this.props.user.DOB,
        phone:this.props.user.phone,
        gender:this.props.user.gender,
        country:this.props.user.country,
        date:this.props.user.date,
        address:this.props.user.address,
        url1:this.props.user.url1
    };
    localStorage.setItem('user',JSON.stringify(user))
}
    }
    
    
    render(){
        console.log(this.props)
        console.log(this.props.ad.sellerId)
        
       const gender= 'male';
       let profile = '';
        
        if (gender === 'male') {
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
                                <input type="text" disabled name="detail-name" className="detail-input"  />                               
                        </span>
                        <span className="detail-text-group">
                                <label htmlFor="exampleInputEmail1">About Me</label>
                                <br/>
                                <input type="text" disabled name="detail-info" className="detail-input"  />                               
                        </span>
                        <span className="detail-text-group">
                                <label htmlFor="exampleInputEmail1">Mobile Number</label>
                                <br/>
                                <input type="text" disabled name="detail-mobile" className="detail-input"/>
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
const mapStateToProps = (store) => {
    return {
        ad: store.adsReducer
    }
}
export default connect(mapStateToProps)(Seller);

// export default Seller