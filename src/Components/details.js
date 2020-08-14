import React, { Component } from 'react'; 
import "./../bootstrap/bootstrapC.css";
import {connect} from 'react-redux'
import man from './../images/man.png'
import girl from './../images/girl.png'



class Details extends Component {

    state={
        id:'',
        name:'',
        phone:'',
        about:'',
        password:'',
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
            about:this.props.user.about,
            address:this.props.user.address,
            url1:this.props.user.url1
        };
        localStorage.setItem('user',JSON.stringify(user))
        console.log(user.about)
    }
// let  u = JSON.parse(localStorage.getItem('user'))
this.refs.name.value=user.name
this.refs.phone.value=user.phone
this.refs.about.value=user.about
this.refs.password.value=user.password
this.refs.address.value=user.address


this.setState({name:user.name})
this.setState({phone:user.phone})
this.setState({password:user.password})
this.setState({about:user.about})
this.setState({id: user._id})


}
disp=()=>{
    this.props.dispatch({type:"insertads",payload:"Samsung"})
}
delete = ()=>{
    
    let retVal = window.confirm("Do you want to delete your account ?");
    if( retVal == true ) {
        var option = {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch('http://localhost:8000/deleteuser', option)
        .then(res => res.json())
        .then(data => {console.log(data)
        })
        .catch(err => {console.log(err)})

        alert("Your account has been deleted");
        return true;
    } else {
        return false;
    }
}

discard = ()=>{
    this.forceUpdate()  
    }
    
    save = ()=>{


        var option = {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        console.log(this.state)
        fetch('http://localhost:8000/updateinfo', option)
        .then(res => res.json())
        .then(data => {console.log(data)
            let u = JSON.parse(localStorage.getItem('user'))
            u = data;
            localStorage.setItem('user',JSON.stringify(u))
            // this.props.dispatch({type:'Add_user',payload:data})
        })
        .catch(err => {console.log(err)})


        alert('Your changes have been saved')
    }
    render(){
        
        let u = JSON.parse(localStorage.getItem('user'))
        var dp= null
if (u.url1 === "") {
    if (u.gender === "male"){
        dp = man
    }
    if (u.gender === "female"){
        dp = girl
    }
}
else{dp = u.url1}

        return(
            
            <div className="app">
                <div className="container">
                
                    <div className="detail-container">
                        <div className="profile-pic-container">
                            <img height="150" width="150" src={dp} alt="profile-pic" />
                        </div>
                        <div style={{textAlign:'center'}}>
    
                            <span className="detail-text-group">
                                    <label htmlFor="exampleInputEmail1">Your Name</label>
                                    <br/>
                                    <input onChange={e => this.setState({name:e.target.value})} type="text" ref="name" name="detail-name" className="detail-input"/>                               
                            </span>
                            <span className="detail-text-group">
                                    <label htmlFor="exampleInputEmail1">Address</label>
                                    <br/>
                                    <input onChange={e => this.setState({about:e.target.value})} type="text" ref="address" name="detail-info" className="detail-input"  />                               
                            </span>
                            <span className="detail-text-group">
                                    <label htmlFor="exampleInputEmail1">Mobile Number</label>
                                    <br/>
                                    <input onChange={e => this.setState({phone:e.target.value})} type="text" ref="phone" name="detail-mobile" className="detail-input"/>
                            </span>
                            <span className="detail-text-group">
                                    <label htmlFor="exampleInputEmail1">Password</label>
                                    <br/>
                                    <input onChange={e => this.setState({password:e.target.value})} type="text" ref="password" name="detail-name" className="detail-input" />     
                            </span>
                            <div className="detail-text-group" style={{width:'88%', }}>
                                    <label htmlFor="exampleInputEmail1">About Me</label>
                                    <br/>
                                    <textarea onChange={e => this.setState({about:e.target.value})} style={{resize:"none"}} rows="5" type="text" ref="about" name="detail-info" className="detail-input"  />                               
                            </div>
                        </div>

                        <button className="btn btn-outline-danger mt-3" type="button" onClick={this.delete}>Delete my account and data</button>

                        <div className="container">
                        <hr/>
                        </div>

                        <button type="button" className="btn btn-outline-info mt-3" onClick={this.discard}>Discard</button>

                        <button className="btn login-btn float-right" type="button" onClick={this.save}>Save Changes</button>

                    </div>

                   

                </div>
            </div>
        );
    }
}
const mapStateToProps=(store)=>{
    return {
        data:store.adsReducer,
        user:store.userReducer
    }
}


export default connect(mapStateToProps)(Details)