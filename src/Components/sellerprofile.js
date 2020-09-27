import React, { Component } from 'react';
import "./../bootstrap/bootstrapC.css";
import man from './../images/man.png'
import girl from './../images/girl.png'
// import girl from './../images/girl.png'
import { connect } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Link } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


class Seller extends Component {
    state = {
        sellerId: this.props.match.params.sellerId,
        seller: '', 
        isDataloaded: false,
        // areAdsloaded: true,
        userFound: true,
        ads: "",
    }

    componentWillMount() {
        var option = {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        // Getting seller profile info
        fetch('http://localhost:8000/sellerprofile', option)
            .then(res => res.json())
            .then(data => {
                this.setState({ seller: data.data })
                // this.setState({isDataloaded:true})
            })
            .catch(err => {
                console.log(err)
                this.setState({userFound:false})
            })

        // Getting all ads by seller
        fetch('http://localhost:8000/sellerads', option)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({ ads: data })
                this.setState({ isDataloaded: true })
            })
            .catch(err => {
                console.log(err)
                // this.setState({userFound:false})
            })



    }

    chatLoginAlert = () => {
        var user = JSON.parse(localStorage.getItem("user"))
        if (user !== "")
            toast('You need to log in to chat with this user!', {
                className: 'logout-toast',
                position: "bottom-left",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                closeButton: false,
                // progress: undefined,
            });
        else
            return
    }

    render() {
        // let user = this.state.seller
        var user = JSON.parse(localStorage.getItem('user'))
        var userId ;
        if(user === null){
            userId = 'empty;'
        }
        else{
            userId = user._id;            
        }
        // if(user){
            console.log( "this is user " +userId)
        // }
        localStorage.setItem('seller', JSON.stringify(this.state.seller))
        // var sellerDate = this.state.seller.date
        var seller = JSON.parse(localStorage.getItem("seller"))
        var dp = "";
        var ads ;

        if (seller !== null) {
            if (seller.sellerImg === "") {
                // console.log('1st')
                if (seller.gender === "male") {
                    dp = man
                }
                if (seller.gender === "female") {
                    dp = girl
                }
            }
            else {
                dp = seller.url1;
            }
        }

        let im = {
           width: '265px'
        }
        const handleOnDragStart = e => e.preventDefault();

        const items = (data) => {
            return data.map((url, index) => {
                return (<div key={index}>
                    <img height='200' src={url} onDragStart={handleOnDragStart} alt="Ad-Pics" />
                </div>)
            })
        }


        // Seller Ads
        if(this.state.ads.length){
            ads = this.state.ads.map((item, index)=>{
                return <div key={index} className="card-wrapper" style={{margin: '5px'}} >
                <div className="card" style={im} >
                    <AliceCarousel buttonsDisabled={true} duration={400} autoPlay={true} autoPlayInterval={5000} mouseDragEnabled >
                        {items([item.url1, item.url2, item.url3, item.url4])}
                        {/* <img src={require('./../images/ca4.jpg')} alt="slider1" height='200' width='300' onDragStart={handleOnDragStart} /> */}
                    </AliceCarousel>
                    <div className="card-body">
                        <h5 className="card-title text-left"> {item.adTitle}</h5><h5 className="card-title text-left">Price: {item.price}</h5>
                        <div className="divider"><hr className="ad-hr" /></div>
                        <div className="text-left">Ad Id : {item._id}</div>
                        <div className="card-text text-left ad-description">{item.description}</div>
                        <div className="d-flex space-btw align-center ads-btn-container">
                            <span className="float-left" style={{ fontSize: '13px', color: 'grey' }}>{item.location}</span>
                            <span style={{ fontSize: '13px', color: 'grey', textAlign:'right' }}>
                                {item.date}
                            </span>
                        </div>
                        <div style={{textAlign:'left', marginTop:' 10px'}}>
                        <Link to={"/ad/"+ item._id} className="btn login-btn open-ad-btn postAd-submit-btn" style={{ marginTop: "0px" }}>Open Ad</Link>
                        </div>
                    </div>
                </div>
            </div>
            })
        }


        //Skeleton Ads
        let skeletonCards = [1,2,3]
        let sc;
        //Skeleteon Card Ads
            sc = skeletonCards.map((item, index) => {
                return <div className="card-wrapper" style={{margin:'5px'}} >
                    <div className="card" style={im} >
                        <Skeleton height={200} />
                        <div className="card-body">
                            <h5 className="card-title text-left"><Skeleton /></h5><h5 className="card-title text-left"><Skeleton /></h5>
                            <div className="divider"><hr /></div>
                            <div className="card-text text-left ad-description"><Skeleton /></div>
                            <div className="card-text text-left ad-description"><Skeleton /></div>
                            <div className="d-flex space-btw align-center ads-btn-container">
                                <span className="float-left" style={{ fontSize: '13px', color: 'grey' }}><Skeleton width={90} /></span>
                                <span style={{ fontSize: '13px', color: 'grey', textAlign:'right' }}><Skeleton width={90} /></span>
                            </div>
                            <div className="text-left">
                                <Skeleton width={120} />
                            </div>
                        </div>
                    </div>
                </div>
            })

        return (
            <div className="seller-profile-container text-color">

                {this.state.userFound ?
                    <>
                        <div className="display-4 seller-page-heading">
                            Seller Profile
                    </div>
                        {
                            this.state.isDataloaded
                                ?
                                <div className="seller-profile-container">
                                    <div className="details-cols-container">
                                        <div className="details-left-wrapper tabs-shadow">
                                            <div className="profile-details-big-heading seller-details-big-heading">
                                                Profile Info
                                            </div>
                                            <hr />
                                            <div className="details-profile-pic-container">
                                                {this.state.isDataloaded ? <img src={dp} className="details-profile-pic" alt="Profile Pic" /> : <Skeleton className="details-profile-pic-skeleton" />}
                                            </div>
                                            <div className="no-editable-profile-details-wrapper profile-details-wrapper" >
                                                <div className="profile-details-container">
                                                    <div className='non-editable-info-container profile-details-info-container'>
                                                        <span className=" profile-details-small-heading">Name</span>
                                                        <span className="non-editable-details">{seller.firstName} {seller.lastName}</span>
                                                    </div>
                                                </div>
                                                <div className="profile-details-container">
                                                    <div className='non-editable-info-container profile-details-info-container'>
                                                        <span className="profile-details-small-heading">Location</span>
                                                        <div>
                                                            <span className="non-editable-details">
                                                                <span> {seller.city}</span>, <span>{seller.country}</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="profile-details-container">
                                                    <div className='non-editable-info-container profile-details-info-container'>
                                                        <span className="profile-details-small-heading">Gender</span>
                                                        <span className="non-editable-details">{seller.gender}</span>
                                                    </div>
                                                </div>
                                                <div className="profile-details-container">
                                                    <div className='non-editable-info-container profile-details-info-container'>
                                                        <span className="profile-details-small-heading">Address</span>
                                                        <span className="non-editable-details">{seller.address}</span>
                                                    </div>
                                                </div>
                                                <div className="profile-details-container">
                                                    <div className='non-editable-info-container profile-details-info-container'>
                                                        <span className="profile-details-small-heading">Date Joined</span>
                                                        <span className="non-editable-details">{seller.date}</span>
                                                    </div>
                                                </div>
                                                <div className="seller-chat-btn-container">
                                                { userId === this.state.sellerId ?
                                                    <button className="btn login-btn details-page-copy-btn postAd-submit-btn" onClick={ ()=> this.props.history.push("/details/"+ this.state.sellerId )}>
                                                        Edit
                                                    </button>
                                                        :
                                                    <button className="btn login-btn details-page-copy-btn postAd-submit-btn" onClick={user ? () => this.props.history.push('/' + this.state.sellerId + '/chat') : this.chatLoginAlert}>
                                                        Chat
                                                    </button>
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        <div className="seller-profile-right-wrapper tabs-shadow">
                                            <div className="profile-details-big-heading">
                                                Ads by this user
                                            </div>
                                            <hr />
                                            <div className="seller-ads-container row">                     
                                                {ads}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                // <div className="seller-profile-container">
                                //     <div className="seller-profile-left-wrapper tabs-shadow">
                                //         <div className="seller-details-big-heading">
                                //             <span><Skeleton height={30} width={200} /></span>
                                //         </div>
                                //         <hr />
                                //         <div className="details-profile-pic-container">
                                //             {<Skeleton className="seller-profile-pic-skeleton" />}
                                //         </div>
                                //         <div className="no-editable-seller-details-wrapper seller-details-wrapper" >
                                //             <div className="seller-details-container">
                                //                 <div className='non-editable-info-container profile-details-info-container'>
                                //                     <span><Skeleton height={20} width={150} className="seller-info-skeleton" /></span>
                                //                     <span><Skeleton height={20} width={150} className="seller-info-skeleton" /></span>
                                //                 </div>
                                //             </div>
                                //             <div className="seller-details-container">
                                //                 <div className='non-editable-info-container profile-details-info-container'>
                                //                     <span><Skeleton height={20} width={150} className="seller-info-skeleton" /></span>
                                //                     <span><Skeleton height={20} width={150} className="seller-info-skeleton" /></span>
                                //                 </div>
                                //             </div>
                                //             <div className="seller-details-container">
                                //                 <div className='non-editable-info-container profile-details-info-container'>
                                //                     <span><Skeleton height={20} width={150} className="seller-info-skeleton" /></span>
                                //                     <span><Skeleton height={20} width={150} className="seller-info-skeleton" /></span>
                                //                 </div>
                                //             </div>
                                //             <div className="seller-details-container">
                                //                 <div className='non-editable-info-container profile-details-info-container'>
                                //                     <span><Skeleton height={20} width={150} className="seller-info-skeleton" /></span>
                                //                     <span><Skeleton height={20} width={150} className="seller-info-skeleton" /></span>
                                //                 </div>
                                //             </div>
                                //             <div className="seller-details-container">
                                //                 <div className='non-editable-info-container profile-details-info-container'>
                                //                     <span><Skeleton height={20} width={150} className="seller-info-skeleton" /></span>
                                //                     <span><Skeleton height={20} width={150} className="seller-info-skeleton" /></span>
                                //                 </div>
                                //             </div>
                                //             <div className="seller-chat-btn-container">
                                //                 {/* <span><Skeleton className="seller-info-skeleton"/></span> */}
                                //                 <span><Skeleton height={30} /></span>
                                //             </div>
                                //         </div>
                                //     </div>
                                // </div>
                                <div className="seller-profile-container">
                                    <div className="details-cols-container">
                                        <div className="details-left-wrapper tabs-shadow">
                                            <div className="profile-details-big-heading seller-details-big-heading">
                                            <span><Skeleton height={30} width={200} /></span>
                                            </div>
                                            <hr />
                                            <div className="details-profile-pic-container">
                                                <Skeleton className="details-profile-pic-skeleton" />
                                            </div>
                                            <div className="no-editable-profile-details-wrapper profile-details-wrapper" >
                                                <div className="profile-details-container">
                                                    <div className='non-editable-info-container profile-details-info-container'>
                                                    <span><Skeleton  width={120} className="seller-info-skeleton" /></span>
                                                    <span><Skeleton  width={120} className="seller-info-skeleton" /></span>
                                                    </div>
                                                </div>
                                                <div className="profile-details-container">
                                                    <div className='non-editable-info-container profile-details-info-container'>
                                                    <span><Skeleton  width={120} className="seller-info-skeleton" /></span>
                                                    <span><Skeleton  width={120} className="seller-info-skeleton" /></span>
                                                    </div>
                                                </div>
                                                <div className="profile-details-container">
                                                    <div className='non-editable-info-container profile-details-info-container'>
                                                    <span><Skeleton  width={120} className="seller-info-skeleton" /></span>
                                                    <span><Skeleton  width={120} className="seller-info-skeleton" /></span>
                                                    </div>
                                                </div>
                                                <div className="profile-details-container">
                                                    <div className='non-editable-info-container profile-details-info-container'>
                                                    <span><Skeleton  width={120} className="seller-info-skeleton" /></span>
                                                    <span><Skeleton  width={120} className="seller-info-skeleton" /></span>
                                                    </div>
                                                </div>
                                                <div className="profile-details-container">
                                                    <div className='non-editable-info-container profile-details-info-container'>
                                                    <span><Skeleton  width={120} className="seller-info-skeleton" /></span>
                                                    <span><Skeleton  width={120} className="seller-info-skeleton" /></span>
                                                    </div>
                                                </div>
                                                <div className="seller-chat-btn-container">
                                                <div className="mt-2"><Skeleton  height={30} width={80} className="seller-info-skeleton" /></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="seller-profile-right-wrapper tabs-shadow">
                                            <div className="profile-details-big-heading">
                                            <span><Skeleton height={30} width={200} /></span>
                                            </div>
                                            <hr />
                                            <div className="seller-ads-container row">                     
                                                {sc}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                        }</>
                    :
                    <div className="mt-5">
                        <div style={{ height: '50vh' }} className="container mt-5" >
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