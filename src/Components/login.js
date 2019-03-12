import React, { Component } from 'react'
import {Link} from "react-router-dom"


class Login extends Component {
    render() {
        return (
            <div className="main-login">
                <form class="login-form" method="POST" style={{marginBottom:"190px"}} id="login-form" action="index.html">
                        <div class="display-4">
                            Login to Your Account!
                        </div>
                        <div>
                            <div class="form-group mar">
                                <label for="exampleInputEmail1"><b>Email Address</b></label>
                                <input type="email" name="login-email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email"/>
                                
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1"><b>Password</b></label>
                                <input type="password" name="login-pass" class="form-control" placeholder="Enter Password"/>
                            </div>
                            <div>
                                <div class="float-left">
                                    <button type="submit" class="btn login-btn">Submit</button>
                                </div>
                                <div class="float-right">
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