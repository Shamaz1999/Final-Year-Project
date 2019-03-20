import React, { Component } from 'react';
import "./../bootstrap/bootstrapC.css"
import { Link } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

class Content extends Component {
    constructor(props){
        super(props);
        this.state={
            ads:""
        }
    }
    componentDidMount(){

        var option = {
            method: 'POST',
            body: '',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        let ads ='a';
        fetch('http://localhost:8000/allads', option)
        .then(res => res.json())
        // .then(data => console.log(data) )
        .then(data=> {console.log(data)
        this.setState({ads:data})
        console.log(this.state.ads);
        })
        .catch(err => console.log(err))
            // console.log(ads)
            // console.log(this.state);
        }
    

    render() {

        let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "g", "f"];
        let d;

        let im = {
            margin: "20px 0",
        }
        if (arr.length !== 0) {
            for (let i = 0; i <= arr.length; i++) {
                let adId;
                d = arr.map((index) =>
                    <div className="col-md-3" >
                        <div class="card" style={im} >                        
                            <img class="card-img-top" src={require("./../images/4.jpg")} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title text-left">Ad Title</h5><h5 class="card-title text-left">Rs 1400</h5>
                                <p className="text-left">Ad Id : {adId = parseInt(Math.random()*100000000)}</p>
                                <p class="card-text text-left">Ad Description</p>
                                <Link to={"/ad/id-"+adId} class="btn login-btn float-right" style={{marginTop:"0px"}}>Open Ad</Link>
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
                        <img src={require('./../images/ca4.jpg')} height='500' width='1200' onDragStart={handleOnDragStart} className="yours-custom-class" />
                        <img src={require('./../images/ca3.jpg')} height='500' width='1200' onDragStart={handleOnDragStart} className="yours-custom-class" />
                        <img src={require('./../images/ca2.jpg')} height='500' width='1200' onDragStart={handleOnDragStart} className="yours-custom-class" />
                        <img src={require('./../images/ca1.jpg')} height='500' width='1200' onDragStart={handleOnDragStart} className="yours-custom-class" />
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
