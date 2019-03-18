import React, { Component } from 'react'; 
import "./../bootstrap/bootstrapC.css";
import { Link } from 'react-router-dom';


class Post extends Component {

    
    render(){

        return(
            <div className="app">
                <div className="container">
                    <form method="POST" className="post-form-container">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1"><b>Ad Title</b> <span className="required">*</span></label>
                            <input type="text"  name="adTitle" ref="adTitle"   className="form-control"  placeholder="Ad Title Here"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1"><b>Item Brand</b> <span className="required">*</span></label>
                            <input type="text"  name="adTitle" ref="adTitle"  className="form-control"  placeholder="Item Brand Here"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1"><b>Item Category</b> <span className="required">*</span></label>
                            <select className="form-control" name="adCategory" ref="adCategory">
                                <option value="mobiles">Mobiles</option>
                                <option value="vehicles">Vehicles</option>
                                <option value="property for sale">Property for Sale</option>
                                <option value="property for rent">Property for Rent</option>
                                <option value="electronics">Electronics and Home Appliances</option>
                                <option value="bikes">Bikes</option>
                                <option value="business,industrial">Business, Industrial & Agriculture</option>
                                <option value="services">Services</option>
                                <option value="other">Other</option>                                    
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1"><b>Condition</b> <span className="required">*</span></label>
                            <select name="adCondition" className="form-control" ref="adCondition">
                                <option value="new">New</option>
                                <option value="used">Used</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1"><b>Price</b> <span className="required">*</span></label>
                            <input type="number"  name="adPrice" ref="adPrice"  className="form-control"  placeholder="Item Brand Here"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1"><b>Location</b> <span className="required">*</span></label>
                            <input type="text"  name="adloc" ref="adloc"  className="form-control"  placeholder="Your location Here"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1"><b>Upload Pictures</b> <span className="required">*</span></label>
                            <input type="file"  name="adpic" multiple ref="adpic"  className="form-control ad-img-upload"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1"><b>Description</b> <span className="required">*</span></label>
                            <textarea name="adDesc" className="form-control" style={{resize:'none'}} cols="30" rows="5"></textarea>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Post