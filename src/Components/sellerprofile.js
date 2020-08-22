import React, { Component } from 'react'; 
import "./../bootstrap/bootstrapC.css";
import man from './../images/man.png'
// import girl from './../images/girl.png'
import { connect } from 'react-redux'


class Seller extends Component {
    state={
        id:this.props.match.params.adsd,
        seller:''
    }

    componentWillMount(){
      
        var option = {
            method: "POST",
            body: JSON.stringify(this.state),
            headers:{
                'Content-Type': 'application/json'
            }
        }

        fetch('http://localhost:8000/currentad', option)
        .then(res => res.json())
        .then(data =>{
            this.setState({seller:data},
            ()=>console.log(this.state),
            )
        })
        .catch(err => console.log(err))
        
    }
    
    
    render(){
        // let user = this.state.seller
        localStorage.setItem('seller', JSON.stringify(this.state.seller))
        var seller = JSON.parse(localStorage.getItem("seller"))
        console.log(seller)
        var dp= "";
        if (seller.sellerImg === "") {
            // console.log('1st')
            // if (seller.gender === "male"){
                dp = man
            // }
            // if (seller.gender === "female"){
                // dp = girl
            }
        else{
            dp = seller.sellerImg;
            console.log('2dn')
        }
        
        return(
            <div className="app">
                <div className="container">               
                    <div className="detail-container text-center">
                        <div className="profile-pic-container">
                            <img height="150" width="150" src={dp} alt="profile-pic" />
                        </div>
                        <span className="detail-text-group">
                            <label htmlFor="exampleInputEmail1">Seller Name</label>
                            <br/>
                            <input type="text" disabled name="detail-name" refs="sellerName" className="detail-input" value={seller.sellerName} />                               
                        </span>
                        <span className="detail-text-group">
                            <label htmlFor="exampleInputEmail1">Seller Location</label>
                            <br/>
                            <input type="text" disabled name="detail-info" className="detail-input" value={seller.location}  />                               
                        </span>
                        <span className="detail-text-group">
                            <label htmlFor="exampleInputEmail1">Seller Mobile Number</label>
                            <br/>
                            <input type="text" disabled name="detail-mobile" value={seller.phone} className="detail-input"/>
                        </span>
                        <span className="detail-text-group">
                            <label htmlFor="exampleInputEmail1">Seller Country</label>
                            <br/>
                            <input type="text" disabled name="detail-mobile" value={seller.sellerCountry} className="detail-input"/>
                        </span>
                       
                        <div className="container">
                        <hr/>
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
export default connect(mapStateToProps)(Seller);

// export default Seller