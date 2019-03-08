import React, { Component } from 'react'; 


class Header extends Component {
    render(){
        return(
            <nav className="main-nav">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </nav>
        );
    }
}
export default Header