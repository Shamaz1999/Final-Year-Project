import React, { Component } from 'react';
import "./../bootstrap/bootstrapC.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import cardImg from './../images/6.jpg'
import {connect} from 'react-redux'


class FavAds extends Component {
    state={
        ads:[],
        user:JSON.parse(localStorage.getItem('user'))
    }

    componentDidMount(){
         //Updating User
         
         var option = {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch('http://localhost:8000/updateuser', option)
            .then(res => res.json())
            .then(data => {
                this.setState({user:data})
                console.log(this.state)
                let user = JSON.parse(localStorage.getItem('user'));
                if (user===null) {
                    user = {
                        _id: data._id,
                        name: data.name,
                        email: data.email,
                        password: data.password,
                        DOB: data.DOB,
                        phone: data.phone,
                        gender: data.gender,
                        country: data.country,
                        date: data.date,
                        address: data.address,
                        url1: data.url1,
                        about: data.about,
                        favorites : data.favorites
                    }
                    localStorage.setItem('user', JSON.stringify(user))
                    console.log(user)
                }
                user = {
                    _id: data._id,
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    DOB: data.DOB,
                    phone: data.phone,
                    gender: data.gender,
                    country: data.country,
                    date: data.date,
                    address: data.address,
                    url1: data.url1,
                    about: data.about,
                    favorites:data.favorites
                }
                localStorage.setItem('user', JSON.stringify(user))
            })
            .catch(err => console.log(err))





        let user = JSON.parse(localStorage.getItem('user'))
        let u = user.favorites;
        var arr = ["5c97d19428edf700172ef6a2","5c97b1371a1fce250ce1b105"]
        // console.log(u)
        var option = {
            method: 'POST',
            body: JSON.stringify(arr),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        fetch('http://localhost:8000/favoriteads', option)
        .then(res => res.json())
        .then(data => {
            this.setState({ads:data})
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
        // let t = 0
        // console.log(this.state.ads[t])
        
        
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
            d = <h2 style={{margin: '10px auto', fontWeight:'400'}} >You do not have any favorite ads yet!</h2>
        }
        
        return (

            <div className="App" style={{ textAlign: "center" }}>
                <div className="display-4 mt-5 mb-5">Favorite Ads</div>
             
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
export default connect(mapStateToProps)(FavAds);

// export default MyAds
