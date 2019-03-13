import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./../bootstrap/bootstrapC.css"


class Nav extends Component {


    render() {

        return (

            <div>

                <nav className="navbar navbar-expand-lg navbar-light ">

                    <div className="col-md-2">
                        <Link to="/home"><h1 className="display-4 main-logo">Buy&Sell</h1></Link>
                    </div>
                    <div className="col-md-8 text-center">
                        <form className="form-inline  d-inline-flex">
                            
                                    <div class="form-group nav-search">
                                <select class="form-control region-selec" id="exampleFormControlSelect1">
                                    <option>Pakistan</option>
                                    <option>India</option>
                                    <option>America</option>
                                    <option>China</option>
                                    <option>Iran</option>
                                </select>
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                    <div class="input-group-append">
                                        <button class="btn login-btn search-btn" type="button">Search</button>
                                    </div>
                                    </div>

                            <div class="form-group nav-search">
                                <select class="form-control region-selec" id="exampleFormControlSelect1">
                                    <option>Categories</option>
                                    <option>Electronic</option>
                                    <option>Home Appliances</option>
                                    <option>Men's Wear</option>
                                    <option>Games</option>
                                </select>
                            </div>

                        </form>
                    </div>


                        <div className="col-md-2">
                            <div className="collapse navbar-collapse align-left" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">

                                    <li className="nav-item">
                                        <Link className="nav-link" to="./login">Log In</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/signup" className="nav-link">Signup</Link>
                                    </li>
                                </ul>

                            </div>
                        </div>
                </nav>
            </div>
                );
            }
        }
export default Nav;