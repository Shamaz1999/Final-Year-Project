import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <div>
                    <span className="terms"><span>Term &amp; Condition</span></span>
                    <span className="cookie"><span>Cookie Policy</span></span>
                    <span className="privacy"><span >Privacy Policy</span></span>
                </div>
                <div className="copyright">All Rights Reserved Copyright 2020&copy;</div>
            </footer>
        );
    }
}

export default Footer