import React, { Component } from 'react'; 
import "./../bootstrap/bootstrapC.css"
import $ from 'jquery'
import {Link} from 'react-router-dom'

class FootNav extends Component {    
   
    render(){
        let im = {
            height: "100%",
            width: "80%"
        }
        let a ={
            color: "white",
            textDecoration: "none!important",
          }
            
return(

    <div className="App">
        <div class="foot-nav">
        <div class="container">
            <div class="row">   
                <div class="col-md-4">
                    <ul class="foot-nav-ul">
                        <li class="col-heading med-headings">Popular Categories</li>
                        <li class="col-items">Mobile Phone</li>
                        <li class="col-items">Cars</li>
                        <li class="col-items">Jobs</li>
                        <li class="col-items">Men's Wear</li>
                        <li class="col-items">Services</li>
                        <li class="col-items">Credit and Debit Records</li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <ul class="foot-nav-ul">
                        <li class="col-heading med-headings">Quick Links</li>
                        <li class="col-items"><Link style={a} to="/" href="index.html">Home</Link></li>
                        <li class="col-items"><Link style={a} to="/details">Account Details</Link></li>
                        <li class="col-items"><Link style={a} to="/contact">Contact Us</Link></li>
                        <li class="col-items"><Link style={a} to="/about">About</Link></li>
                    </ul>
                </div>
                <div class="col-md-4">
                        <ul class="foot-nav-ul">
                            <li class="col-heading med-headings">Social Contacts</li>
                            <li class="col-items"><a style={a} href="Javascript:void(0)"><img  class="social-logos" src="images/fb.png" alt="facebook"/>Facebook Profile</a></li>
                            <li class="col-items"><a style={a} href="Javascript:void(0)"><img class="social-logos" src="images/twitter.png" alt="twitter"/>Twitter Profile</a></li>
                            <li class="col-items"><a style={a} href="Javascript:void(0)"><img class="social-logos" src="images/g+.png" alt="google plus"/>Google Plus Profile</a></li>
                            <li class="col-items"><a style={a} href="Javascript:void(0)"><img class="social-logos" src="images/insta.png" alt="instagram"/>Instagram Profile</a></li>
                            <li class="col-items"><a style={a} href="Javascript:void(0)">Our Communuity</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
</div>



);

}
}
export default FootNav