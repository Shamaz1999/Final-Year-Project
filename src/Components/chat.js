import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import { MessageList, ChatList } from 'react-chat-elements'
import 'react-chat-elements/dist/main.css';
import FontAwesome from 'react-fontawesome';
import { toast } from 'react-toastify'
import Skeleton from 'react-loading-skeleton';
import ScrollToBottom from 'react-scroll-to-bottom';

class Chat extends Component {

    state = {
        user: JSON.parse(localStorage.getItem('user')),
        message: '',
        msgList: [],
        chat: [],
        sellerId: this.props.match.params.sellerId,
        chatFetched: false,
        room: '',
        rooms: [],
        fetchedRoom: false,
        eventCreated: false,
        showChatbox: false,
        name: null,
    }

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));


        // Getting all the rooms
        fetch('/get-rooms/' + this.state.user._id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const rooms = data.map(room => {
                    const person = room.person1._id === user._id ? "person2" : "person1";
                    return {
                        avatar: room[person].url1,
                        alt: room[person].firstName,
                        title: room[person].firstName + " " + room[person].lastName,
                        date: false,
                        data: room[person],
                        _id: room._id,
                        subtitle: room[person]._id,
                        className: 'chat-app-chat-list'
                    }
                })
                this.setState({ rooms });
            })
            .catch(err => { console.log(err) })

    }


    handleSend = () => {

        if (this.state.msg === '') {
            toast('Please type something before sending!', {
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
        else {
            const { message, room, sellerId } = this.state;
            this.setState({ message: "" });
            const newMsg = {
                position: 'right',
                type: 'text',
                text: message,
                date: new Date(),
            }
            this.setState({ chat: [...this.state.chat, newMsg] })

            var option = {
                method: 'POST',
                body: JSON.stringify({ message, room, sender: this.state.user._id, sellerId }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            fetch('/message-sent', option)
                .then(res => res.json())
                .then(data => {
                    this.setState({ chatFetched: true })
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
    handleKeyUp = e => {
        if (e.keyCode === 13) {
            this.handleSend();
        }
    }


    render() {

        if (!this.state.chatFetched && this.state.room) {
            // Getting the room's chat
            this.setState({ chatFetched: true })
            fetch('/get-chat/' + this.state.room._id)
                .then(res => res.json())
                .then(data => {
                    const msgs = data.map(msg => {
                        return {
                            position: user._id === msg.sender ? 'right' : 'left',
                            type: 'text',
                            text: msg.message,
                            date: new Date(msg.date),
                        }
                    })
                    console.log(msgs);
                    this.setState({ chat: msgs })
                    this.setState({ chatFetched: true })
                })
                .catch(err => { console.log(err) })
        }

        if (!this.state.fetchedRoom) {
            this.setState({ fetchedRoom: true });
            //Getting the room with the seller
            fetch('/get-room/' + this.state.user._id + "/" + this.props.match.params.sellerId)
                .then(res => res.json())
                .then(data => {
                    const person = data.person1._id === this.state.user._id ? "person2" : "person1";
                    const room1 = {
                        avatar: data[person].url1,
                        alt: data[person].firstName,
                        title: data[person].firstName + " " + data[person].lastName,
                        date: false,
                        data: data[person],
                        _id: data._id,
                        subtitle: data[person]._id,
                        className: 'chat-app-chat-list'
                    }
                    this.setState({
                        rooms: [...this.state.rooms.map(room => {
                            if (room._id !== data._id) {
                                return room;
                            }
                            return room1;
                        })]
                    })

                    this.setState({ room: data });
                    if (data) {
                        const person = data.person1._id === this.state.user._id ? "person2" : "person1";
                        this.setState({ name: data[person] })
                    }
                })
                .catch(err => { console.log(err) })
        }


        const openChat = (e) => {
            console.log(e);
            this.setState({ chat: [] });
            this.props.history.push(`/home/${e.data._id}/chat`)
            this.setState({ room: null });
            this.setState({ fetchedRoom: false });
            this.setState({ chatFetched: false });
        }
        const user = JSON.parse(localStorage.getItem('user'))
        if (this.props.socket.socket && !this.state.eventCreated) {
            this.setState({ eventCreated: true })
            const socket = this.props.socket.socket;
            socket.on("NEW_MESSAGE", (msg) => {
                const newMsg = {
                    position: 'left',
                    type: 'text',
                    text: msg.message,
                    date: new Date(),
                }
                this.setState({ chat: [...this.state.chat, newMsg] })
            })
        }

        return (
            <div className="chat-app-container text-color">
                <div className="chat-app-heading-container">
                    <h2 className="message" >Chat with the Seller</h2>
                </div>
                <div className="chat-app-wrapper">
                    <div className="chat-app-left-col tabs-shadow">
                        <div className="chat-lists-container ">
                            <div className="chat-lists-wrapper">
                                {this.state.rooms
                                    ?
                                    <div>
                                        <ChatList className='chat-lists' onClick={e => openChat(e)} dataSource={this.state.rooms} />
                                    </div>
                                    :
                                    <div>
                                        <div className="d-flex" style={{ flexDirection: "row", margin: '5px 0 15px 0' }}>
                                            <span> <Skeleton circle={true} height={40} width={40} /></span>
                                            <div style={{ borderBottom: '1px solid white', width: '100%' }} className="pt-2 ml-2 mr-3" >
                                                <Skeleton width={150} />
                                            </div>
                                        </div>
                                        <div className="d-flex" style={{ flexDirection: "row", margin: '5px 0 15px 0' }}>
                                            <span> <Skeleton circle={true} height={40} width={40} /></span>
                                            <div style={{ borderBottom: '1px solid white', width: '100%' }} className="pt-2 ml-2 mr-3" >
                                                <Skeleton width={150} />
                                            </div>
                                        </div>
                                        <div className="d-flex" style={{ flexDirection: "row", margin: '5px 0 15px 0' }}>
                                            <span> <Skeleton circle={true} height={40} width={40} /></span>
                                            <div style={{ borderBottom: '1px solid white', width: '100%' }} className="pt-2 ml-2 mr-3" >
                                                <Skeleton width={150} />
                                            </div>
                                        </div>
                                        <div className="d-flex" style={{ flexDirection: "row", margin: '5px 0 15px 0' }}>
                                            <span> <Skeleton circle={true} height={40} width={40} /></span>
                                            <div style={{ borderBottom: '1px solid white', width: '100%' }} className="pt-2 ml-2 mr-3" >
                                                <Skeleton width={150} />
                                            </div>
                                        </div>
                                        <div className="d-flex" style={{ flexDirection: "row", margin: '5px 0 15px 0' }}>
                                            <span> <Skeleton circle={true} height={40} width={40} /></span>
                                            <div style={{ borderBottom: '1px solid white', width: '100%' }} className="pt-2 ml-2 mr-3" >
                                                <Skeleton width={150} />
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="chat-app-right-col">
                        <div className="text-center">
                            {this.state.name
                                ?
                                <div className="chatbox-wrapper">
                                    <div className="chatbox-header-menu-header">
                                        <div>{this.state.name.firstName} {this.state.name.lastName}</div>
                                        <div>
                                            <button className="postAd-submit-btn chat-app-header-btn no-outline no-border">
                                                <Link className="text-color" style={{ color: 'white' }} to={"/sellerProfile/" + this.state.name._id}>Visit Profile</Link>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="chatbox">
                                        <ScrollToBottom className="message-box" >
                                            <MessageList className='message-list' lockable={true} toBottomHeight={'100%'} dataSource={this.state.chat}></MessageList>
                                        </ScrollToBottom >
                                        <div className="message-input-wrapper position-relative border">
                                            <input type="text" className="message-input" value={this.state.message} onKeyUp={this.handleKeyUp} onInput={e => this.setState({ message: e.target.value })} placeholder="Type here..." />
                                            <button type="submit" className="btn postAd-submit-btn chat-send-btn" onClick={this.handleSend}><FontAwesome name="send" /></button>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div style={{ width: '100%' }}>
                                    <h2 className="message" >Click on the chat head to open the chat</h2>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (store) => {
    return {
        socket: store.socket,
    }
}
export default connect(mapStateToProps)(Chat);
