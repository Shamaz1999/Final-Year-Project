import React, { Component } from 'react'
// import { Link } from "react-router-dom"
// import { connect } from 'react-redux'
// import About from './about';
// import {Button} from 'react-bootstrap'
import { MessageList, ChatList, SystemMessage } from 'react-chat-elements'
import 'react-chat-elements/dist/main.css';
import FontAwesome from 'react-fontawesome';
import io from 'socket.io-client';

class Chat extends Component {

    state = {
        msg:'',
        msgList:[]
    }

    componentDidMount(){
        var socket = io('http://localhost:8000'
        , {path: '/socket.io'}  
        );
        console.log(socket)
    }


    handleSend = () =>{
        var d = new Date()
        console.log(d)
        if(this.state.msg == ''){
            alert('Please type something before sending!');
        }
        else{

        }
    }
    
    render() {

        
        // window.scrollTo(0, 0);
        
      

        return (
            <div className="text-center">
                <h2 style={{ margin: '10px auto', fontWeight: '400' }} >Chat with the Seller</h2>

                <div className="chatbox-wrapper">
                    <div className="chatbox">
                        <div className="message-box">
                            <MessageList
                                className='message-list'
                                lockable={true}
                                toBottomHeight={'100%'}
                                dataSource={[
                                    {
                                        position: 'right',
                                        type: 'text',
                                        text: 'Hi',
                                        date: new Date(),
                                    },
                                    {
                                        position: 'left',
                                        type: 'text',
                                        text: 'Hello',
                                        date: new Date(), 
                                    },
                                    {
                                        position: 'right',
                                        type: 'text',
                                        text: 'I want to buy what you are selling',
                                        date: new Date(),
                                    },
                                   
                                ]} />
                        </div>
                        <div className="message-input-wrapper">
                               <input type="text" className="message-input" onInput={ e => this.setState({msg: e.target.value})} placeholder="Type here..." />
                               <button type="submit" className="btn login-btn chat-send-btn" onClick={this.handleSend}><FontAwesome name="send" /></button>
                        </div>
                    </div>
                </div>













                {/* <SystemMessage text={'End of conversation'}/> */}
            </div>
        );
    }
}
// const mapStateToProps = (store) => {
//     return {
//         user: store.userReducer
//     }
// }
// export default connect(mapStateToProps)(Chat);
export default Chat;