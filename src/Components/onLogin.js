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
        user:{
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

        fetch('http://localhost:8000/updateuser', option)
            .then(res => res.json())
            .then(data => {
                console.log('data recieved on onLogin')
                this.setState({ user: data })
                this.setState({isDataloaded: true})
                localStorage.setItem('user', JSON.stringify(data))
            })
            .catch(err => console.log(err))


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

        let user = JSON.parse(localStorage.getItem('user'));
       
        var dp = null;
        console.log(user.url1)
        if (user.url1 === "") {
            if (user.gender === "male") {
                dp = man
            }
            if (user.gender === "female") {
                dp = girl
            }
        }
        else { dp = user.url1 }

       
console.log(this.state)
        return (
            <div className="app text-color">

                <Dropdown style={{ textAlign: 'center' }} className="user-login-dropdown" >
                    <Dropdown.Toggle className="dropdown">
                        {this.state.isDataloaded 
                         ?
                         <span>
                             <img id="dropdown" className="user-image" height="50" width="50" alt="User" src={ dp} />
                             <span className=" user-login-dropdown-links-name">{user.name}</span>
                         </span>
                         :
                         <Skeleton/>}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {/* <Dropdown.Item >
                            <div className=" user-login-dropdown-links-name">{user.name}</div>
                        </Dropdown.Item> */}
                            {/* <hr className="u-name-divider" /> */}
                        <Dropdown.Item>
                            <span>
                                <Link className="user-login-dropdown-links" to={"/details/"+user._id}>
                                    <div className="user-login-dropdown-links-div">Profile</div>
                                </Link>
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item >
                            <span>
                                <Link className="user-login-dropdown-links" to="/postad">
                                    <div className="user-login-dropdown-links-div">Post Ad</div>
                                </Link>
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <span>
                                <Link className="user-login-dropdown-links" to="/myAds">
                                    <div className="user-login-dropdown-links-div" >My Ads</div>
                                </Link>
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <span>
                                <Link className="user-login-dropdown-links" to="/favoriteAds">
                                    <div className="user-login-dropdown-links-div" >Favorite Ads</div>
                                </Link>
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item >
                            <span>
                                <Link className="user-login-dropdown-links" to="/" onClick={this.logout} >
                                    <div className="user-login-dropdown-links-div" >Logout</div>
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
    }
}

export default connect(mapStateToProps)(Onlogin);