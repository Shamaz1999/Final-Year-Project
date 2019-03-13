import React, { Component } from 'react';
import "./../bootstrap/bootstrapC.css"
import { Link } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

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
                d = arr.map((index) =>
                    <div className="col-md-3"  >
                        <div class="card" style={im} >
                            <img class="card-img-top" src='images/7.jpg' alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                )
            }

        }
        const handleOnDragStart = e => e.preventDefault()
        
        return (

            <div className="App" style={{ textAlign: "center" }}>
                <div className="container">
                    <AliceCarousel showSlideInfo={true} buttonsDisabled={true} duration={400} autoPlay={true} autoPlayInterval={5000} mouseDragEnabled >
                        <img src="images/1.jpg" onDragStart={handleOnDragStart} className="yours-custom-class" />
                        <img src="images/1.jpg" onDragStart={handleOnDragStart} className="yours-custom-class" />
                        <img src="images/1.jpg" onDragStart={handleOnDragStart} className="yours-custom-class" />
                        <img src="images/1.jpg" onDragStart={handleOnDragStart} className="yours-custom-class" />
                        <img src="images/2.jpg" onDragStart={handleOnDragStart} className="yours-custom-class" />
                    </AliceCarousel>
                </div>
                <div className="row no-nothing">
                    {d}
                </div>
                
            </div>

        );

    }
}
export default Content
