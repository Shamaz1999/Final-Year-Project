import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { connect } from 'react-redux'
import FontAwesome from 'react-fontawesome'
import Skeleton from 'react-loading-skeleton'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class Ad extends Component {

    state = {
        id: this.props.match.params.adId,
        ad: '',
        user: JSON.parse(localStorage.getItem("user")),
        isFav: false,
        isDataLoaded: false
    }


    componentDidMount() {

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

            fetch('/updateuser', option)
                .then(res => res.json())
                .then(data => {
                    this.setState({ user: data })

                    localStorage.setItem('user', JSON.stringify(data))
                })
                .catch(err => console.log(err))


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

        fetch('/currentad', option1)
            .then(res => res.json())
            .then(data => {
                this.setState({ ad: data })
                this.setState({ isDataLoaded: true });
                this.props.dispatch({ type: 'insertads', payload: this.state.ad.sellerId })
            })
            .catch(err => console.log(err))
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

        window.scrollTo(0, 0);
        const handleOnDragStart = e => e.preventDefault()
        var arr = [this.state.ad.url1, this.state.ad.url2, this.state.ad.url3, this.state.ad.url4]
        let item = [1, 2, 3, 4].map((i) => (
            <div key={i}>
                <img key={this.state.ad.url1} src={arr[i - 1]} height='500' width='1200' onDragStart={handleOnDragStart} alt="adpic" className="current-ad-pictures" />
            </div>
        ))
        return (
            <div className="app text-color " >
                <div className="row" >
                    <div className="col-md-8" style={{ margin: "0px " }}>
                        <div className="ad-img-container">
                            {this.state.isDataLoaded
                                ?
                                <AliceCarousel items={item} autoPlay={false} mouseDragEnabled />
                                :
                                <Skeleton className="current-ad-images-skeleton" />
                            }
                        </div>
                        <div className="ad-desc-container">
                            {this.state.isDataLoaded
                                ?
                                <h4>Details</h4>
                                :
                                <div className="mb-2">
                                    <Skeleton height={30} width={180} />
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
                                    <Skeleton width={200} />
                                }
                                {this.state.isDataLoaded
                                    ?
                                    <div className="current-ad-type-container">
                                        <p className="ads-type">Condition</p>
                                        <div className="ads-type">{this.state.ad.condition}</div>
                                    </div>
                                    :
                                    <div className="">
                                        <Skeleton width={200} />
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
                                    <Skeleton height={30} width={180} />
                                    <div className="mt-2">
                                        <Skeleton />
                                        <Skeleton />
                                    </div>
                                </div>
                            }

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
                                            <Skeleton className="current-ad-price-skeleton" height={40} width={200} />
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
                                                    <Skeleton circle={true} height={40} width={40} />
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
                                                <Skeleton height={15} width={90} />
                                            </div>
                                        }
                                    </div>
                                    <div className="container1">
                                        <div className="loc-container float-left">
                                            {this.state.isDataLoaded
                                                ?
                                                <>{this.state.ad.location}</>
                                                :
                                                <Skeleton height={10} width={90} />
                                            }
                                        </div>
                                        <div className="loc-container float-right">
                                            {this.state.isDataLoaded
                                                ?
                                                <>{this.state.ad.date}</>
                                                :
                                                <Skeleton height={10} width={90} />
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
                                        <Skeleton height={30} width={200} />
                                    }
                                    <div className="seller-info-container ">
                                        <div className="seller-pic-name-container">
                                            <div className="seller-img-container">
                                                {this.state.isDataLoaded
                                                    ?
                                                    <img src={this.state.ad.sellerImg} width='100' height="80" alt="Profile Pic" />
                                                    :
                                                    <Skeleton height={100} width={120} />
                                                }
                                            </div>
                                            <div className="seller-name-container">
                                                {this.state.isDataLoaded
                                                    ?
                                                    <Link className="current-ad-seller-name" to={"/sellerProfile/" + this.state.ad.sellerId}>{this.state.ad.sellerName}</Link>
                                                    :
                                                    <Skeleton height={20} width={200} />
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
                                            <Skeleton height={30} />
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

