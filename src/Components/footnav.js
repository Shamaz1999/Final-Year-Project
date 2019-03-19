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
        <div className="foot-nav">
        <div className="container">
            <div className="row">   
                <div className="col-md-4">
                    <ul className="foot-nav-ul">
                        <li className="col-heading med-headings">Popular Categories</li>
                        <li className="col-items">Mobile Phone</li>
                        <li className="col-items">Cars</li>
                        <li className="col-items">Jobs</li>
                        <li className="col-items">Men's Wear</li>
                        <li className="col-items">Services</li>
                        <li className="col-items">Bikes</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <ul className="foot-nav-ul">
                        <li className="col-heading med-headings">Quick Links</li>
                        <li className="col-items"><Link style={a} to="/" href="index.html">Home</Link></li>
                        <li className="col-items"><Link style={a} to="/login">Login</Link></li>
                        <li className="col-items"><Link style={a} to="/signup">Signup</Link></li>
                        <li className="col-items"><Link style={a} to="/contact">Contact Us</Link></li>
                        <li className="col-items"><Link style={a} to="/about">About</Link></li>
                    </ul>
                </div>
                <div className="col-md-4">
                        <ul className="foot-nav-ul">
                            <li className="col-heading med-headings">Social Contacts</li>
                            <li className="col-items"><a style={a} ><img  className="social-logos" src={fb} alt="facebook"/>Facebook Profile</a></li>
                            <li className="col-items"><a style={a} ><img className="social-logos" src={twitter} alt="twitter"/>Twitter Profile</a></li>
                            <li className="col-items"><a style={a} ><img className="social-logos" src={gplus} alt="google plus"/>Google Plus Profile</a></li>
                            <li className="col-items"><a style={a} ><img className="social-logos" src={insta} alt="instagram"/>Instagram Profile</a></li>
                            <li className="col-items"><a style={a} >Our Communuity</a></li>
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