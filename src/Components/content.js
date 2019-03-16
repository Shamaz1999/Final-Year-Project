import React, { Component } from 'react';
import "./../bootstrap/bootstrapC.css"
import { Link } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import cardImg from './../images/4.jpg'

class Content extends Component {

    render() {
        let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "g", "f"];
        let d;

        let im = {
            margin: "20px 0",
            // width: "400px"
        }
        if (arr.length !== 0) {
            for (let i = 0; i <= arr.length; i++) {
                let adId;
                d = arr.map((index) =>
                    <div className="col-md-3" >
                        <div class="card" style={im} >                        
                            <img class="card-img-top" src={cardImg} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title text-left">Ad Title</h5><h5 class="card-title text-left">Rs 1400</h5>
                                <p className="text-left">Ad Id : {adId = parseInt(Math.random()*100000000)}</p>
                                <p class="card-text text-left">Ad Description</p>
                                <Link to="/ad" class="btn login-btn float-right" style={{marginTop:"0px"}}>Open Ad</Link>
                            </div>
                        </div>
                    </div>
                )
            }

        }
        const handleOnDragStart = e => e.preventDefault()
        
        return (

            <div className="App" style={{ textAlign: "center" }}>
                <div className="container" style={{marginBottom:"50px"}}>
                    <AliceCarousel  showSlideInfo={true} buttonsDisabled={true} duration={400} autoPlay={true} autoPlayInterval={5000} mouseDragEnabled >
                        <img src="images/ca4.jpg" height='500' width='1200' onDragStart={handleOnDragStart} className="yours-custom-class" />
                        <img src="images/ca3.jpg" height='500' width='1200' onDragStart={handleOnDragStart} className="yours-custom-class" />
                        <img src="images/ca1.jpg" height='500' width='1200' onDragStart={handleOnDragStart} className="yours-custom-class" />
                        <img src="images/ca2.jpg" height='500' width='1200' onDragStart={handleOnDragStart} className="yours-custom-class" />
                    </AliceCarousel>
                </div>
                <div className="row">
                    {d}
                </div>
                
            </div>

        );

    }
}
export default Content
