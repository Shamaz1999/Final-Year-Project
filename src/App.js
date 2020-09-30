import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Content from './Components/content'
import Index from './Components/Index';
import Nav from './Components/navbar';
import Footer from './Components/footer'
import Login from './Components/login'
import Signup from './Components/signup'
import FootNav from './Components/footnav'
import About from './Components/about'
import Contact from './Components/contact'
import Ad from './Components/currentAd'
import Seller from './Components/sellerprofile'
import { ToastContainer } from 'react-toastify';
import {connect } from 'react-redux';

class App extends Component {

  componentDidMount(){
    var theme = localStorage.getItem('theme')
    if(theme){
      document.documentElement.setAttribute("data-theme", theme);
      this.props.dispatch({type:"theme_change",payload:theme})
    }
    else{
      localStorage.setItem('theme', 'normal')
      document.documentElement.setAttribute("data-theme", 'normal');
      this.props.dispatch({type:"theme_change",payload:'normal'})

    }
  }

  render() {
    const user = JSON.parse(localStorage.getItem('user'))
    function PrivateRoute (props){
      return(
        <Route
          path={props.path}
          render = { (properties) => {
            if(!user) return <Redirect to="/login" />
            return <props.component {...properties} />
          }
          }
        />
      )
    }

    return (
      <BrowserRouter>
        <div className="background-class">
          <Nav />
          <Switch>  
            <PrivateRoute path="/home" component={Index} />
            <Route path='/sellerProfile/:sellerId' component={Seller} />
            <Route path='/ad/:adId' component={Ad} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/' component={Content} />
          </Switch>
          <FootNav />
          <ToastContainer/>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps=(store)=>({
})
export default connect(mapStateToProps)(App);
