import React, { Component } from 'react'
import {Link} from "react-router-dom"


class Login extends Component {
    render() {
        return (
            <div className="main-login">

                {/* <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form> */}
                <form class="login-form" method="POST" id="login-form" action="index.html">
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
                                    <Link to="/signup">Don't have an account! Create one now.</Link>
                                </div>
                            </div>
                        </div>
                    </form>
            </div>
        );
    }
}
export default Login;