import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { Dropdown } from "react-bootstrap";
import man from './../images/man.png'
import girl from './../images/girl.png'
import io from 'socket.io-client';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


class Onlogin extends Component {

    state = {
        isloggedin: true,
        socket: null,
    }


    componentDidMount() {
        if (!this.state.socket) {
            var socket = io('http://localhost:8000'
                // , {path: '/socket.io'}  
            );
            // this.setState({socket});
            this.props.dispatch({ type: "ADD_SOCKET", payload: socket })
        }
        let user = JSON.parse(localStorage.getItem('user'));
        socket.emit('new user', user._id);
    }

    logout = () => {
        this.props.socket.socket.disconnect();
        localStorage.removeItem('user');
        toast('You have been logged out!', {
            className:'logout-toast',
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            closeButton: false,
            // progress: undefined,
            });
    }
    render() {


        console.log(this.props)
        let user = JSON.parse(localStorage.getItem('user'));
        if (user === null) {
            user = {
                _id: this.props.user._id,
                name: this.props.user.name,
                email: this.props.user.email,
                password: this.props.user.password,
                DOB: this.props.user.DOB,
                phone: this.props.user.phone,
                gender: this.props.user.gender,
                country: this.props.user.country,
                date: this.props.user.date,
                address: this.props.user.address,
                url1: this.props.user.url1,
                favorites: this.props.user.favourites,
            };
            localStorage.setItem('user', JSON.stringify(user))
            console.log(user)
        }
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

       

        return (
            <div className="app">

                <Dropdown style={{ textAlign: 'center' }}>
                    <Dropdown.Toggle className="dropdown">
                        <img id="dropdown" className="user-image" height="60" width="60" alt="User" src={dp} />  </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item ><span>{user.name}</span><hr className="u-name-divider" /></Dropdown.Item>
                        <Dropdown.Item>
                            <span>
                                <Link className="black" to={"/details/"+user._id}>Profile</Link>
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item >
                            <span>
                                <Link className="black" to="/postad">Post Ad</Link>
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <span>
                                <Link className="black" to="/myAds">My Ads</Link>
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <span>
                                <Link className="black" to="/favoriteAds">Favorite Ads</Link>
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item >
                            <span>
                                <Link className="black" to="/" onClick={this.logout} >Log Out</Link>
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
    }
}

export default connect(mapStateToProps)(Onlogin);