import React, { Component } from 'react';
import "./../bootstrap/bootstrapC.css";
import { storage } from './firebase/index'
// import $ from 'jquery'
import PhoneInput from 'react-phone-number-input'
import { connect } from 'react-redux'


class EditAd extends Component {


    state = {
        id: this.props.match.params.adId,
        sellerCountry: '',
        adTitle: '',
        brand: '',
        category: '',
        condition: '',
        price: '',
        location: '',
        description: '',
        sellerId: '',
        sellerImg: '',
        sellerName: '',
        phone: '',
        date: '',
        image1: null,
        url1: '',
        progress1: 0,
        image2: null,
        url2: '',
        progress2: 0,
        image3: null,
        url3: '',
        progress3: 0,
        image4: null,
        url4: '',
        progress4: 0
    }


    componentDidMount() {

        //fetching ad data
        var option = {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch('http://localhost:8000/currentad', option)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    adTitle: data.adTitle,
                    sellerCountry: data.sellerCountry,
                    brand: data.brand,
                    category: data.category,
                    condition: data.condition,
                    price: data.price,
                    location: data.location,
                    description: data.description,
                    sellerId: data.sellerId,
                    sellerImg: data.sellerImg,
                    sellerName: data.sellerName,
                    phone: data.phone,
                    date: data.date,
                    url1: data.url1,
                    url2: data.url2,
                    url3: data.url3,
                    url4: data.url4
                },
                    () => {
                        // setting category
                        var temp = this.state.category;
                        var mySelect = this.refs.adCategory;
                        var i, j;
                        for ( i, j = 0; i = mySelect.options[j]; j++) {
                            if (i.value === temp) {
                                mySelect.selectedIndex = j;
                                break;
                            }
                        }

                        // setting condition
                        var temp1 = this.state.condition;
                        var mySelect1 = this.refs.adCondition;
                        for ( i, j = 0; i = mySelect1.options[j]; j++) {
                            if (i.value === temp1) {
                                mySelect1.selectedIndex = j;
                                break;
                            }
                        }
                    })
                // this.props.dispatch({ type: 'insertads', payload: this.state.ad.sellerId })
            })
            .catch(err => console.log(err))





        var d = new Date()
        var months = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July'
            , 'August', 'September', 'October', 'November', 'December', ''
        ]
        var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        var dat = day[d.getDay()] + ' ' + months[d.getMonth()] + ' ' + d.getDate() + " " + d.getFullYear();
        this.setState({ date: dat })



    }

    // First image upload Code

    handleChange1 = (e) => {
        if (e.target.files[0]) {
            const image1 = e.target.files[0];
            this.setState({ image1 });
        }
    }
    handleUpload1 = () => {
        const { image1 } = this.state;
        const uploadTask = storage.ref(`images/${image1.name}`).put(image1)
        uploadTask.on('state_changed',
            (snapshot) => {
                // progress funcion
                const progress1 = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                this.setState({ progress1 });
            },
            (error) => {
                // error funcion

                console.log(error);
            },
            () => {
                // complete funcion
                storage.ref('images').child(image1.name).getDownloadURL()
                    .then(url1 => {
                        // this.refs.img.src=url;
                        this.setState({ url1 });
                        console.log(this.state)
                    })

            }
        )
    }

    // Second image upload code

    handleChange2 = (e) => {
        if (e.target.files[0]) {
            const image2 = e.target.files[0];
            this.setState({ image2 });
        }
    }
    handleUpload2 = () => {
        const { image2 } = this.state;
        const uploadTask = storage.ref(`images/${image2.name}`).put(image2)
        uploadTask.on('state_changed',
            (snapshot) => {
                // progress funcion
                const progress2 = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                this.setState({ progress2 });
            },
            (error) => {
                // error funcion

                console.log(error);
            },
            () => {
                // complete funcion
                storage.ref('images').child(image2.name).getDownloadURL()
                    .then(url2 => {
                        // this.refs.img.src=url;
                        this.setState({ url2 });
                        console.log(this.state)
                    })

            }
        )
    }

    // Third image upload code

    handleChange3 = (e) => {
        if (e.target.files[0]) {
            const image3 = e.target.files[0];
            this.setState({ image3 });
        }
    }
    handleUpload3 = () => {
        const { image3 } = this.state;
        const uploadTask = storage.ref(`images/${image3.name}`).put(image3)
        uploadTask.on('state_changed',
            (snapshot) => {
                // progress funcion
                const progress3 = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                this.setState({ progress3 });
            },
            (error) => {
                // error funcion

                console.log(error);
            },
            () => {
                // complete funcion
                storage.ref('images').child(image3.name).getDownloadURL()
                    .then(url3 => {
                        // this.refs.img.src=url;
                        this.setState({ url3 });
                        console.log(this.state)
                    })

            }
        )
    }

    // Fouth image upload Code
    handleChange4 = (e) => {
        if (e.target.files[0]) {
            const image4 = e.target.files[0];
            this.setState({ image4 });
        }
    }
    handleUpload4 = () => {
        const { image4 } = this.state;
        const uploadTask = storage.ref(`images/${image4.name}`).put(image4)
        uploadTask.on('state_changed',
            (snapshot) => {
                // progress funcion
                const progress4 = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                this.setState({ progress4 });
            },
            (error) => {
                // error funcion

                console.log(error);
            },
            () => {
                // complete funcion
                storage.ref('images').child(image4.name).getDownloadURL()
                    .then(url4 => {
                        // this.refs.img.src=url;
                        this.setState({ url4 });
                        console.log(this.state)
                    })

            }
        )
    }

    // Showing hidden upload button and progress bar
    up1 = () => {
        document.getElementById('upBtn1').classList.add('show')
        document.getElementById('upProg1').classList.add('show')
        document.getElementById('upImg1').classList.add('show')
    }
    up2 = () => {
        document.getElementById('upBtn2').classList.add('show')
        document.getElementById('upImg2').classList.add('show')
        document.getElementById('upProg2').classList.add('show')

    }
    up3 = () => {
        document.getElementById('upBtn3').classList.add('show')
        document.getElementById('upProg3').classList.add('show')
        document.getElementById('upImg3').classList.add('show')
    }
    up4 = () => {
        document.getElementById('upBtn4').classList.add('show')
        document.getElementById('upProg4').classList.add('show')
        document.getElementById('upImg4').classList.add('show')
    }

    // Validating and sending to database

    verify = () => {

        if (this.state.adTitle === "") {
            alert('Title is required!')
            var adTitle = this.refs.adTitle;
            adTitle.focus()
            return false
        } else if (this.state.brand === "") {
            alert('Brand name is required!')
            var itemBrand = this.refs.itemBrand;
            itemBrand.focus()
            return false
        } else if (this.state.category === "") {
            alert('Category is required!')
            var adCategory = this.refs.adCategory;
            adCategory.focus()
            return false
        } else if (this.state.condition === "") {
            alert('Condition is required!')
            var adCondition = this.refs.adCondition;
            adCondition.focus()
            return false
        } else if (this.state.price === "") {
            alert('Price is required!')
            var adPrice = this.refs.adPrice;
            adPrice.focus()
            return false
        } else if (this.state.location === "") {
            alert('Location is required!')
            var adloc = this.refs.adloc;
            adloc.focus()
            return false
        } else if (this.state.description === "") {
            alert('Description is required!')
            var adDesc = this.refs.adDesc;
            adDesc.focus()
            return false
        } else if (this.state.phone === "") {
            alert('Your Phone number is required!')
            var adPhone = this.refs.adPhone;
            adPhone.focus()
            return false
        } else if (this.state.url1 === "") {
            alert('You have to upload 4 pictures!')
            var imgup1 = this.refs.imgup1;
            imgup1.focus()
            return false
        } else if (this.state.url2 === "") {
            alert('You have to upload 4 pictures!')
            var imgup2 = this.refs.imgup2;
            imgup2.focus()
            return false
        } else if (this.state.url3 === "") {
            alert('You have to upload 4 pictures!')
            var imgup3 = this.refs.imgup3;
            imgup3.focus()
            return false
        } else if (this.state.url4 === "") {
            alert('You have to upload 4 pictures!')
            var imgup4 = this.refs.imgup4;
            imgup4.focus()
            return false
        } else {
            var option = {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            fetch('http://localhost:8000/editad', option)
                .then(res => res.json())
                .then(data =>
                    console.log(data)
                )
                .catch(err => console.log(err))
            alert('Your Ad has been updated!')
            // this.props.history.push('/');
        }




    }

    render() {



        // $(document).ready(function () {
        //     $(".custom-file-input").on("change", function () {
        //         var fileName = $(this).val().split("\\").pop();
        //         $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
        //     });

        // })


        console.log(this.state)

        return (
            <div className="app">
                <div className="container">
                 <div className="tabs-shadow signup-form-wrapper">
                     <div className="login-form-container">
                        <div className="display-4 login-page-heading">
                            Edit Your Ad!
                        </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1"><b>Ad Title</b> <span className="required">*</span></label>
                                <input type="text" name="adTitle" ref="adTitle" value={this.state.adTitle} onInput={e => this.setState({ adTitle: e.target.value })} className="form-control" placeholder="Ad Title Here" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1"><b>Item Brand</b> <span className="required">*</span></label>
                                <input type="text" name="brand" value={this.state.brand} onInput={e => this.setState({ brand: e.target.value })} ref="itemBrand" className="form-control" placeholder="Item Brand Here" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1"><b>Item Category</b> <span className="required">*</span></label>
                                <select className="form-control" onInput={e => this.setState({ category: e.target.value })} defaultValue={this.state.category} name="adCategory" ref="adCategory">
                                    <option value="" disabled selected>Select Category</option>
                                    <option value="mobiles">Mobiles</option>
                                    <option value="vehicles">Vehicles</option>
                                    <option value="clothing">Clothing</option>
                                    <option value="computer and electronics">Computer and Electronics</option>
                                    <option value="furniture">Furniture</option>
                                    <option value="property for sale">Property for Sale</option>
                                    <option value="property for rent">Property for Rent</option>
                                    <option value="home appliances">Home Appliances</option>
                                    <option value="bikes">Bikes</option>
                                    <option value="business,industrial">Business, Industrial &amp; Agriculture</option>
                                    <option value="services">Services</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1"><b>Condition</b> <span className="required">*</span></label>
                                <select name="adCondition" onInput={e => this.setState({ condition: e.target.value })} className="form-control" ref="adCondition">
                                    <option selected disabled>Select Condition</option>
                                    <option value="new">New</option>
                                    <option value="used">Used</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1"><b>Price</b> <span className="required">*</span></label>
                                <input type="number" name="adPrice" ref="adPrice" value={this.state.price} onInput={e => this.setState({ price: e.target.value })} className="form-control" placeholder="Item Price Here" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1"><b>Location</b> <span className="required">*</span></label>
                                <input type="text" name="adloc" ref="adloc" value={this.state.location} onInput={e => this.setState({ location: e.target.value })} className="form-control" placeholder="Your location Here" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1"><b>Upload Pictures</b> <span className="required"><span style={{ fontSize: '14px' }}>(after selecting images click on upload)</span>* <span style={{ fontSize: '14px' }}>(To use previous images, don't select any images now)</span></span></label>
                                <div class="ad-img-upload-container">
                     
                                    <div className="imgupload1">
                                        <input ref="imgup1" accept="image/*" className="img-upload-input" type="file" onInput={this.up1} onChange={this.handleChange1} />
                                        <button type="button" id="upBtn1" className="img-upload-btn login-btn hid" onClick={this.handleUpload1}>Upload</button>
                                        <progress id="upProg1" value={this.state.progress1} className="img-upload-progress hid" max="100" />
                                        <img ref='img1' alt="adpic1" id="upImg1" src={this.state.url1} className="hid" height="30" />
                                    </div>
                                    <div className="imgupload1">
                                        <input ref="imgup2" accept="image/*" className="img-upload-input" type="file" onInput={this.up2} onChange={this.handleChange2} />
                                        <button type="button" id="upBtn2" className="img-upload-btn login-btn hid" onClick={this.handleUpload2}>Upload</button>
                                        <progress id="upProg2" value={this.state.progress2} className="img-upload-progress hid" max="100" />
                                        <img ref='img2' alt="adpic2" id="upImg2" src={this.state.url2} className="hid" height="30" />
                                    </div>
                                    <div className="imgupload1">
                                        <input ref="imgup3" accept="image/*" className="img-upload-input" type="file" onInput={this.up3} onChange={this.handleChange3} />
                                        <button type="button" id="upBtn3" className="img-upload-btn login-btn hid" onClick={this.handleUpload3}>Upload</button>
                                        <progress id="upProg3" value={this.state.progress3} className="img-upload-progress hid" max="100" />
                                        <img ref='img3' alt="adpic3" id="upImg3" src={this.state.url3} className="hid" height="30" />
                                    </div>
                                    <div className="imgupload1">
                                        <input ref="imgup4" accept="image/*" className="img-upload-input" type="file" onInput={this.up4} onChange={this.handleChange4} />
                                        <button type="button" id="upBtn4" className="img-upload-btn login-btn hid" onClick={this.handleUpload4}>Upload</button>
                                        <progress id="upProg4" value={this.state.progress4} className="img-upload-progress hid" max="100" />
                                        <img ref='img4' alt="adpic4" id="upImg4" src={this.state.url4} className="hid" height="30" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1"><b>Description</b> <span className="required">*</span></label>
                                <textarea name="adDesc" ref="adDesc" value={this.state.description} onInput={e => this.setState({ description: e.target.value })} className="form-control" style={{ resize: 'none' }} cols="30" rows="5"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone-num"><b>Phone Number</b> <span className="required">*</span></label>
                                <PhoneInput className="form-control" ref="userNum" id="phone-num" placeholder="Enter phone number" value={this.state.phone} onChange={phone => this.setState({ phone })} />
                            </div>
                            <br />
                            <button type="button" onClick={this.verify} className="btn login-btn">Submit</button>
                        </div>
                 </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (store) => {
    return {
        user: store.userReducer
    }
}
export default connect(mapStateToProps)(EditAd);
// export default Post