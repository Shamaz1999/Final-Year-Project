import React, { Component } from 'react';
import "./../bootstrap/bootstrapC.css"
import { Link } from 'react-router-dom'

class About extends Component {

  render() {
    window.scrollTo(0, 0);
    return (

      <div className="app">
        <div className="jumbotron">
          <div className="shadow-lg ">
            <h1 className="display-3 text-center big-headings"><b>Buy &amp; Sell</b></h1>
          </div>
          <p className="heading-3 text-center">Makes you feel like shopping.</p>
          {/* <p class="about-detail">“Everyday is a bank account, and time is our currency. No one is rich, no one is poor, we've got 24 hours each. It
      is well enough that people of the nation do not understand our banking and monetary system, for if they did, we believe
      there would be a revolution before tomorrow morning.”</p> */}
          <div className="text-center">
            <Link className="btn cont-btn login-btn" to="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="about-content">
         
          <div className="about-content text-center">
            <div className="about-mission">
              <div className="m-heading">
                Our Mission
              </div>
              <h5 className="text-center">
                <div className="container about-detail ">
                  The website we are offering has a very simple yet attractive interface for users who are new to E-Commerce. The
                  features of this website include a lite design, account management (updating or deleting accounts), ad history
                  , search for ads without craeting an account. There is also an administration contact page for any complains and suggestions. The main
                  aim of this website is to make E-Commerce more reliable, user-friendly and to attract more users to shift to
                  E-commerce.
                  </div>
              </h5>
            </div>
            <div className="about-mission ">
              <div className="a-heading ">Our Aim</div>
               <span className="text-left" style={{margin:'10px auto'}}>
                  <ul className="about-ul about-detail">
                    <li>Provide easiast way of e-commerce.</li>
                    <li>User create profile easily.</li>
                    <li>Check profile detail.</li>
                    <li>User Easily modify acount detail.</li>
                    <li>Furture detail please Contact us.</li>
                    <Link class="btn login-btn" to="/contact">Contact Us</Link>
                  </ul>
               </span>
              </div>
        </div>
          <marquee behavior="scroll" height="50%" direction="right">
            <p className="marquee-text">Always Meet the buyer or seller at a crowded place and check the item before you pay</p>
          </marquee>
        </div>

      </div>
    );
  }
}

export default About