import React, { Component } from 'react'; 
// import {Link} from 'react-router-dom'

class Contact extends Component {
    state={
        name:"",
        topic:"",
        comments:""
    }
    componentDidMount(){
        const input = this.refs.name;
        input.focus();
    }
    
    verify = ()=>{

        if(this.state.name==""){
            alert('Your Name is required!')
            const input = this.refs.name
            input.focus()
            return false
        }
        if(this.state.topic==""){
            alert('Topic Name is required!')
            const input = this.refs.topic
            input.focus()
            return false
        }
        if(this.state.comments==""){
            alert('Description is required!')
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
            <div className="app">
            <div className="main-login">
                <form className="login-form" method="POST" style={{marginBottom:"190px"}} id="login-form">
                        <div className="display-4" style={{marginBottom:"20px"}}>
                            Contact Us
                        </div>
                        <p className="text-center mb-5">Feel free to gives us suggestion about how we can improve our work</p>
                        <div>
                            <div className="form-group mar">
                                <label htmlFor="exampleInputEmail1"><b>Name</b> <span className="required">*</span></label>
                                <input type="email" name="login-email" onChange={e => this.setState({name:e.target.value})} ref="name" className="form-control"  />                               
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1"><b>Topic</b> <span className="required">*</span></label>
                                <input type="text" name="login-pass" onChange={e => this.setState({topic:e.target.value})} ref="topic" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1"><b>Comment or Suggestion</b> <span className="required">*</span></label>
                                <textarea name="comments" id="contact-comment" ref="comment" onChange={e => this.setState({comments:e.target.value})} className="form-control" cols="30" rows="6"></textarea>
                            </div>
                            <div>
                                <div className="float-left">
                                    <input type="button" className="btn login-btn" onClick={this.verify} value="Submit"/>
                                </div>
                            </div>
                        </div>
                    </form>
            </div>            
            </div>
            );
    }
}

export default Contact