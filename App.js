import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Content from './Components/content'
import Nav from './Components/navbar';
import Footer from './Components/footer'
import Login from './Components/login'
import Signup from './Components/signup'
import FootNav from './Components/footnav'
import About from './Components/about'
import Contact from './Components/contact'
import Details from './Components/details'
import MyAds from './Components/myAds'
import Ad from './Components/currentAd'
import Seller from './Components/sellerprofile'
import Post from './Components/postAd'
// import {Provider} from 'react-redux'
// import store from './redux'
import Chat from './Components/chat';
import favAds from './Components/favAds';
import editAd from './Components/editAd';
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
    return (
      // <Provider store={store}>
      <BrowserRouter>

        <div className="background-class">
          <Nav />
          <Switch>
            
            <Route path='/sellerProfile/:sellerId' component={Seller} />
            <Route path='/ad/:adId' component={Ad} />
            <Route path='/myads/:adId/edit' component={editAd} />
            <Route path='/myads' component={MyAds} />
            <Route path='/favoriteAds' component={favAds} />
            <Route path='/postad' component={Post} />
            <Route path='/:sellerId/chat' component={Chat} />
            <Route path='/chat' component={Chat} />
            <Route path='/details/:userId' component={Details} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            <Route path={ user ? '/' : '/login'} component={user ? Content : Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/' component={Content} />

          </Switch>
          <FootNav />
          <ToastContainer/>
          <Footer />
        </div>

      </BrowserRouter>
      // </Provider>
    );
  }
}
const mapStateToProps=(store)=>({

})
export default connect(mapStateToProps)(App);
