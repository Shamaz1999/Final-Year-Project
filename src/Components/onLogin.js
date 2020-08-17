import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import { Dropdown } from "react-bootstrap";
import man from './../images/man.png'
import girl from './../images/girl.png'


class Onlogin extends Component {

    state = {
        isloggedin: true
    }

    logout=()=>{
        localStorage.removeItem('user');
        alert('You have been logged out')
    }   
    render() {

    console.log(this.props)
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
        url1:this.props.user.url1,
        favorites:this.props.user.favourites,
    };
    localStorage.setItem('user',JSON.stringify(user))
    console.log(user)
}
 var dp= null;
if (user.url1 === "") {
    if (user.gender === "male"){
        dp = man
    }
    if (user.gender === "female"){
        dp = girl
    }
}
else{dp = user.url1}
        return (
            <div className="app">

                <Dropdown style={{textAlign:'center'}}>
                    <Dropdown.Toggle className="dropdown" variant="success" id="dropdown-basic">
                        <img id="dropdown" className="user-image" height="60" width="60" alt="User Image" src={dp}/>  </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item ><a>{user.name}</a><hr className="u-name-divider" /></Dropdown.Item>
                        <Dropdown.Item><Link className="black" to="/details">Profile</Link></Dropdown.Item>
                        <Dropdown.Item ><Link className="black" to="/postad">Post Ad</Link></Dropdown.Item>
                        <Dropdown.Item><Link className="black" to="/myAds">My Ads</Link></Dropdown.Item>
                        <Dropdown.Item><Link className="black" to="/favoriteAds">Favorite Ads</Link></Dropdown.Item>
                        <Dropdown.Item ><Link className="black" to="/" onClick={this.logout} >Log Out</Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </div>
        );
    }
}
const mapStateToProps=(store)=>{
    return {
        user:store.userReducer
    }
}

export default connect(mapStateToProps)(Onlogin);