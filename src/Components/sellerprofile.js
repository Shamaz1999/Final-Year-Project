import React, { Component } from 'react'; 
import "./../bootstrap/bootstrapC.css";
import man from './../images/man.png'
import girl from './../images/girl.png'
// import girl from './../images/girl.png'
import { connect } from 'react-redux'


class Seller extends Component {
    state={
        sellerId:this.props.match.params.sellerId,
        // sellerId:"5ca753751068f50017ddb561",
        seller:''
    }

    componentWillMount(){
       console.log(this.state)
        var option = {
            method: "POST",
            body: JSON.stringify(this.state),
            headers:{
                'Content-Type': 'application/json'
            }
        }   

        fetch('http://localhost:8000/sellerprofile', option)
        .then(res => res.json())
        .then(data =>{
            if(data.data == null){
                this.setState({seller: null})
            }
            console.log(data)
            // this.setState({seller:data},
            // ()=>console.log(this.state),
            // )
        })
        .catch(err => console.log(err))
        
    }
    
    
    render(){
        // let user = this.state.seller
        localStorage.setItem('seller', JSON.stringify(this.state.seller))
        // var sellerDate = this.state.seller.date
        var seller = JSON.parse(localStorage.getItem("seller"))
        var dp= "";

        if(seller !== null ){
        if (seller.sellerImg === "") {
            // console.log('1st')
            if (seller.gender === "male"){
                dp = man
            }
            if (seller.gender === "female"){
                dp = girl
            }
        }
        else{
            dp = seller.url1;
        }
    }
        return(
            <div  className="seller-profile-container text-color">

                { this.state.seller ? <div className="container">               
                    <div className="detail-container text-center">
                        <div className="profile-pic-container">
                            <img height="150" width="150" src={dp} alt="profile-pic" />
                        </div>
                        <span className="detail-text-group">
                            <label htmlFor="exampleInputEmail1">Seller Name</label>
                            <br/>
                            <input type="text" disabled name="detail-name" refs="sellerName" className="detail-input" value={seller.name} />                               
                        </span>
                        <span className="detail-text-group">
                            <label htmlFor="exampleInputEmail1">Date Joined</label>
                            <br/>
                            <input type="text" disabled name="detail-info" className="detail-input" value={seller.date}  />                               
                        </span>
                        <span className="detail-text-group">
                            <label htmlFor="exampleInputEmail1">Seller Mobile Number</label>
                            <br/>
                            <input type="text" disabled name="detail-mobile" value={seller.phone} className="detail-input"/>
                        </span>
                        <span className="detail-text-group">
                            <label htmlFor="exampleInputEmail1">Seller Country</label>
                            <br/>
                            <input type="text" disabled name="detail-mobile" value={seller.country} className="detail-input"/>
                        </span>
                       
                        <div className="container">
                        <hr/>
                        </div>
                    </div>     
                </div>
                :
                <div  className="container" >
                    <h1 style={{ margin: '30px auto', fontWeight: '400', textAlign:'center' }} >Sorry! user found.</h1>
                    <h3 style={{ margin: '70px auto', fontWeight: '400', textAlign:'center' }} >Maybe the user have deleted his account</h3>
                    
                </div >
                
}
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