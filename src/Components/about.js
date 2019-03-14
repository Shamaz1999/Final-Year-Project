import React, { Component } from 'react'; 
import "./../bootstrap/bootstrapC.css"
import { Link } from 'react-router-dom'

class About extends Component {

    render(){
        return(

            <div className="app">
            <div class="jumbotron">
    <div class="shadow-lg ">
      <h1 class="display-3 big-headings"><b>Buy & Sell</b></h1>
    </div>
    <p class="heading-3 med-headings">Makes you feel like shopping.</p>
    <p class="about-detail">“Everyday is a bank account, and time is our currency. No one is rich, no one is poor, we've got 24 hours each. It
      is well enough that people of the nation do not understand our banking and monetary system, for if they did, we believe
      there would be a revolution before tomorrow morning.”</p>
      <Link to="/contact">
        <button class="btn cont-btn login-btn" role="button">Contact Us</button>
      </Link>
  </div>
  <div class="about-content">
    <table class="about-table" cellspacing="10px" cellpadding="10px">
      <tr>
        <td>
          <div class="card" style={{width: "19rem"}}>
          <div className='qw'>
            </div>
            <img src="images/ca3.jpg" class="card-img-top" width="100px;" height="150px"/>
            <div class="card-body">
              <p class="card-text">At its core, banking is not simply about profit, but about personal relationships.</p>
            </div>
          </div>
        </td>
        <td>
          <div class="card" style={{width: "19rem"}}>
          <div className='qw'>
            </div>
            <img src="images/ca2.jpg" class="card-img-top" width="100px;" height="150px"/>
            <div class="card-body">
              <p class="card-text">The growth that we are targeting for our bank is in line with the banking industry.</p>
            </div>
          </div>
        </td>
        <td>
          <div class="card" style={{width: "19rem"}}>
          <div className='qw'>
            </div>
            <img src="images/ca1.jpg" class="card-img-top" width="100px;" height="150px"/>
            <div class="card-body">
              <p class="card-text">Citizen bank gives you a glimpse into what makes companies succeed and what makes companies fail.</p>
            </div>
          </div>
        </td>
        <td>
          <div class="card" style={{width: "19rem"}}>
          <div className='qw'>
            </div>
            <img src="images/ca4.jpg" class="card-img-top" alt="..." width="150px;" height="150px"/>
            <div class="card-body">
              <p class="card-text">Good bankers, like good tea, can only be appreciated when they are in hot water.</p>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="card" style={{width: "19rem"}}>
          <div className='qw'>
            </div>
            <img src="images/ca4.jpg" class="card-img-top" width="100px;" height="150px"/>
            <div class="card-body">
              <p class="card-text">Citizens Bank gives you a glimpse into what makes companies succeed and what makes companies fail.</p>
            </div>
          </div>
        </td>
        <td>
          <div class="card" style={{width: "19rem"}}>
          <div className='qw'>
            </div>
            <img src="images/ca1.jpg" class="card-img-top" width="100px;" height="150px"/>
            <div class="card-body">
              <p class="card-text">Business and life are like a bank account-you can’t take out more than you put in.</p>
            </div>
          </div>
        </td>
        <td>
          <div class="card" style={{width: "19rem"}}>
          <div className='qw'>
            </div>
            <img src="images/ca3.jpg" class="card-img-top" width="100px;" height="150px"/>
            <div class="card-body">
              <p class="card-text">Being bank director is like being a pilot of an aircraft – it’s years of boredom and seconds of terror.</p>
            </div>
          </div>
        </td>
        <td>
          <div class="card" style={{width: "19rem"}}>
            <div className='qw'>
            </div>
              <img src="images/ca2.jpg" class="card-img-top" alt="..." width="100px;" height="150px"/>
            
            <div class="card-body">
              <p class="card-text">A Citizens bank is a place that will lend you money if you can prove you don't need it.</p>
            </div>
          </div>
        </td>

      </tr>

    </table>
<div class="row about-footNav">
  <div class="col-md-8">
        <div class="section">
            <h1 class="text-center med-headings sect-heading">
              Our Mission
            </h1>
            <h5 class="text-center">
                <div class="container about-detail ">
                  The website we are offering has a very simple yet attractive interface for users who are new to E-Commerce. The
                  features of this website include a lite design, account management (updating or deleting accounts), ad history
                  , search for ads without craeting an account. There is also an administration contact page for any complains and suggestions. The main
                  aim of this website is to make E-Commerce more reliable, user-friendly and to attract more users to shift to
                  E-commerce.
                </div>
            </h5>
        </div>
   </div>
        <div class="col-md-4">
          <div class="aside">
            <h1 class="text-center med-headings sect-heading">Our Aim</h1>
            <ul class="aim-ul about-detail" type="square">
              <li>Provide easiast way of e-commerce.</li>
              <li>User create profile easily.</li>
              <li>Check profile detail.</li>
              <li>User Easily modify acount detail.</li>
              <li>Furture detail please Contact us.</li>
              <Link to="/contact">
                <button class="btn login-btn" role="button">Contact Us</button>
              </Link>
            </ul>
            
          </div>
        </div>
        <marquee behavior="scroll"height="50%" direction="right">
        <p className="marquee-text">Always Meet the buyer or seller at a crowded place and check the item before you pay</p>
          {/* <img src="images/b2.jpg" style={{marginLeft: "10px"}} width="200px" height="100px"/> */}
          {/* <img src="images/b1.jpg" style={{marginLeft: "10px"}} width="200px" height="100px"/> */}
          {/* <img src="images/b3.jpg" style={{marginLeft: "10px"}} width="200px" height="100px"/> */}
          {/* <img src="images/b4.jpg" style={{marginLeft: "10px"}} width="200px" height="100px"/> */}
          {/* <img src="images/b5.jpg" style={{marginLeft: "10px"}} width="200px" height="100px"/> */}
          {/* <img src="images/b6.jpg" style={{marginLeft: "10px"}} width="200px" height="100px"/> */}
          {/* <img src="images/b7.jpg" style={{marginLeft: "10px"}} width="200px" height="100px"/> */}
          
        </marquee>
  </div>
            </div>
            </div>
        );
    }
}

export default About