import React, { Component } from 'react';
import "./../bootstrap/bootstrapC.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton'


class MyAds extends Component {
    state={
        ads:[],
        adToDelete:'',
        isDataLoaded: false
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
            this.setState({ads:data})
            this.setState({isDataLoaded:true})
            console.log(data)})
        .catch(err => console.log(err))
    }

    render() {
        window.scrollTo(0,0);
        let skeletonCards = [1,2,3,4,]
        let  sc;
        
        
        //Skeleteon Card Ads

        for( let i = 1; i !== skeletonCards.length; i++){
            sc = skeletonCards.map((item, index)=>{
            return  <div className="card-wrapper" >
                <div className="card" style={im} >                   
                    <Skeleton height={200} />
                <div className="card-body">
                <h5 className="card-title text-left"><Skeleton /></h5><h5 className="card-title text-left"><Skeleton  /></h5>
                <div className="divider"><hr /></div>
                <p className="text-left"> <Skeleton  /></p>
                <div className="card-text text-left ad-description"><Skeleton  /></div>
                <div className="card-text text-left ad-description"><Skeleton  /></div>
                <div className="d-flex space-btw align-center ads-btn-container">
                    <span className="float-left" style={{ fontSize: '13px', color: 'grey' }}><Skeleton width={90}  /></span>
                    <span>
                        <Skeleton width={90}  />
                        {/* <Link to={"/ad/"} className="btn login-btn open-ad-btn float-right" style={{ marginTop: "0px" }}>Open Ad</Link> */}
                    </span>
                    </div>
                    </div>
                </div>
            </div>
            })
        }



        const deleteAd = (id)=>{
            console.log(id)
            this.setState({adToDelete:id},()=>{
                let val = window.confirm('Are you sure you want to delete your Ad?');
                if(val){
                    var option = {
                        method: 'POST',
                        body: JSON.stringify(this.state),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                    fetch('http://localhost:8000/deletead', option)
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
                            if(value._id === this.state.ads[index]._id){
                                console.log('indside if cond')
                                ads.splice(index,1)
                                this.setState({ads:ads},()=>console.log(this.state))
                            }
                        })

                        })
                        
                    })
                    .catch(err => {console.log(err)})
            
                    alert("Your ad has been deleted");
                    // window.location.reload();
                }
                if(!val){
                    return false
                }
            })
            // console.log(this.state.adToDelete);
           
        }
 
        let im = {
            margin: "20px 0",
        }     
        const handleOnDragStart = e => e.preventDefault()     
        const items = (data) => {
            return data.map((url, index) => {
                return (<div key={index}>
                    <img height='180' src={url} onDragStart={handleOnDragStart} alt="Adpic" />
                </div>)
            })
        }
        
        return (

            <div className="App" style={{ textAlign: "center" }}>
                <div className="display-4 mt-5 mb-5">Your Ads</div>
             
                <div className="row no-nothing">
                 {
                    this.state.isDataLoaded
                        ?
                        <>  {   this.state.ads.length?
                            this.state.ads.map((ad, index) => {
                                return (<div className="card-wrapper"  >
                                    <div class="card" style={im} >
                                        <AliceCarousel 
                                        // items={items}
                                         buttonsDisabled={true} duration={400} autoPlay={true} autoPlayInterval={5000} mouseDragEnabled >
                                             {items([ad.url1,ad.url2,ad.url3,ad.url4])}
                                            {/* <img src={cardImg} alt="Card image cap" /> */}
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
                                           <div className="text-left ">
                                                <Button  bsPrefix="edit-ad-btn no-outline no-border" onClick={()=>deleteAd(ad._id)} >Delete</Button>
                                                <Link to={"/myads/"+ad._id+"/edit"} className="edit-ad-btn float-right" >Edit</Link>
                                           </div>
                                          
                                            
                                    </div>
                                </div>)
                            })
                            :
                            <h2 style={{ margin: '10px auto', fontWeight: '400' }} >You have not posted any ads yet!</h2>
                        }</>
                        :
                 <>{sc}</>
                 } 
                  

                </div>
                <div className="container">
                    <hr/>
                </div>
                <div className="mt-5">
                    {
                        this.state.isDataLoaded
                            ?
                        <h5> Total Ads : {this.state.ads.length}</h5>
                            :
                       <div>
                            <Skeleton height={25} width={300}/>
                       </div>
                    }
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
