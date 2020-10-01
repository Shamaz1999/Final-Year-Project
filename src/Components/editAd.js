import React, { Component } from 'react';
import "./../bootstrap/bootstrapC.css";
import { storage } from './firebase/index'
import { toast } from 'react-toastify';
import PhoneInput from 'react-phone-number-input'
import { connect } from 'react-redux'


class EditAd extends Component {


    state = {
        id: this.props.match.params.adId,
        sellerCountry: '',
        adTitle: '',
        brand: '',
        category: 'category',
        condition: 'condition',
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

        fetch('/currentad', option)
            .then(res => res.json())
            .then(data => {
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
                })
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
                        this.setState({ url1 });
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
                        this.setState({ url2 });
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
                        this.setState({ url3 });
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
                        this.setState({ url4 });
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
            toast('Title is required!', {
                className: 'logout-toast',
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                closeButton: false,
            })
            var adTitle = this.refs.adTitle;
            adTitle.focus()
            return false
        } else if (this.state.brand === "") {
            toast('Brand name is required!', {
                className: 'logout-toast',
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                closeButton: false,
            })
            var itemBrand = this.refs.itemBrand;
            itemBrand.focus()
            return false
        } else if (this.state.category === "") {
            toast('Category is required!', {
                className: 'logout-toast',
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                closeButton: false,
            })
            var adCategory = this.refs.adCategory;
            adCategory.focus()
            return false
        } else if (this.state.condition === "") {
            toast('Condition is required!', {
                className: 'logout-toast',
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                closeButton: false,
            })
            var adCondition = this.refs.adCondition;
            adCondition.focus()
            return false
        } else if (this.state.price === "") {
            toast('Price is required!', {
                className: 'logout-toast',
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                closeButton: false,
            })
            var adPrice = this.refs.adPrice;
            adPrice.focus()
            return false
        } else if (this.state.location === "") {
            toast('Location is required!', {
                className: 'logout-toast',
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                closeButton: false,
            })
            var adloc = this.refs.adloc;
            adloc.focus()
            return false
        } else if (this.state.description === "") {
            toast('Description is required!', {
                className: 'logout-toast',
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                closeButton: false,
            })
            var adDesc = this.refs.adDesc;
            adDesc.focus()
            return false
        } else if (this.state.phone === "") {
            toast('Your Phone number is required!', {
                className: 'logout-toast',
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                closeButton: false,
            })
            var adPhone = this.refs.adPhone;
            adPhone.focus()
            return false
        } else if (this.state.url1 === "") {
            toast('You have to upload 4 pictures!', {
                className: 'logout-toast',
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                closeButton: false,
            })
            var imgup1 = this.refs.imgup1;
            imgup1.focus()
            return false
        } else if (this.state.url2 === "") {
            toast('You have to upload 4 pictures!', {
                className: 'logout-toast',
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                closeButton: false,
            })
            var imgup2 = this.refs.imgup2;
            imgup2.focus()
            return false
        } else if (this.state.url3 === "") {
            toast('You have to upload 4 pictures!', {
                className: 'logout-toast',
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                closeButton: false,
            })
            var imgup3 = this.refs.imgup3;
            imgup3.focus()
            return false
        } else if (this.state.url4 === "") {
            toast('You have to upload 4 pictures!', {
                className: 'logout-toast',
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                closeButton: false,
            })
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
            fetch('/editad', option)
                .then(res => res.json())
                .then(data => data )
                .catch(err => console.log(err))
                toast('Your Ad has been updated', {
                    className: 'logout-toast',
                    position: "bottom-left",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    closeButton: false,
                })
                this.props.history.push('/')
        }
    }

    render() {

        return (
            <div className="app text-color">
                <div className="container">
                    <div className="tabs-shadow signup-form-wrapper">
                        <div className="login-form-container">
                            <div className="display-4 login-page-heading">Edit Your Ad!</div>
                            <div className="form-group">
                                <label className="signup-label" htmlFor="adTitle"><b>Ad Title</b> <span className="required">*</span></label>
                                <input type="text" name="adTitle" id="adTitle" ref="adTitle" value={this.state.adTitle} onChange={e => this.setState({ adTitle: e.target.value })} className="form-control" placeholder="Ad Title Here" />
                            </div>
                            <div className="form-group">
                                <label className="signup-label" htmlFor="itemBrand"><b>Item Brand</b> <span className="required">*</span></label>
                                <input type="text" name="brand" id="itemBrand" value={this.state.brand} onInput={e => this.setState({ brand: e.target.value })} ref="itemBrand" className="form-control" placeholder="Item Brand Here" />
                            </div>
                            <div className="form-group">
                                <label className="signup-label" htmlFor="adCategory"><b>Item Category</b> <span className="required">*</span></label>
                                <select className="form-control" onInput={e => this.setState({ category: e.target.value })} defaultValue={this.state.category} name="adCategory" id="adCategory" ref="adCategory">
                                    <option value="category" disabled >Select Category</option>
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
                                <label className="signup-label" htmlFor="adCondition"><b>Condition</b> <span className="required">*</span></label>
                                <select name="adCondition" onInput={e => this.setState({ condition: e.target.value })} defaultValue={this.state.condition} className="form-control" id="adCondition" ref="adCondition">
                                    <option value="condition" disabled>Select Condition</option>
                                    <option value="new">New</option>
                                    <option value="used">Used</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="signup-label" htmlFor="adPrice"><b>Price</b> <span className="required">*</span></label>
                                <input type="number" name="adPrice" id="adPrice" ref="adPrice" value={this.state.price} onInput={e => this.setState({ price: e.target.value })} className="form-control" placeholder="Item Price Here" />
                            </div>
                            <div className="form-group">
                                <label className="signup-label" htmlFor="adloc"><b>Location</b> <span className="required">*</span></label>
                                <input type="text" name="adloc" id="adloc" ref="adloc" value={this.state.location} onInput={e => this.setState({ location: e.target.value })} className="form-control" placeholder="Your location Here" />
                            </div>
                            <div className="form-group">
                                <label className="signup-label" htmlFor="exampleInputEmail1"><b>Upload Pictures</b> <span className="required"><span style={{ fontSize: '14px' }}>(after selecting images click on upload)</span>* <span style={{ fontSize: '14px' }}>(To use previous images, don't select any images now)</span></span></label>
                                <div class="ad-img-upload-container">

                                    <div className="imgupload1">
                                        <input ref="imgup1" accept="image/*" className="img-upload-input" type="file" onInput={this.up1} onChange={this.handleChange1} />
                                        <button type="button" id="upBtn1" className="img-upload-btn login-btn hid" onClick={this.handleUpload1}>Upload</button>
                                        <progress id="upProg1" value={this.state.progress1} className="img-upload-progress hid" max="100" />
                                        <img ref='img1' alt="" id="upImg1" src={this.state.url1} className="hid" height="30" />
                                    </div>
                                    <div className="imgupload1">
                                        <input ref="imgup2" accept="image/*" className="img-upload-input" type="file" onInput={this.up2} onChange={this.handleChange2} />
                                        <button type="button" id="upBtn2" className="img-upload-btn login-btn hid" onClick={this.handleUpload2}>Upload</button>
                                        <progress id="upProg2" value={this.state.progress2} className="img-upload-progress hid" max="100" />
                                        <img ref='img2' alt="" id="upImg2" src={this.state.url2} className="hid" height="30" />
                                    </div>
                                    <div className="imgupload1">
                                        <input ref="imgup3" accept="image/*" className="img-upload-input" type="file" onInput={this.up3} onChange={this.handleChange3} />
                                        <button type="button" id="upBtn3" className="img-upload-btn login-btn hid" onClick={this.handleUpload3}>Upload</button>
                                        <progress id="upProg3" value={this.state.progress3} className="img-upload-progress hid" max="100" />
                                        <img ref='img3' alt="" id="upImg3" src={this.state.url3} className="hid" height="30" />
                                    </div>
                                    <div className="imgupload1">
                                        <input ref="imgup4" accept="image/*" className="img-upload-input" type="file" onInput={this.up4} onChange={this.handleChange4} />
                                        <button type="button" id="upBtn4" className="img-upload-btn login-btn hid" onClick={this.handleUpload4}>Upload</button>
                                        <progress id="upProg4" value={this.state.progress4} className="img-upload-progress hid" max="100" />
                                        <img ref='img4' alt="" id="upImg4" src={this.state.url4} className="hid" height="30" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="signup-label" htmlFor="adDesc"><b>Description</b> <span className="required">*</span></label>
                                <textarea name="adDesc" id="adDesc" ref="adDesc" value={this.state.description} onInput={e => this.setState({ description: e.target.value })} className="form-control" style={{ resize: 'none' }} cols="30" rows="5"></textarea>
                            </div>
                            <div className="form-group">
                                <label className="signup-label" htmlFor="phone-num"><b>Phone Number</b> <span className="required">*</span></label>
                                <PhoneInput className="form-control custom-phone1 phone-num-input" ref="userNum" id="phone-num" placeholder="Enter phone number" value={this.state.phone} onChange={phone => this.setState({ phone })} />
                            </div>
                            <br />
                            <button type="button" onClick={this.verify} className="btn login-btn postAd-submit-btn">Submit</button>
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
