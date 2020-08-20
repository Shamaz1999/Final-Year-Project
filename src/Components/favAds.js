import React, { Component } from 'react';
import "./../bootstrap/bootstrapC.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'


class FavAds extends Component {
    state = {
        ads: [],
        user: JSON.parse(localStorage.getItem('user')),
        id:''
    }

    componentDidMount() {
        console.log('did mount ran');
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
                this.setState({ user: data })
                let user = JSON.parse(localStorage.getItem('user'));
                if (user === null) {
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
                        favorites: data.favorites
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
                    favorites: data.favorites
                }
                localStorage.setItem('user', JSON.stringify(user))
                console.log('User Updated' + user.favorites)
            })
            .catch(err => console.log(err))

        




        let user = JSON.parse(localStorage.getItem('user'))
        let favs = user.favorites;
        console.log('THis is user ' + user.favorites);
        console.log('THis is fav ' + favs);
        console.log('THis is state ' + this.state.user.favorites);

        var option = {
            method: 'POST',
            body: JSON.stringify(favs),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch('http://localhost:8000/favoriteads', option)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({ ads: data },()=>console.log(this.state))
            })
            .catch(err => console.log(err))
    }


    render() {

        const removefav = (id) => {
            this.setState({id:id}, ()=>{

                var c = window.confirm('Are you sure you want to remove it from favorites?')
                if (c) {
                    var option = {
                        method: 'POST',
                        body: JSON.stringify(this.state),
                        headers: { 'Content-Type': 'application/json' }
                    }
    
                    fetch('http://localhost:8000/removefavorite', option)
                        .then(res => res.json())
                        .then(data => {
                            this.setState({ user: data }, ()=>{
                                console.log(this.state)
                                let user = JSON.parse(localStorage.getItem('user'));
                            if (user === null) {
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
                                    favorites: data.favorites
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
                                favorites: data.favorites
                            }
                            localStorage.setItem('user', JSON.stringify(user))
                            var ads = [...this.state.ads];
                            ads.map((value,index)=>{
                                console.log('indside map func')
                                console.log(value + " "+this.state.ads[index]._id )
                                if(value._id == this.state.ads[index]._id){
                                    console.log('indside if cond')
                                    ads.splice(index,1)
                                    this.setState({ads:ads},()=>console.log(this.state))
                                }
                            })

                            })
                            
                        })
                        .catch(err => console.log(err))


                }
                else{
                    return false
                }
            })
        }





        window.scrollTo(0, 0);

        let im = {
            margin: "20px 0",
        }

        const handleOnDragStart = e => e.preventDefault()

        const items = (data) => {
            return data.map((url, index) => {
                return (<div key={index}>
                    <img height='180' src={url} onDragStart={handleOnDragStart} alt="Ad Image" />
                </div>)
            })
        }
        return (

            <div className="App" style={{ textAlign: "center" }}>
                <div className="display-4 mt-5 mb-5">Favorite Ads</div>

                <div className="row no-nothing">
                    {this.state.ads.length ?
                        this.state.ads.map((ad, index) => {
                            return (<div className="col-md-4"  >
                                <div class="card" style={im} >
                                    <AliceCarousel
                                        buttonsDisabled={true} duration={400} autoPlay={true} autoPlayInterval={5000} mouseDragEnabled >
                                        {items([ad.url1, ad.url2, ad.url3, ad.url4])}
                                    </AliceCarousel>
                                    <div class="card-body">
                                        <h6 className='float-left'>{ad.adTitle}</h6>
                                        <h6 className='float-right'>Rs {ad.price}</h6>
                                        <div className="clear"></div>
                                        <p className="ad-description">{ad.description}</p>
                                        <div>
                                            <div className="float-left small">{ad.location}</div>
                                            <div className="float-right small">{ad.date}</div>
                                        </div>
                                    </div>
                                    <div className="text-left">
                                        <Button onClick={() => removefav(ad._id)} bsPrefix="edit-ad-btn no-outline no-border" >Remove</Button>
                                    </div>
                                </div>
                            </div>)
                        })
                        :
                        <h2 style={{ margin: '10px auto', fontWeight: '400' }} >You do not have any favorite ads yet!</h2>
                    }
                </div>
                <div className="container">
                    <hr />
                </div>
                <div className="mt-5">
                    Total {this.state.ads.length} Ads
                </div>
            </div>

        );

    }
}
const mapStateToProps = (store) => {
    return {
        ads: store.adsReducer
    }
}
export default connect(mapStateToProps)(FavAds);

// export default MyAds
