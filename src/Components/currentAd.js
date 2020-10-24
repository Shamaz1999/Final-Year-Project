import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { connect } from 'react-redux'
import FontAwesome from 'react-fontawesome'
import Skeleton from 'react-loading-skeleton'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Slider from "react-slick";


class Ad extends Component {

    state = {
        id: this.props.match.params.adId,
        ad: '',
        user: JSON.parse(localStorage.getItem("user")),
        isFav: false,
        isDataLoaded: false,
        category: '',
        similarAdsLoaded: false,
        similarAds: '',
        sa: '',
    }


    async componentDidMount() {

        //Updating User
        var isFav = false;
        var user = JSON.parse(localStorage.getItem("user"));
        var adId = this.props.match.params.adId;

        if (user) {
            var option = {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            try {
                const response = await fetch('/updateuser', option)
                const data = await response.json()
                console.log(data)
                this.setState({ user: data })
                localStorage.setItem('user', JSON.stringify(data))
            } catch (err) {
                console.log(err)
            }
            isFav = user.favorites.includes(adId);
            this.setState({ isFav: isFav });
        }

        var option1 = {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const currentAdResponse = await fetch('/currentad', option1);
            const data = await currentAdResponse.json()
            this.setState({ ad: data })
            this.setState({ category: data.category })
            this.setState({ isDataLoaded: true });
            this.props.dispatch({ type: 'insertads', payload: this.state.ad.sellerId })
            var option2 = {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            try {
                const similarAds = await fetch('/categoryads', option2)
                const data = await similarAds.json()
                console.log(data)
                let d = data.filter(ad => { return ad._id !== this.props.match.params.adId })
                this.setState({ similarAdsLoaded: true })
                this.setState({ similarAds: d })
            } catch (err) {
                console.log(err)
            }

        } catch (err) {
            console.log(err)
        }
    }

    phoneLoginAlert = () => {
        var user = JSON.parse(localStorage.getItem("user"))
        if (user !== "")
            toast('You need to log in to view the number', {
                className: 'logout-toast',
                position: "bottom-left",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                closeButton: false,
            });
        else
            return
    }


    chatLoginAlert = () => {
        var user = JSON.parse(localStorage.getItem("user"))
        if (user !== "")
            toast('You need to log in to chat with this user!', {
                className: 'logout-toast',
                position: "bottom-left",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                closeButton: false,
            });
        else
            return
    }
    favLoginAlert = () => {
        var user = JSON.parse(localStorage.getItem("user"))
        if (user !== "")
            toast('You need to log In to mark as favourite!', {
                className: 'logout-toast',
                position: "bottom-left",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                closeButton: false,
            });
        else
            return
    }

    render() {
        var user = JSON.parse(localStorage.getItem("user"));

        let markFav = () => {
            if (!this.state.isFav) {

                var option = {
                    method: 'POST',
                    body: JSON.stringify(this.state),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }

                fetch('/markfavorite', option)
                    .then(res => res.json())
                    .then(data => {
                        this.setState({ user: data });
                        localStorage.setItem('user', JSON.stringify(data))
                    })
                    .catch(err => console.log(err))

                this.setState({ isFav: true });
                toast('Added to favorites!', {
                    className: 'logout-toast',
                    position: "bottom-left",
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    closeButton: false,

                });
            }
            else {

                var option1 = {
                    method: 'POST',
                    body: JSON.stringify(this.state),
                    headers: { 'Content-Type': 'application/json' }
                }

                fetch('/removefavorite', option1)
                    .then(res => res.json())
                    .then(data => {
                        this.setState({ user: data })
                        localStorage.setItem('user', JSON.stringify(data))
                    })
                    .catch(err => console.log(err))

                this.setState({ isFav: false })
                toast('Removed from favorites!', {
                    className: 'logout-toast',
                    position: "bottom-left",
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    closeButton: false,
                });
            }

        }

        var userId;
        if (this.state.user === null) {
            userId = 'empty;'
        }
        else {
            userId = this.state.user._id;
        }

        const handleOnDragStart = e => e.preventDefault()
        var similarAds;
        var arr = [this.state.ad.url1, this.state.ad.url2, this.state.ad.url3, this.state.ad.url4]
        let item = [1, 2, 3, 4].map((i) => (
            <div key={i}>
                <img key={this.state.ad.url1} src={arr[i - 1]} height='500' width='1200' onDragStart={handleOnDragStart} alt="adpic" className="current-ad-pictures" />
            </div>
        ))

        const items = (data) => {
            return data.map((url, index) => {
                return (<div key={Math.random()}>
                    <img height='150' src={url} onDragStart={handleOnDragStart} alt="Ad-Pics" />
                </div>)
            })
        }

        // Similar Ads
        if (this.state.similarAds.length !== 0) {
            for (let i = 0; i <= this.state.similarAds.length; i++) {
                similarAds = this.state.similarAds.map((item, index) =>
                    <div key={Math.random()} className="similar-ads-card-wrapper" >
                        <div className="similar-ad-card" >
                            <AliceCarousel buttonsDisabled={true} duration={400} autoPlay={true} autoPlayInterval={5000} mouseDragEnabled >
                                {items([item.url1, item.url2, item.url3, item.url4])}
                            </AliceCarousel>
                            <div className="card-body similar-card-body">
                                <h5 className="card-title similar-card-title text-left">{this.state.similarAds[index].adTitle}</h5>
                                <div className="card-title similar-card-small-title text-left">Price: {this.state.similarAds[index].price}</div>
                                <div className="d-flex space-btw align-center">
                                    <span className="float-left" style={{ fontSize: '11px', color: 'grey' }}>{this.state.similarAds[index].location}</span>
                                    <span style={{ fontSize: '11px', color: 'grey' }}>
                                        {this.state.similarAds[index].date}
                                    </span>
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <Link to={"/ad/" + this.state.similarAds[index]._id} className="btn login-btn similar-ad-btn postAd-submit-btn" style={{ marginTop: "5px" }}>Open</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        } else {
            similarAds = <h4 className="message" >Sorry no similar ads have been posted yet!</h4>
        }
        var settings = {
            dots: true,
            dotsClass: "slick-dots my-dots",
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            swipeToSlide: true,
            infinite: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: true
                    }
                },
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true
                    }
                },
            ]
        };

        let skeletonCards = [1, 2, 3]
        let sc;

        //Skeleteon Card Ads
        sc = skeletonCards.map((item, index) => {
            return <div className="similar-ads-card-wrapper card-wrapper" >
                <div className="similar-ad-card" >
                    <Skeleton className="skeleton-loader" height={150} />
                    <div className="card-body">
                        <h5 className="card-title text-left"><Skeleton className="skeleton-loader" /></h5><h5 className="card-title text-left"><Skeleton className="skeleton-loader" /></h5>
                        <div className="d-flex space-btw align-center ads-btn-container">
                            <span className="float-left" style={{ fontSize: '13px', color: 'grey' }}><Skeleton className="skeleton-loader" width={90} /></span>
                            <span style={{ fontSize: '13px', color: 'grey', textAlign: 'right' }}><Skeleton className="skeleton-loader" width={90} /></span>
                        </div>
                    </div>
                </div>
            </div>
        })

        return (
            <div className="app text-color " >
                <div className="row" >
                    <div className="col-md-8" style={{ margin: "0px " }}>
                        <div className="ad-img-container">
                            {this.state.isDataLoaded
                                ?
                                <AliceCarousel items={item} autoPlay={false} mouseDragEnabled />
                                :
                                <Skeleton className=" skeleton-loader current-ad-images-skeleton" />
                            }
                        </div>
                        <div className="ad-desc-container">
                            {this.state.isDataLoaded
                                ?
                                <h4>Details</h4>
                                :
                                <div className="mb-2">
                                    <Skeleton className="skeleton-loader" height={30} width={180} />
                                </div>
                            }
                            <div className="ad-detail-container">
                                {this.state.isDataLoaded
                                    ?
                                    <div className="current-ad-type-container">
                                        <p className="ads-type">Type</p>
                                        <div className="ads-type">{this.state.ad.category}</div>
                                    </div>
                                    :
                                    <Skeleton className="skeleton-loader" width={200} />
                                }
                                {this.state.isDataLoaded
                                    ?
                                    <div className="current-ad-type-container">
                                        <p className="ads-type">Condition</p>
                                        <div className="ads-type">{this.state.ad.condition}</div>
                                    </div>
                                    :
                                    <div className="">
                                        <Skeleton className="skeleton-loader" width={200} />
                                    </div>
                                }
                            </div>
                            <div className="contaner">
                                <hr />
                            </div>
                            {this.state.isDataLoaded
                                ?
                                <div>
                                    <h4>Description</h4>
                                    <div style={{ marginTop: "15px" }}>
                                        {this.state.ad.description}
                                    </div>
                                </div>
                                :
                                <div className="mb-4 mt-4">
                                    <Skeleton className="skeleton-loader" height={30} width={180} />
                                    <div className="mt-2">
                                        <Skeleton className="skeleton-loader" />
                                        <Skeleton className="skeleton-loader" />
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="similar-ads-wrapper">
                            <div className="similar-container">
                                {this.state.isDataLoaded
                                    ?
                                    <h4>Similar Ads</h4>
                                    :
                                    <div className="mb-2">
                                        <Skeleton className="skeleton-loader" height={30} width={180} />
                                    </div>
                                }

                                <div className="similar-ads-cont">
                                    {this.state.similarAdsLoaded
                                        ?
                                        <Slider  {...settings}>
                                            {similarAds}
                                        </Slider>
                                        :
                                        <>{sc}</>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="row">
                            <div className="col-md-12" style={{ padding: "0px" }}>
                                <div className="price-container" style={{ padding: "15px 30px" }}>
                                    {this.state.isDataLoaded
                                        ?
                                        <h2 className="current-ad-price float-left">Rs {this.state.ad.price}</h2>
                                        :
                                        <div className="float-left">
                                            <Skeleton className="skeleton-loader current-ad-price-skeleton" height={40} width={200} />
                                        </div>
                                    }
                                    <div className="favourite-container float-right">
                                        {this.state.ad.sellerId === userId
                                            ?
                                            ""
                                            :
                                            <>{this.state.isDataLoaded
                                                ?
                                                <FontAwesome name={this.state.isFav ? "star" : "star-o"} id="favIcon" size="2x" ref="fav" className="favorite-star-icon"
                                                    onClick={user ? markFav : this.favLoginAlert} />
                                                :
                                                <div style={{ position: 'relative', bottom: '9px' }}>
                                                    <Skeleton className="skeleton-loader" circle={true} height={40} width={40} />
                                                </div>
                                            }</>
                                        }
                                    </div>
                                    <div className="adTitle-container clear">
                                        {this.state.isDataLoaded
                                            ?
                                            <>{this.state.ad.adTitle}</>
                                            :
                                            <div className="pt-3">
                                                <Skeleton className="skeleton-loader" height={15} width={90} />
                                            </div>
                                        }
                                    </div>
                                    <div className="container1">
                                        <div className="loc-container float-left">
                                            {this.state.isDataLoaded
                                                ?
                                                <>{this.state.ad.location}</>
                                                :
                                                <Skeleton className="skeleton-loader" height={10} width={90} />
                                            }
                                        </div>
                                        <div className="loc-container float-right">
                                            {this.state.isDataLoaded
                                                ?
                                                <>{this.state.ad.date}</>
                                                :
                                                <Skeleton className="skeleton-loader" height={10} width={90} />
                                            }
                                        </div>
                                        <div style={{ marginBottom: "10px" }} className="clear"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 no-padding" >
                            <div className="seller-container-wrapper">
                                <div className="seller-container">
                                    {this.state.isDataLoaded
                                        ?
                                        <h5 className="seller-desc-heading">Seller Description</h5>
                                        :
                                        <Skeleton className="skeleton-loader" height={30} width={200} />
                                    }
                                    <div className="seller-info-container ">
                                        <div className="seller-pic-name-container">
                                            <div className="seller-img-container">
                                                {this.state.isDataLoaded
                                                    ?
                                                    <img src={this.state.ad.sellerImg} width='100' height="80" alt="Profile Pic" />
                                                    :
                                                    <Skeleton className="skeleton-loader" height={100} width={120} />
                                                }
                                            </div>
                                            <div className="seller-name-container">
                                                {this.state.isDataLoaded
                                                    ?
                                                    <Link className="current-ad-seller-name" to={"/sellerProfile/" + this.state.ad.sellerId}>{this.state.ad.sellerName}</Link>
                                                    :
                                                    <Skeleton className="skeleton-loader" height={20} width={200} />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        {this.state.isDataLoaded
                                            ?
                                            <div className="container2">
                                                <span className="phone-container">
                                                    <div className="number"
                                                        onClick={user ? () => true : this.phoneLoginAlert}>
                                                        <span className="phone-image-conainer">
                                                            <FontAwesome name="phone" className="current-ad-phone-icon" />
                                                        </span>
                                                        <input className="no-border no-outline phone-no-field " disabled value={this.state.ad.phone}
                                                            type={user ? "text" : "password"} />
                                                    </div>
                                                </span>
                                                <span className="user-chat-btn-container ">
                                                    {
                                                        this.state.ad.sellerId === userId
                                                            ?
                                                            <Link to={"/home/myads/" + this.state.ad._id + "/edit"} className="current-edit-ad-btn edit-ad-btn" >Edit</Link>
                                                            :
                                                            <button className="btn login-btn current-ad-chat-btn"
                                                                onClick={user ? () => this.props.history.push('/home/' + this.state.ad.sellerId + '/chat') : this.chatLoginAlert}>
                                                                Chat
                                                    </button>
                                                    }
                                                </span>
                                            </div>
                                            :
                                            <Skeleton className="skeleton-loader" height={30} />
                                        }
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

