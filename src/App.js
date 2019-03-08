import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './redux'
import { Provider } from 'react-redux';
import Content from './Components/content'
import Nav from './Components/navbar';
import Footer from './Components/footer'
import Login from './Components/login'
import Signup from './Components/signup'
import FootNav from './Components/content - Copy'
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        
          <BrowserRouter>
  <div>
    
          <Nav/>
                <Switch>
  
                  <Route path='/login' component={Login} />
                  <Route path='/signup' component={Signup}/>
                  <Route path='/' component={Content}/>
                
                </Switch>
          <FootNav/>
          <Footer/>
  </div>

          </BrowserRouter>
          </Provider>

    );
  }
}

export default App;
