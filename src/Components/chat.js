import React, { Component } from 'react'
// import { Link } from "react-router-dom"
import { connect } from 'react-redux';
// import {Button} from 'react-bootstrap'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import {
    MessageList, ChatList,
    //  SystemMessage,
} from 'react-chat-elements'
import 'react-chat-elements/dist/main.css';
import FontAwesome from 'react-fontawesome';
// import io from 'socket.io-client';
import { toast } from 'react-toastify'
import Skeleton from 'react-loading-skeleton';



class Chat extends Component {

    state = {
        user: JSON.parse(localStorage.getItem('user')),
        message: '',
        msgList: [],
        chat: [],
        sellerId: this.props.match.params.sellerId,
        show: true,
        chatFetched: false,
        room: '',
        rooms: [],
        fetchedRoom: false,
        eventCreated:false

    }


    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));

        // const sellerId = this.props.match.params.sellerId;
        // this.setState({ sellerId })
        // var socket = io('http://localhost:8000'
        // , {path: '/socket.io'}  
        // );
        // console.log(this.state)



        // Getting all the rooms
        fetch('http://localhost:8000/get-rooms/' + this.state.user._id)
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
                        data: room[person]._id,
                        className: 'chat-app-chat-list'
                    }
                })
                this.setState({ rooms });
            })
            .catch(err => {
                console.log(err)
            })

    }



    handleClick(e, data) {
        console.log(e);
        console.log(data);
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
                // progress: undefined,
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

            fetch('http://localhost:8000/message-sent', option)
                .then(res => res.json())
                .then(data => {
                    this.setState({ chatFetched: true })
                    console.log(data)
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

            fetch('http://localhost:8000/get-chat/' + this.state.room._id)
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
                    this.setState({ chat: msgs })
                    this.setState({ chatFetched: true })
                    // console.log(data)
                })
                .catch(err => {
                    console.log(err)
                })

        }

        if (!this.state.fetchedRoom) {
            console.log("Running");
            this.setState({ fetchedRoom: true });
            //Getting the room with the seller
            fetch('http://localhost:8000/get-room/' + this.state.user._id + "/" + this.props.match.params.sellerId)
                .then(res => res.json())
                .then(data => {
                    this.setState({ room: data })
                    console.log(data)
                })
                .catch(err => {
                    console.log(err)
                })
        }


        const openChat = (e) => {
            console.log(e);
            this.props.history.push(`/${e.data}/chat`)
            this.setState({ fetchedRoom: false });
        }
        const user = JSON.parse(localStorage.getItem('user'))
        // const socket = this.props.socket.socket;
        if (this.props.socket.socket && !this.state.eventCreated) {
            this.setState({eventCreated:true})
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
                                {this.state.fetchedRoom
                                    ?
                                    <div>
                                        <ContextMenuTrigger collect={user} id="my">
                                            <ChatList
                                                className='chat-lists'
                                                onClick={e => openChat(e)}
                                                // onContextMenu={e => openChat(e)}
                                                dataSource={this.state.rooms}
                                            // dataSource={[
                                            //     {
                                            //         avatar: user.url1,
                                            //         alt: user.firstName,
                                            //         title: user.firstName + " " + user.lastName,
                                            //         subtitle: user.date,
                                            //         date: new Date(),
                                            //         unread: 5,
                                            //         className: 'chat-app-chat-list'
                                            //     },
                                            // ]} 
                                            />
                                        </ContextMenuTrigger>
                                        <ContextMenu className="chat-context-menu" id="my">
                                            <div className="chat-context-menuItems-wrapper background-class text-color">
                                                <MenuItem className="chat-context-menuItem" data={{ foo: 'bar' }} onClick={this.handleClick}>
                                                    Visit Profile
                                            </MenuItem>
                                                <MenuItem className="chat-context-menuItem" data={{ foo: 'bar' }} onClick={this.handleClick}>
                                                    Delete Chat
                                            </MenuItem>
                                            </div>
                                        </ContextMenu>
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
                            {/* <h2 className="message" >Chat with the Seller</h2> */}
                            <div className="chatbox-wrapper">
                                <div className="chatbox">
                                    <div className="message-box">
                                        {this.state.chatFetched
                                            ?
                                            <MessageList
                                                className='message-list'
                                                lockable={true}
                                                toBottomHeight={'100%'}
                                                dataSource={this.state.chat}
                                            // dataSource={[
                                            //     {
                                            //         position: 'right',
                                            //         type: 'text',
                                            //         text: 'I want to buy what you are selling',
                                            //         date: new Date(),
                                            //     },
                                            // ]}
                                            />
                                            :
                                            <div>
                                                <div className="mb-1 text-left"><Skeleton height={40} width={200} /></div>
                                                <div className="mb-1 text-right"><Skeleton height={40} width={200} /></div>
                                                <div className="mb-1 text-right"><Skeleton height={40} width={200} /></div>
                                                <div className="mb-1 text-left"><Skeleton height={40} width={200} /></div>
                                            </div>
                                        }
                                    </div>
                                    <div className="message-input-wrapper position-relative border">
                                        <input type="text" className="message-input" value={this.state.message} onKeyUp={this.handleKeyUp} onInput={e => this.setState({ message: e.target.value })} placeholder="Type here..." />
                                        <button type="submit" className="btn postAd-submit-btn chat-send-btn" onClick={this.handleSend}><FontAwesome name="send" /></button>
                                    </div>
                                </div>
                            </div>
                            {/* <SystemMessage text={'End of conversation'}/> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (store) => {
    return {
        // user: store.userReducer
        socket: store.socket,
    }
}
export default connect(mapStateToProps)(Chat);
// export default Chat;