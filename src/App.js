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
import {Provider} from 'react-redux'
import store from './redux'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>

        <div>
          <Nav />
          <Switch>
            
            <Route path='/ad/:adsd/sellerProfile' component={Seller} />
            <Route path='/ad/:adId' component={Ad} />
            <Route path='/myads' component={MyAds} />
            <Route path='/postad' component={Post} />
            <Route path='/details' component={Details} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/' component={Content} />

          </Switch>
          <FootNav />
          <Footer />
        </div>

      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
