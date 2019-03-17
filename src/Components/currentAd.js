import React, { Component } from 'react'; 
import {Link} from 'react-router-dom'
import adImg from './../images/b3.jpg'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

class Ad extends Component {
    state={
        name:"",
        topic:"",
        comments:""
    }

    render(){
        console.log(this.state)
        const handleOnDragStart = e => e.preventDefault()

        return(
            <div className="app" >
                <div className="row" >
                <div className="col-md-8" style={{margin:"0px "}}>
                    <div className="ad-img-container">               
                    <AliceCarousel duration={400} autoPlay={false} mouseDragEnabled >
                        <img src="images/ca4.jpg" height='500' width='1200' onDragStart={handleOnDragStart} className="yours-custom-class" />
                        <img src="images/ca3.jpg" height='500' width='1200' onDragStart={handleOnDragStart} className="yours-custom-class" />
                        <img src="images/ca1.jpg" height='500' width='1200' onDragStart={handleOnDragStart} className="yours-custom-class" />
                        <img src="images/ca2.jpg" height='500' width='1200' onDragStart={handleOnDragStart} className="yours-custom-class" />
                    </AliceCarousel>

                    <div className="ad-desc-container">
                    <div className="container">
                        <hr/>
                    </div>
                    
                    </div>
                    </div>
                    
                </div>
                <div className="col-md-4 ">
                    <div className="row">
                        <div className="col-md-12" style={{padding:"0px"}}>
                            <div className="price-container" style={{padding:"15px 30px"}}>
                                <h1 className="float-left">Rs 70000</h1>
                                <div className="favourite-container float-right">
                                    <img src={require('./../images/star.png')} height="30" width="30" alt="favourite"/>
                                </div>
                                <div className="adTitle-container clear">
                                        Ad Title Here
                                </div>
                                <div className="container1">
                                    <div className="loc-container float-left">
                                        location here
                                    </div>
                                    <div className="loc-container float-right">
                                        date Here
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
                                        <img src={require('./../images/man.png')} height="70" alt=""/>
                                    </div>
                                    <div className="seller-name-container">
                                      <Link to="/sellerProfile">Seller Name Here</Link>
                                    </div>
                                </div>

                                <div className="container2">
                                    <div className="phone-container">
                                        <img src={require('./../images/phone.png')} height="30" alt="phone"/>
                                       <div className="number">
                                            03002724118
                                       </div>
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

export default Ad