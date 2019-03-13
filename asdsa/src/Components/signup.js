import React, { Component } from 'react'


class Signup extends Component {
    render() {
        return (
            <div className='main-signup'>
                {/* <form>
                    <div class="row">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="First name" />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Last name" />
                        </div>
                        
                        <div class="form-group col-md-6">

                            <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                        </div>
                        <div class="form-group col-md-6">

                            <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                        </div>
                    </div>
                    <div class="form-group">

                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div class="form-group">

                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">

                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="form-group col-md-4">

                            <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="inputZip">Zip</label>
                            <input type="text" class="form-control" id="inputZip" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                            <label class="form-check-label" for="gridCheck">
                                Check me out
      </label>
                        </div>
                    </div>
                </form> */}
                <form class="signup-form hidden" id="signup-form" method="POST" action="index.html">
                        <div class="display-4">
                            Create Your Account!
                        </div>
                        <div>

                            <div class="form-group mar">
                                <label for="exampleInputEmail1"><b>Full Name</b></label>
                                <input type="text" name="full-name" class="form-control" aria-describedby="emailHelp" placeholder="Enter your name"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1"><b>Email Address</b></label>
                                <input type="email" name="signup-email" class="form-control" aria-describedby="emailHelp" placeholder="Enter your email"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1"><b>Password</b></label>
                                <input type="password" name="signup-email" class="form-control" aria-describedby="emailHelp" placeholder="Enter your password"/>        
                            </div>
                            <div>
                                <p><b>Gender</b></p>
                                <div class="radio">
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="customRadioInline1" name="gender" class="custom-control-input"/>
                                    <label class="custom-control-label" for="customRadioInline1">Male</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="customRadioInline2" name="gender" class="custom-control-input"/>
                                    <label class="custom-control-label" for="customRadioInline2">Female</label>
                                </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1"><b>Date of Birth</b></label>
                                <input type="date" name="signup-DOB" class="form-control" aria-describedby="emailHelp" placeholder="Enter your date of bitrh"/>        
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1"><b>Address</b></label>
                                <input type="text" name="signup-address" class="form-control" aria-describedby="emailHelp" placeholder="Enter your address"/>        
                            </div>
                            <div>
                                <div class="float-left">
                                    <button type="submit" class="btn login-btn">Submit</button>
                                </div>
                                <div class="float-right">
                                    <p id="swap1">Already have an account! Sign in now.</p>
                                </div>
                            </div>

                        </div>

                    </form>
            </div>
        );
    }
}

export default Signup;