import React, { Component } from 'react'
import {Link} from "react-router-dom"


class Login extends Component {

    state={
        email:"",
        password:""
    }
    componentDidMount(){
        const input = this.refs.email;
        input.focus();
    }
    verify=()=>{
        if(this.state.email == ""){
            alert('Email is required');
            var input = this.refs.email;
            input.focus();
            return false
        }
        if(this.state.password==""){
            alert("Password is required");
            var input = this.refs.password;
            input.focus();
            return false
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
                                    <button onClick={this.verify} className="btn login-btn">Submit</button>
                                </div>
                                <div className="float-right">
                                   <p id="swap">
                                        <Link to="/signup">Don't have an account! Create one now.</Link>
                                   </p>
                                </div>
                            </div>
                        </div>
                    </form>
            </div>
        );
    }
}
export default Login;