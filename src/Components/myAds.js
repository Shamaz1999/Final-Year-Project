import React, { Component } from 'react';
import "./../bootstrap/bootstrapC.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import cardImg from './../images/6.jpg'
import {connect} from 'react-redux'


class MyAds extends Component {
    state={
        ads:[]
    }

    componentDidMount(){
        let u = JSON.parse(localStorage.getItem('user'))
        var option = {
            method: 'POST',
            body: JSON.stringify(u),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        fetch('http://localhost:8000/userads', option)
        .then(res => res.json())
        .then(data => {
            this.setState({ads:data},console.log(this.state.ads[0]))
            console.log(data)})
        .catch(err => console.log(err))
    }

    render() {
        window.scrollTo(0,0);

        let d;
        let im = {
            margin: "20px 0",
        }
        
        const handleOnDragStart = e => e.preventDefault()
        let t = 0
        console.log(this.state.ads[t])
        
        
        if (this.state.ads.length !== 0) {
            for (let i = 0; i <= this.state.ads.length; i++) {
                var q = -1;
                q++
                let url = [this.state.ads[q].url1,this.state.ads[q].url2,this.state.ads[q].url3,this.state.ads[q].url4]
                let item =[1,2,3,4].map((u)=>(
                    <div key={u}>
                    <img height='180'  src={url} onDragStart={handleOnDragStart} alt="Ad Image" />
                    </div>
                ))
                d = this.state.ads.map((index,y) =>
                    <div className="col-md-4"  >
                        <div class="card" style={im} >
                        <AliceCarousel items={item} buttonsDisabled={true} duration={400} autoPlay={true} autoPlayInterval={5000}    mouseDragEnabled >
                        
                            {/* <img  src={cardImg} alt="Card image cap" /> */}
                    </AliceCarousel>                       
                            <div class="card-body">
                                <h6 className='float-left'>{this.state.ads[y].adTitle}</h6>
                                <h6 className='float-right'>Rs {this.state.ads[y].price}</h6>
                                <div className="clear"></div>
                                <p>{this.state.ads[y].description}</p>
                                <div>
                                    <div className="float-left small">{this.state.ads[y].location}</div>
                                    <div className="float-right small">{this.state.ads[y].date}</div>    
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        } else{
            d = <h2 style={{margin: '10px auto', fontWeight:'400'}} >You have not posted any ads yet!</h2>
        }
        
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
                    Total {this.state.ads.length} Ads
                </div>
            </div>

        );

    }
}
const mapStateToProps=(store)=>{
    return {
        ads:store.adsReducer
    }
}
export default connect(mapStateToProps)(MyAds);

// export default MyAds
