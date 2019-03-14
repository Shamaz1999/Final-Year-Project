import React, { Component } from 'react'
import {Link} from "react-router-dom"


class Login extends Component {
    render() {
        return (
            <div className="main-login">
                <form className="login-form" method="POST" style={{marginBottom:"190px"}} id="login-form" action="index.html">
                        <div className="display-4">
                            Login to Your Account!
                        </div>
                        <div>
                            <div className="form-group mar">
                                <label htmlFor="exampleInputEmail1"><b>Email Address</b></label>
                                <input type="email" name="login-email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email"/>                               
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1"><b>Password</b></label>
                                <input type="password" name="login-pass" className="form-control" placeholder="Enter Password"/>
                            </div>
                            <div>
                                <div className="float-left">
                                    <button type="submit" className="btn login-btn">Submit</button>
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