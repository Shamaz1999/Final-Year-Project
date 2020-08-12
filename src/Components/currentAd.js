import React, { Component } from 'react'; 
import {Link} from 'react-router-dom'
import adImg from './../images/b3.jpg'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import star from './../images/star.png'
import starSelect from './../images/starSelect.png'
import { connect } from 'react-redux'


class Ad extends Component {

    state={
        id:this.props.match.params.adId,
        ad:''
    }
    

    fav = (src)=>{
        alert(src)
        if(src === starSelect){
            src = starSelect
        }
        else{
            src = starSelect
        }
    }

    componentDidMount(){
        var option = {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        }

    fetch('http://localhost:8000/currentad', option)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({ad:data},
                ()=>console.log(this.state))
                this.props.dispatch({type:'insertads',payload:this.state.ad.sellerId})
            })
            .catch(err => console.log(err))
        }

         phoneLoginAlert = () => {
             var user = JSON.parse(localStorage.getItem("user"))
             if(user !== "")
            alert("You need to Log In to view the number!")
            else
            return
        }
         chatLoginAlert = () => {
             var user = JSON.parse(localStorage.getItem("user"))
             if(user !== "")
            alert("You need to Log In to chat with this user!")
            else
            return
        }
  
        render(){
            
            // this.props.dispatch({type:'insertads',payload:this.state.ad.sellerId})
            // console.log(this.state.ad.sellerId)
            console.log(this.state)
        
        var user = JSON.parse(localStorage.getItem("user"))
        const handleOnDragStart = e => e.preventDefault()
        var arr = [this.state.ad.url1,this.state.ad.url2,this.state.ad.url3,this.state.ad.url4]
        let item =[1,2,3,4].map((i)=>(
            <div key={i}>
            <img key={this.state.ad.url1} src={arr[i-1]} height='500' width='1200' onDragStart={handleOnDragStart} className="yours-custom-class" />
            </div>
        ))
        return(
            <div className="app" >
                <div className="row" >
                <div className="col-md-8" style={{margin:"0px "}}>
                    <div className="ad-img-container">
                    {/* <img src={this.state.ad.url1} alt=""/>               */}
                    <AliceCarousel items={item} autoPlay={false} mouseDragEnabled />      
                    {/* </AliceCarousel> */}
                    </div>
                    <div className="ad-desc-container">
                    <h4>Details</h4>
                    <div className="ad-detail-container">
                        <div className="float-left">
                            <p className="ads-type">Type</p>
                            <div className="ads-type">{this.state.ad.category}</div>
                        </div>
                        <div className="float-right">
                            <p className="ads-type">Condition</p>
                            <div className="ads-type">{this.state.ad.condition}</div>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="contaner">
                    <hr/>
                    </div>
                    <h4>Description</h4>
                    <div style={{marginTop:"15px"}}>
                        {this.state.ad.description}

                    </div>
                    </div> 
                </div>
                <div className="col-md-4 ">
                    <div className="row">
                        <div className="col-md-12" style={{padding:"0px"}}>
                            <div className="price-container" style={{padding:"15px 30px"}}>
                                <h1 className="float-left">Rs {this.state.ad.price}</h1>
                                <div className="favourite-container float-right">
                                    <img src={star} height="30" width="30" alt="favourite"/>
                                </div>
                                <div className="adTitle-container clear">
                                        {this.state.ad.adTitle}
                                </div>
                                <div className="container1">
                                    <div className="loc-container float-left">
                                        {this.state.ad.location}
                                    </div>
                                    <div className="loc-container float-right">
                                        {this.state.ad.date}
                                    </div>
                                    <div style={{marginBottom:"10px"}} className="clear"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12" style={{padding:"0px", marginTop:"50px"}}>
                            <div className="seller-container" style={{padding:"5px 30px"}}>
                                <h5 className="" style={{padding:"20px 0px"}}>Seller Description</h5>
                                <div className="seller-info-container ">
                                    <div className="seller-img-container">
                                        <img src={this.state.ad.sellerImg} height="70" alt="Profile Pictur"/>
                                    </div>
                                    <div className="seller-name-container">
                                      <Link to={this.props.match.params.adId + "/sellerProfile"} onClick={this.st}>{this.state.ad.sellerName}</Link>
                                    </div>
                                </div>

                                <div className="container2">
                                    <div className="phone-container">
                                        <span className="phone-image-conainer">
                                            <img src={require('./../images/phone.png')} height="20" alt="phone"/>
                                        </span>
                                       <div className="number" onClick={this.phoneLoginAlert}>
                                            {/* {this.state.ad.phone} */}
                                            <input className="no-border no-outline phone-no-field " disabled  value={this.state.ad.phone}
                                                type={
                                                    user ? "text" : "password"
                                                }
                                            />
                                        {/* <button className="show-phone-btn login-btn" >View Number</button>  */}
                                       </div>
                                    </div>
                                    <div className="user-chat-btn-container pb-3 text-center">
                                        <button className="btn login-btn no-margin"
                                          onClick={user ? ()=> this.props.history.push('/'+this.state.ad.sellerId+'/chat') : this.chatLoginAlert }
                                        >
                                          Chat with this user</button>   
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
const mapStateToProps = (store) => {
    return {
        ad: store.adsReducer
    }
}
export default connect(mapStateToProps)(Ad);

// export default Ad