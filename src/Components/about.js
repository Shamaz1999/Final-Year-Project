import React, { Component } from 'react';
import "./../bootstrap/bootstrapC.css"
import { Link } from 'react-router-dom'

class About extends Component {

  render() {
    window.scrollTo(0, 0);
    return (

      <div className="app text-color">
        <div className="jumbotron">
          <div className="shadow-lg ">
            <h1 className="display-3 text-center about-main-heading"><b>Buy &amp; Sell</b></h1>
          </div>
          <p className="about-sub-heading text-center">Makes you feel like shopping.</p>
          <div className="text-center">
            <Link className="btn cont-btn login-btn postAd-submit-btn" to="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="about-content text-center">
          <div className="about-mission tabs-shadow">
            <div className="m-heading">
              Our Mission
              </div>
            <h5 className="text-center">
              <div className=" about-detail ">
                The website we are offering has a very simple yet attractive interface for users who are new to E-Commerce. The
                features of this website include a lite design, account management (updating or deleting accounts), ad history
                , search for ads without craeting an account. There is also an administration contact page for any complains and suggestions. The main
                aim of this website is to make E-Commerce more reliable, user-friendly, to provide secure communication between buyer and seller and to attract more users to shift to
                E-commerce.
                  </div>
            </h5>
          </div>
          <div className="about-mission tabs-shadow">
            <div className="a-heading ">Our Aim</div>
            <span className="text-left" >
              <ul className="about-ul about-detail">
                <li>Provide easiast way of e-commerce.</li>
                <li>User create profile easily.</li>
                <li>Check profile detail.</li>
                <li>User Easily modify acount detail.</li>
                <li>Further detail please Contact us.</li>
                <Link className="btn login-btn postAd-submit-btn" to="/contact">Contact Us</Link>
              </ul>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default About