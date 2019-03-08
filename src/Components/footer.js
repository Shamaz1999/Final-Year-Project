import React, { Component } from 'react'; 
import {connect} from 'react-redux'
// import {connect} from 'react-redux';
// import add from '../action';

class Footer extends Component {

    render(){
        return(
            <footer class="footer">
        <span class="terms"><a href="Javascript:void(0)">Term & Condition</a></span>
        <span class="cookie"><a href="Javascript:void(0)">Cookie Policy</a></span>
        <span class="privacy"><a href="Javascript:void(0)">Privacy Policy</a></span>
        <div class="copyright">All Rights Reserved Copyright 2019&copy;</div>
    </footer>
        );
    }
}

export default Footer