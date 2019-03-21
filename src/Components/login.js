import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {connect} from 'react-redux'

class Login extends Component {

    state={
        email:"",
        password:"",
        // user:'',
        // isLoggedIn: false,

    }
    componentDidMount(){
        const input = this.refs.email;
        input.focus();
    }
    verify=()=>{
        if(this.state.email === ""){
            alert('Email is required');
            const input = this.refs.email;
            input.focus();
            return false
        }else
        if(this.state.password===""){
            alert("Password is required");
            const input = this.refs.password;
            input.focus();
            return false
        }else{
            var option = {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            fetch('http://localhost:8000/login', option)
            .then(res => res.json())
            .then(data => {console.log(data)
                // this.setState({user:data})
                // this.setState({isLoggedIn:true})
                alert('You are logged into your account')
                this.props.dispatch({type:'Add_user',payload:data})
            })
            .catch(err => {console.log(err)
                this.setState({isLoggedIn:false})
                alert('Your email and password does not match')
            })

        }

    
    }

    render() {
        console.log(this.state)
        return (
            <div className="main-login">
                <form className="login-form" method="POST" style={{marginBottom:"190px"}} id="login-form" action="">
                        <div className="display-4">
                            Login to Your Account!
                        </div>
                        <div>
                            <div className="form-group mar">
                                <label htmlFor="exampleInputEmail1"><b>Email Address</b> <span className="required">*</span></label>
                                <input type="email" name="login-email" onChange={e => this.setState({email:e.target.value})} ref="email" className="form-control"  placeholder="Enter email"/>                               
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1"><b>Password</b> <span className="required">*</span></label>
                                <input type="password" name="login-pass" onChange={e => this.setState({password:e.target.value})} ref="password" className="form-control" placeholder="Enter Password"/>
                            </div>
                            <div>
                                <div className="float-left">
                                    <button onClick={this.verify} type="button" className="btn login-btn">Submit</button>
                                </div>
                                <div className="float-right">
                                   <p id="swap">
                                        <Link to="/signup">Don't have an account! Create one now.</Link>
                                   </p>
                                </div>
                            </div>
                        </div>
                    </form>
                    {console.log(this.props.user)}
            </div>
        );
    }
}
const mapStateToProps=(store)=>{
    return{
        user:store.userReducer
    }
}
export default connect(mapStateToProps)(Login);