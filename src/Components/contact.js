import React, { Component } from 'react'; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
// import {Link} from 'react-router-dom'

class Contact extends Component {
    state={
        name:"",
        topic:"",
        comments:"",
        date: new Date()
    }
    componentDidMount(){
        const input = this.refs.name;
        input.focus();
    }
    
    verify = ()=>{

        if(this.state.name===""){
            toast('Your Name is required!', {
                className:'logout-toast',
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                closeButton:false,
                // progress: undefined,
                });
            // alert('Your Name is required!')
            const input = this.refs.name
            input.focus()
            return false
        }
        if(this.state.topic===""){
            toast('Topic Name is required!', {
                className:'logout-toast',
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                closeButton:false,
                // progress: undefined,
                });
            const input = this.refs.topic
            input.focus()
            return false
        }
        if(this.state.comments===""){
            toast('Description is required!', {
                className:'logout-toast',
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                closeButton:false,
                // progress: undefined,
                });
            const input = this.refs.comment
            input.focus()
            return false
        }
        var option = {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        }

    fetch('http://localhost:8000/contact', option)
            .then(res => res.json())
            .then(data => console.log(data),alert("Thanks for your feedback! Now you can navigate to Homepage"))
            .catch(err => console.log(err,alert("There was an error please try again.")))

            
        
        
    }

    render(){
        console.log(this.state)
        return(
            <div className="app text-color">
            <div className="main-login">
                <div className="login-form"  style={{marginBottom:"190px"}} id="login-form">
                        <div className="display-4 text-center login-page-heading">
                            How can we help you?
                        </div>
                        <p className="text-center mb-5">Feel free to gives us suggestion about how we can improve our work</p>
                       <div className="tabs-shadow signup-form-wrapper">
                            <div className="login-form-container">
                                <div className="form-group mar">
                                    <label className="signup-label" htmlFor="name"><b>Name</b> <span className="required">*</span></label>
                                    <input type="email" id="name"  onChange={e => this.setState({name:e.target.value})} ref="name" className="form-control"  />                               
                                </div>
                                <div className="form-group">
                                    <label className="signup-label" htmlFor="topic"><b>Topic</b> <span className="required">*</span></label>
                                    <input type="text" id="topic" onChange={e => this.setState({topic:e.target.value})} ref="topic" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label className="signup-label" htmlFor="contact-comment"><b>Comment or Suggestion</b> <span className="required">*</span></label>
                                    <textarea  id="contact-comment" ref="comment" onChange={e => this.setState({comments:e.target.value})} className="form-control" cols="30" rows="6"></textarea>
                                </div>
                                <div className="mt-1" >
                                    <div>
                                        <input type="button" className="btn login-btn" onClick={this.verify} value="Submit"/>
                                    </div>
                                </div>
                            </div>
                       </div>
                    </div>
            </div>            
            </div>
            );
    }
}

export default Contact