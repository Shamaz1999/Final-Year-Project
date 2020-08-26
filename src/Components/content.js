import React, { Component } from 'react';
import "./../bootstrap/bootstrapC.css"
import { Link } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ads: "",
            showingSearched: false,
        }
    }
    componentDidMount() {
        var option = {
            method: 'POST',
            body: '',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch('http://localhost:8000/allads', option)
            .then(res => res.json())
            // .then(data => console.log(data) )
            .then(data => {
                console.log(data)
                this.setState({ ads: data })
            })
            .catch(err => console.log(err))


        // let rt = JSON.parse(localStorage.getItem('sa'))

        // if(rt !== null){
        //     if(rt.length !== 0){
        //         document.getElementById('ad').classList.add("display")
        //         document.getElementById('as').classList.add("hidd")
        //     }
        //     if(rt.length === 0 ){
        //         document.getElementById('ad').classList.add("display")
        //         document.getElementById('as').classList.add("hidd")
        //     }

        // }

    }

    allAds = () => {
        localStorage.removeItem('sa')
        this.setState({ showingSearched: false })
    }

    render() {
        window.scrollTo(0, 0);

        let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 'a', "g", "f"];
        let d;
        let e;
        console.log(e)
        let searchedAds = JSON.parse(localStorage.getItem('sa'));
        const handleOnDragStart = e => e.preventDefault();

        const items = (data) => {
            return data.map((url, index) => {
                return (<div key={index}>
                    <img height='200' src={url} onDragStart={handleOnDragStart} alt="Ad-Pics" />
                </div>)
            })
        }

        let im = {
            margin: "20px 0",
        }
        if (this.state.ads.length !== 0) {
            for (let i = 0; i <= arr.length; i++) {
                let adId;
                d = this.state.ads.map((item, index) =>
                    <div key={index} className="card-wrapper" >
                        <div className="card" style={im} >
                            <AliceCarousel buttonsDisabled={true} duration={400} autoPlay={true} autoPlayInterval={5000} mouseDragEnabled >
                                {items([item.url1, item.url2, item.url3, item.url4])}
                            </AliceCarousel>
                            <div className="card-body">
                                <h5 className="card-title text-left">{this.state.ads[index].adTitle}</h5><h5 className="card-title text-left">Price: {this.state.ads[index].price}</h5>
                                <div className="divider"><hr /></div>
                                <p className="text-left">Ad Id : {adId = this.state.ads[index]._id}</p>
                                <div className="card-text text-left ad-description">{this.state.ads[index].description}</div>
                                <div className="d-flex space-btw align-center ads-btn-container">
                                    <span className="float-left" style={{ fontSize: '13px', color: 'grey' }}>{this.state.ads[index].date}</span>
                                    <span>
                                        <Link to={"/ad/" + adId} className="btn login-btn open-ad-btn float-right" style={{ marginTop: "0px" }}>Open Ad</Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        } else {
            d = <h2 style={{ margin: '10px auto', fontWeight: '400' }} >Sorry no ads have been posted yet!</h2>
        }


        // Searched Ads

        if (searchedAds !== null) {

            if (searchedAds.length !== 0) {
                for (let i = 0; i <= searchedAds.length; i++) {
                    e = searchedAds.map((item, index) =>
                        <div key={index} className="card-wrapper" >
                            <div className="card" style={im} >
                                <AliceCarousel
                                    buttonsDisabled={true} duration={400} autoPlay={true} autoPlayInterval={5000} mouseDragEnabled >
                                    {items([item.url1, item.url2, item.url3, item.url4])}
                                </AliceCarousel>
                                <div className="card-body">
                                    <h5 className="card-title text-left">{item.adTitle}</h5><h5 className="card-title text-left">Price: {item.price}</h5>
                                    <div className="divider"><hr /></div>
                                    <p className="text-left">Ad Id : {item._id}</p>
                                    <div className="card-text text-left ad-description">{item.description}</div>
                                    <div className="d-flex space-btw align-center ads-btn-container">
                                        <span className="float-left" style={{ fontSize: '13px', color: 'grey' }}>{item.date}</span>
                                        <span>
                                            <Link to={"/ad/" + item._id} className="btn login-btn open-ad-btn float-right" style={{ marginTop: "0px" }}>Open Ad</Link>
                                        </span>
                                    </div>
                                    {/* <Link to={"/ad/"+item._id} className="btn login-btn float-right" style={{marginTop:"0px"}}>Open Ad</Link> */}
                                </div>
                            </div>
                        </div>
                    )
                }
            }
            else {
                console.log("this is 1st")
                e = <h2 style={{ margin: '10px auto', fontWeight: '400' }} >Sorry, No ads found matching your query!</h2>
            }
        }
        if (searchedAds === null) {
            console.log("this is 2nd")

            e = <h2 style={{ margin: '10px auto', fontWeight: '400' }} >You have not searched for an ad</h2>

        }

        var sa = localStorage.getItem('sa')

        return (

            <div className="App" style={{ textAlign: "center" }}>
                <div className="container" style={{ marginBottom: "50px" }}>
                    <AliceCarousel showSlideInfo={true} buttonsDisabled={true} duration={400} autoPlay={true} autoPlayInterval={5000} mouseDragEnabled >
                        <img src={require('./../images/ca4.jpg')} alt="slider1" height='500' width='1200' onDragStart={handleOnDragStart} className="yours-custom-class" />
                        <img src={require('./../images/ca3.jpg')} alt="slider2" height='500' width='1200' onDragStart={handleOnDragStart} className="yours-custom-class" />
                        <img src={require('./../images/ca2.jpg')} alt="slider3" height='500' width='1200' onDragStart={handleOnDragStart} className="yours-custom-class" />
                        <img src={require('./../images/ca1.jpg')} alt="slider4" height='500' width='1200' onDragStart={handleOnDragStart} className="yours-custom-class" />
                    </AliceCarousel>
                </div>
                <div className="row">
                    {sa ?
                        <div style={{ width: '100%' }} className="">
                            <span className="seached-ad-heading">Searched Ads</span>
                            <div className="ads-container">
                                {e}
                            </div>
                            <button className="btn login-btn" onClick={this.allAds}>All Ads</button>
                        </div>
                        :
                        <div id="as" className="ads-container">
                            {d}
                        </div>
                    }

                </div>

            </div>

        );

    }
}
export default Content
