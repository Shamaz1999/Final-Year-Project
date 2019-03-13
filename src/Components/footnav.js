import React, { Component } from 'react'; 
import "./../bootstrap/bootstrapC.css"
import {Link} from 'react-router-dom'
import fb from './../images/fb.png'
import twitter from './../images/twitter.png'
import gplus from './../images/g+.png'
import insta from './../images/insta.png'

class FootNav extends Component {    
   
    render(){
       
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
                        <li class="col-items"><Link style={a} to="/details">Profile</Link></li>
                        <li class="col-items"><Link style={a} to="/contact">Contact Us</Link></li>
                        <li class="col-items"><Link style={a} to="/about">About</Link></li>
                    </ul>
                </div>
                <div class="col-md-4">
                        <ul class="foot-nav-ul">
                            <li class="col-heading med-headings">Social Contacts</li>
                            <li class="col-items"><a style={a} ><img  class="social-logos" src={fb} alt="facebook"/>Facebook Profile</a></li>
                            <li class="col-items"><a style={a} ><img class="social-logos" src={twitter} alt="twitter"/>Twitter Profile</a></li>
                            <li class="col-items"><a style={a} ><img class="social-logos" src={gplus} alt="google plus"/>Google Plus Profile</a></li>
                            <li class="col-items"><a style={a} ><img class="social-logos" src={insta} alt="instagram"/>Instagram Profile</a></li>
                            <li class="col-items"><a style={a} >Our Communuity</a></li>
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