import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { Dropdown } from "react-bootstrap";
import man from './../images/man.png'
import girl from './../images/girl.png'
import io from 'socket.io-client';
import { toast } from 'react-toastify';
import Skeleton from 'react-loading-skeleton'
import 'react-toastify/dist/ReactToastify.min.css';


class Onlogin extends Component {

    state = {
        isloggedin: true,
        socket: null,
        isDataloaded: false,
        theme: localStorage.getItem('theme'),
        user: {
            _id: JSON.parse(localStorage.getItem('user'))._id,
        }
    }


    componentDidMount() {

        var option = {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch('/updateuser', option)
            .then(res => res.json())
            .then(data => {
                this.setState({ user: data })
                this.setState({ isDataloaded: true })
                localStorage.setItem('user', JSON.stringify(data))
            })
            .catch(err => console.log(err))


        if (!this.state.socket) {
            var socket = io('http://localhost:8000'
            );
            this.props.dispatch({ type: "ADD_SOCKET", payload: socket })
        }
        let user = JSON.parse(localStorage.getItem('user'));
        socket.emit('new user', user._id);
        socket.on("NEW_MESSAGE", (msg) => {
            toast('You have a new message!', {
                className: 'logout-toast',
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                closeButton: false,
            });
        })
    }

    logout = () => {
        this.props.socket.socket.disconnect();
        localStorage.removeItem('user');
        this.setState({ isloggedin: false })
        toast('You have been logged out!', {
            className: 'logout-toast',
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            closeButton: false,
        });
    }
    render() {

        let user = JSON.parse(localStorage.getItem('user'));

        var dp = null;
        if (user.url1 === "") {
            if (user.gender === "male") {
                dp = man
            }
            if (user.gender === "female") {
                dp = girl
            }
        }
        else { dp = user.url1 }

        const handleTheme = (e) => {
            if (e.target.checked) {
                this.props.dispatch({ type: "theme_change", payload: 'dark' })
                document.documentElement.setAttribute('data-theme', "dark");
                localStorage.setItem('theme', "dark");
            } else {
                this.props.dispatch({ type: "theme_change", payload: 'normal' })
                document.documentElement.setAttribute('data-theme', "normal");
                localStorage.setItem('theme', "normal")
            }
        }
        const { theme } = this.props.theme;
        return (
            <div className="app text-color">
                <Dropdown style={{ textAlign: 'center' }} className="user-login-dropdown" >
                    <Dropdown.Toggle className="dropdown">
                        {this.state.isDataloaded
                            ?
                            <span>
                                <img id="dropdown" className="user-image" height="50" width="50" alt="User" src={dp} />
                                <span className=" user-login-dropdown-links-name">{this.state.user.firstName}</span>
                            </span>
                            :
                            <Skeleton circle={true} height={40} width={40} />}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item className="no-hover">
                            <span>
                                <Link className="user-login-dropdown-links" to={"/home/details/" + user._id}>
                                    <div className="user-login-dropdown-links-div user-login-dropdown-links">Profile</div>
                                </Link>
                            </span>
                        </Dropdown.Item>
                        <span>
                            <div className="user-login-dropdown-links-div user-login-dropdown-links">
                                <label className="no-margin" htmlFor="details-switcher">Dark Mode &nbsp;</label>
                                <label className="switch details-switch">
                                    <input id="details-switcher" onChange={(e) => handleTheme(e)} type="checkbox" checked={theme === "dark"} />
                                    <span className="slider details-slider round"></span>
                                </label>
                            </div>
                        </span>
                        <Dropdown.Item className="no-hover" >
                            <span>
                                <Link className="user-login-dropdown-links" to="/home/postad">
                                    <div className="user-login-dropdown-links-div user-login-dropdown-links">Post Ad</div>
                                </Link>
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item className="no-hover" >
                            <span>
                                <Link className="user-login-dropdown-links" to="/home/chat">
                                    <div className="user-login-dropdown-links-div user-login-dropdown-links">Chats</div>
                                </Link>
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item className="no-hover">
                            <span>
                                <Link className="user-login-dropdown-links" to="/home/myAds">
                                    <div className="user-login-dropdown-links-div user-login-dropdown-links" >My Ads</div>
                                </Link>
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item className="no-hover">
                            <span>
                                <Link className="user-login-dropdown-links" to="/home/favoriteAds">
                                    <div className="user-login-dropdown-links-div user-login-dropdown-links" >Favorite Ads</div>
                                </Link>
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item className="no-hover" >
                            <span>
                                <Link className="user-login-dropdown-links" to="/" onClick={this.logout} >
                                    <div className="user-login-dropdown-links-div user-login-dropdown-links" >Logout</div>
                                </Link>
                            </span>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        );
    }
}
const mapStateToProps = (store) => {
    return {
        user: store.userReducer,
        socket: store.socket,
        theme: store.theme,
    }
}

export default connect(mapStateToProps)(Onlogin);