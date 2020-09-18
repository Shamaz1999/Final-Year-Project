import React, { Component } from 'react'; 
import "./../bootstrap/bootstrapC.css";
import man from './../images/man.png'
import girl from './../images/girl.png'
// import girl from './../images/girl.png'
import { connect } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


class Seller extends Component {
    state={
        sellerId:this.props.match.params.sellerId,
        seller:'',
        isDataloaded: false,
        userFound : true,
    }

    componentWillMount(){
        var option = {
            method: "POST",
            body: JSON.stringify(this.state),
            headers:{
                'Content-Type': 'application/json'
            }
        }   

        fetch('http://localhost:8000/sellerprofile', option)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            this.setState({seller:data.data})
            this.setState({isDataloaded:true})
        })
        .catch(err => {
            console.log(err)
            this.setState({userFound:false})
        })
        
    }
    
    chatLoginAlert = () => {
        var user = JSON.parse(localStorage.getItem("user"))
        if (user !== "")
        toast('You need to log in to chat with this user!', {
            className:'logout-toast',
            position: "bottom-left",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            closeButton:false,
            // progress: undefined,
            });
        else
            return
    }
    
    render(){
        console.log(this.state)
        // let user = this.state.seller
        var user = localStorage.getItem('user')
        localStorage.setItem('seller', JSON.stringify(this.state.seller))
        // var sellerDate = this.state.seller.date
        var seller = JSON.parse(localStorage.getItem("seller"))
        var dp= "";

        if(seller !== null ){
        if (seller.sellerImg === "") {
            // console.log('1st')
            if (seller.gender === "male"){
                dp = man
            }
            if (seller.gender === "female"){
                dp = girl
            }
        }
        else{
            dp = seller.url1;
        }
    }
        return(
            <div  className="seller-profile-container text-color">
                    
                { this.state.userFound ?
                <> 
                    <div className="display-4 seller-page-heading">
                        Seller Profile
                    </div>
                    {
                    this.state.isDataloaded
                    ?
                    <div className="seller-profile-container">  
                    <div className="seller-profile-left-wrapper tabs-shadow">
                            <div className="seller-details-big-heading">
                                Profile Info
                            </div>
                            <hr />
                            <div className="details-profile-pic-container">
                                {this.state.isDataloaded ? <img src={dp} className="seller-profile-pic" alt="Profile Pic" /> : <Skeleton className="seller-profile-pic-skeleton" />}
                            </div>
                            <div className="no-editable-seller-details-wrapper seller-details-wrapper" >
                                <div className="seller-details-container">
                                    <div className='non-editable-info-container profile-details-info-container'>
                                        <span className=" seller-details-small-heading">Name</span>
                                            <span className="non-editable-seller-details">{seller.firstName} {seller.lastName}</span>
                                    </div>
                                </div>
                                <div className="seller-details-container">
                                    <div className='non-editable-info-container profile-details-info-container'>
                                        <span className="seller-details-small-heading">Location</span>
                                        <div>
                                            <span className="non-editable-seller-details">
                                               <span> {seller.city}</span>, <span>{seller.country}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="seller-details-container">
                                    <div className='non-editable-info-container profile-details-info-container'>
                                        <span className="seller-details-small-heading">Gender</span>
                                        <span className="non-editable-seller-details">{seller.gender}</span>
                                    </div>
                                </div>
                                <div className="seller-details-container">
                                    <div className='non-editable-info-container profile-details-info-container'>
                                        <span className="seller-details-small-heading">Address</span>
                                        <span className="non-editable-seller-details">{seller.address}</span>
                                    </div>
                                </div>
                                <div className="seller-details-container">
                                    <div className='non-editable-info-container profile-details-info-container'>
                                        <span className="seller-details-small-heading">Date Joined</span>
                                        <span className="non-editable-seller-details">{seller.date}</span>
                                    </div>
                                </div>
                            <div className="seller-chat-btn-container">
                                <button className="btn login-btn current-ad-chat-btn" onClick={user ? () => this.props.history.push('/' + this.state.sellerId + '/chat') : this.chatLoginAlert}>
                                    Chat
                                </button>
                            </div>
                            </div>
                        </div>             
                </div>
                :
                <div className="seller-profile-container">  
                    <div className="seller-profile-left-wrapper tabs-shadow">
                            <div className="seller-details-big-heading">
                            <span><Skeleton  height={30} width={200}/></span>
                            </div>
                            <hr />
                            <div className="details-profile-pic-container">
                                {<Skeleton className="seller-profile-pic-skeleton" />}
                            </div>
                            <div className="no-editable-seller-details-wrapper seller-details-wrapper" >
                                <div className="seller-details-container">
                                    <div className='non-editable-info-container profile-details-info-container'>
                                        <span><Skeleton height={20} width={150} className="seller-info-skeleton" /></span>
                                        <span><Skeleton height={20} width={150} className="seller-info-skeleton"/></span>
                                    </div>
                                </div>
                                <div className="seller-details-container">
                                    <div className='non-editable-info-container profile-details-info-container'>
                                        <span><Skeleton height={20} width={150} className="seller-info-skeleton"/></span>
                                        <span><Skeleton height={20} width={150} className="seller-info-skeleton"/></span>
                                    </div>
                                </div>
                                <div className="seller-details-container">
                                    <div className='non-editable-info-container profile-details-info-container'>
                                    <span><Skeleton height={20} width={150} className="seller-info-skeleton"/></span>
                                        <span><Skeleton height={20} width={150} className="seller-info-skeleton"/></span>
                                    </div>
                                </div>
                                <div className="seller-details-container">
                                    <div className='non-editable-info-container profile-details-info-container'>
                                    <span><Skeleton height={20} width={150} className="seller-info-skeleton"/></span>
                                        <span><Skeleton height={20} width={150} className="seller-info-skeleton"/></span>
                                    </div>
                                </div>
                                <div className="seller-details-container">
                                    <div className='non-editable-info-container profile-details-info-container'>
                                    <span><Skeleton height={20} width={150} className="seller-info-skeleton"/></span>
                                        <span><Skeleton height={20} width={150} className="seller-info-skeleton"/></span>
                                    </div>
                                </div>
                            <div className="seller-chat-btn-container">
                                {/* <span><Skeleton className="seller-info-skeleton"/></span> */}
                                <span><Skeleton height={30}/></span>
                            </div>
                            </div>
                        </div>             
                </div>

                }</>
                :
               <div className="mt-5">
                    <div style={{height:'50vh'}}  className="container mt-5" >
                        <h2 className="message pt-5">Sorry! No user found.</h2>
                        <h4 className="message pt-5">Maybe the user have deleted his account.</h4>      
                    </div > 
               </div>
                
}
            </div>

        );
    }
}
const mapStateToProps = (store) => {
    return {
        ad: store.adsReducer
    }
}
export default connect(mapStateToProps)(Seller);

// export default Seller