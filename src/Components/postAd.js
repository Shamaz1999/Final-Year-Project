import React, { Component } from 'react'; 
import "./../bootstrap/bootstrapC.css";
import { Link } from 'react-router-dom';
import $ from 'jquery'


class Post extends Component {

    
    render(){
        $(document).ready(function(){

        $(".custom-file-input").on("change", function() {
            var fileName = $(this).val().split("\\").pop();
            $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
          });
       
    })

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
                            <input type="number"  name="adPrice" ref="adPrice"  className="form-control"  placeholder="Item Price Here"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1"><b>Location</b> <span className="required">*</span></label>
                            <input type="text"  name="adloc" ref="adloc"  className="form-control"  placeholder="Your location Here"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1"><b>Upload Pictures</b> <span className="required"><span style={{fontSize:'14px'}}>(you can select multiple pictures)</span>*</span></label>
                            <div class="custom-file">
                                <label class="custom-file-label"  id="txt" for="customFile">Choose Pictures</label>
                                <input type="file" class="custom-file-input" accept="image/*" id="customFile" name="filename" multiple />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1"><b>Description</b> <span className="required">*</span></label>
                            <textarea name="adDesc" className="form-control" style={{resize:'none'}} cols="30" rows="5"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1"><b>Your Phone Number</b> <span className="required">*</span></label>
                            <input type="number"  name="adPrice" ref="adPrice"  className="form-control"  placeholder="Your phone number here"/>
                        </div>
                        <br/>
                        <button type="Submit" className="btn login-btn float-right ">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Post