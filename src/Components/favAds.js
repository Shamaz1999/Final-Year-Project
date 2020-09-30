import React, { Component } from 'react';
import "./../bootstrap/bootstrapC.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class FavAds extends Component {
    state = {
        ads: [],
        user: JSON.parse(localStorage.getItem('user')),
        id: '',
        isDataLoaded: false,
        show: false,
    }

    componentDidMount() {
        //Updating User
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

        let user = JSON.parse(localStorage.getItem('user'))
        let favs = user.favorites;
        var option1 = {
            method: 'POST',
            body: JSON.stringify(favs),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch('/favoriteads', option1)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({ ads: data }, () => console.log(this.state))
                this.setState({ isDataLoaded: true })
            })
            .catch(err => console.log(err))
    }


    render() {
        const handleClose = () => this.setState({ show: false });
        const handleShow = (id) => this.setState({ show: true, id: id });

        const removefav = () => {

            console.log(this.state.id);

            var option = {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: { 'Content-Type': 'application/json' }
            }

            fetch('/removefavorite', option)
                .then(res => res.json())
                .then(data => {
                    this.setState({ user: data }, () => {
                        localStorage.setItem('user', JSON.stringify(data))
                        var ads = [...this.state.ads];
                        this.setState({ ads: ads.filter(ad => { return ad._id !== this.state.id }) })
                    })
                })
                .catch(err => console.log(err))
            this.setState({ show: false })

            toast('Ad removed from favorites!', {
                className: 'logout-toast',
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                closeButton: false,
            })

        }




        let skeletonCards = [1, 2, 3, 4,]
        let sc;
        window.scrollTo(0, 0);


        //Skeleteon Card Ads
        sc = skeletonCards.map((item, index) => {
            return <div className="card-wrapper" >
                <div className="card" style={im} >
                    <Skeleton height={200} />
                    <div className="card-body">
                        <h5 className="card-title text-left"><Skeleton /></h5><h5 className="card-title text-left"><Skeleton /></h5>
                        <div className="divider"><hr /></div>
                        <p className="text-left"> <Skeleton /></p>
                        <div className="card-text text-left ad-description"><Skeleton /></div>
                        <div className="card-text text-left ad-description"><Skeleton /></div>
                        <div className="d-flex space-btw align-center ads-btn-container">
                            <span className="float-left" style={{ fontSize: '13px', color: 'grey' }}><Skeleton width={90} /></span>
                            <span style={{ fontSize: '13px', color: 'grey', textAlign: 'right' }}><Skeleton width={90} /></span>
                        </div>
                        <div className="text-left">
                            <Skeleton width={120} />
                        </div>
                    </div>
                </div>
            </div>
        })

        let im = {
            margin: "20px 0",
        }

        const handleOnDragStart = e => e.preventDefault()

        const items = (data) => {
            return data.map((url, index) => {
                return (<div key={Math.random()}>
                    <img height='180' src={url} onDragStart={handleOnDragStart} alt="Adpic" />
                </div>)
            })
        }
        return (

            <div className="fav-ads-container text-color" style={{ textAlign: "center" }}>
                <div className="display-4 fav-ads-heading">Favorite Ads</div>

                <div className="row no-nothing">
                    {
                        this.state.isDataLoaded
                            ?
                            <>{this.state.ads.length ?
                                this.state.ads.map((ad, index) => {
                                    return (<div className="card-wrapper" key={Math.random()} >
                                        <div class="card" style={im} >
                                            <AliceCarousel
                                                buttonsDisabled={true} duration={400} autoPlay={true} autoPlayInterval={5000} mouseDragEnabled >
                                                {items([ad.url1, ad.url2, ad.url3, ad.url4])}
                                            </AliceCarousel>
                                            <div class="card-body">
                                                <h5 className='card-title text-left'>{ad.adTitle}</h5>
                                                <h5 className='card-title text-left'>Rs {ad.price}</h5>
                                                <div className="divider"><hr className="ad-hr" /></div>
                                                <div className="text-left">Ad Id : {ad._id}</div>
                                                <div className="card-text text-left ad-description">{ad.description}</div>
                                                <div className="d-flex space-btw align-center ads-btn-container">
                                                    <span className="float-left" style={{ fontSize: '13px', color: 'grey' }}>{ad.location}</span>
                                                    <span style={{ fontSize: '13px', color: 'grey' }}>
                                                        {ad.date}
                                                    </span>
                                                </div>
                                                <div className="my-ads-btns-wrapper">
                                                    <button className="postAd-submit-btn my-ad-btn no-outline no-border" onClick={() => { handleShow(ad._id) }} >Remove</button>
                                                    <button className="postAd-submit-btn my-ad-btn no-outline no-border">
                                                        <Link to={"/ad/" + ad._id} style={{ color: 'white' }} >Open</Link>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Confirmation Modal */}

                                    </div>)
                                })
                                :
                                <h2 className="no-ads-msg" style={{ margin: '10px auto', fontWeight: '400' }} >You do not have any favorite ads yet!</h2>
                            }</>
                            :
                            <>{sc}</>
                    }

                </div>
                <Modal className="confirmation-modal" show={this.state.show} onHide={handleClose}>
                    <div className="background-class text-color">
                        <Modal.Header closeButton>
                            <Modal.Title>Confirm</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you sure you want to remove this ad from favorites?</Modal.Body>
                        <Modal.Footer className="confirmation-modal-footer">
                            <Button className="confirmation-modal-yes-btn no-outline" onClick={() => removefav()}>Yes</Button>
                            <Button className="confirmation-modal-no-btn no-outline" onClick={handleClose}>No</Button>
                        </Modal.Footer>
                    </div>
                </Modal>
                <div className="container">
                    <hr />
                </div>
                <div className="mt-5">
                    {this.state.isDataLoaded
                        ?
                        <h5> Total Ads : {this.state.ads.length}</h5>
                        :
                        <div>
                            <Skeleton height={25} width={300} />
                        </div>
                    }
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
