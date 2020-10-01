import React, { Component } from 'react';
import "./../bootstrap/bootstrapC.css"
import { Link, withRouter } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

class FootNav extends Component {
    state={
        category: '',
    }
    render() {
         //Seach ads by category 
    const categoryAds = (category) => {
        this.setState({category:category},()=>{
            localStorage.removeItem('sa');
            var option = {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            fetch('/categoryads', option)
                .then(res => res.json())
                .then(data => {
                    let sa = JSON.parse(localStorage.getItem('sa'))
                    sa = data;
                    localStorage.setItem('sa', JSON.stringify(sa))
                    this.props.history.push('/')
                })
                .catch(err => { console.log(err) })
        })
    }




        let user = JSON.parse(localStorage.getItem('user'));

        return (
            <div className="footnav-container">
                <div className="foot-nav">
                    <div>
                        <div className="footnav-cols-container">
                            <div>
                                <ul className="foot-nav-ul">
                                    <li className="col-heading med-headings">Categories</li>
                                    <li className="col-items" onClick={()=>{categoryAds("mobiles")}}><span className="footnav-social-links">Mobiles</span></li>
                                    <li className="col-items" onClick={()=>{categoryAds("vehicles")}} category="vehicles"><span className="footnav-social-links">Vehicles</span></li>
                                    <li className="col-items" onClick={()=>{categoryAds("clothing")}} category="clothing"><span className="footnav-social-links">Clothing</span></li>
                                    <li className="col-items" onClick={()=>{categoryAds("services")}} category="services"><span className="footnav-social-links">Services</span></li>
                                    <li className="col-items" onClick={()=>{categoryAds("furniture")}} category="furniture"><span className="footnav-social-links">Furniture</span></li>
                                    <li className="col-items" onClick={()=>{categoryAds("bikes")}} category="bikes"><span className="footnav-social-links">Bikes</span></li>
                                </ul>
                            </div>
                            <div >
                                <ul className="foot-nav-ul">
                                    <li className="col-heading med-headings">Quick Links</li>
                                    <li className="col-items"><Link className="footnav-social-links" to="/" >Home</Link></li>
                                    {user ? <LoggedIn /> : <NotLoggedIn />}
                                    <li className="col-items"><Link className="footnav-social-links" to="/contact">Contact Us</Link></li>
                                    <li className="col-items"><Link className="footnav-social-links" to="/about">About</Link></li>
                                </ul>
                            </div>
                            <div>
                                <ul className="foot-nav-ul">
                                    <li className="col-heading med-headings">Social Contacts</li>
                                    <li className="col-items"><span className="footnav-social-links" ><FontAwesome className="social-logos" name="facebook" />Facebook Profile</span></li>
                                    <li className="col-items"><span className="footnav-social-links" ><FontAwesome className="social-logos" name="twitter" />Twitter Profile</span></li>
                                    <li className="col-items"><span className="footnav-social-links" ><FontAwesome className="social-logos" name="google-plus" />Google Plus Profile</span></li>
                                    <li className="col-items"><span className="footnav-social-links" ><FontAwesome className="social-logos" name="instagram" />Instagram Profile</span></li>
                                    <li className="col-items"><span className="footnav-social-links" >Our Communuity</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

class NotLoggedIn extends Component {
    render() {
        return <div>
            <li className="col-items"><Link className="footnav-social-links" to="/login">Login</Link></li>
            <li className="col-items"><Link className="footnav-social-links" to="/signup">Signup</Link></li>
        </div>
    }
}
class LoggedIn extends Component {
    render() {
        return <div>
            <li className="col-items"><Link className="footnav-social-links" to="/postad">Post Ad</Link></li>
            <li className="col-items"><Link className="footnav-social-links" to="/myads">My Ads</Link></li>
            <li className="col-items"><Link className="footnav-social-links" to="/favoriteAds">Favorites</Link></li>
        </div>
    }
}


export default withRouter(FootNav)

