import React, { Component } from 'react';
import "./../bootstrap/bootstrapC.css"
import { Link } from 'react-router-dom'
import cardImg from './../images/6.jpg'

class MyAds extends Component {

    render() {
        let arr = [0, 1, 2, 3, 4, "f"];
        let d;

        let im = {
            margin: "20px 0",
        }
        if (arr.length !== 0) {
            for (let i = 0; i <= arr.length; i++) {
                d = arr.map((index) =>
                    <div className="col-md-3"  >
                        <div class="card" style={im} >                        
                            <img class="card-img-top" src={cardImg} alt="Card image cap" />
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
                <div className="display-4 mt-5 mb-5">Your Ads</div>
             
                <div className="row no-nothing">
                    {d}
                </div>
                <div className="container">
                    <hr/>
                </div>
                <div className="mt-5">
                    Total {arr.length} Ads
                </div>
            </div>

        );

    }
}
export default MyAds
