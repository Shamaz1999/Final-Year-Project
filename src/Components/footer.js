import React, { Component } from 'react'; 

class Footer extends Component {

    render(){
        return(
            <footer className="footer">
        <span className="terms"><a href="Javascript:void(0)">Term & Condition</a></span>
        <span className="cookie"><a href="Javascript:void(0)">Cookie Policy</a></span>
        <span className="privacy"><a href="Javascript:void(0)">Privacy Policy</a></span>
        <div className="copyright">All Rights Reserved Copyright 2019&copy;</div>
    </footer>
        );
    }
}

export default Footer