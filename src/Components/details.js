import React, { Component } from 'react';
import "./../bootstrap/bootstrapC.css";
import { connect } from 'react-redux';
import man from './../images/man.png';
import girl from './../images/girl.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Row, Col, Modal, Button } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'



class Details extends Component {

    state = {
        id: this.props.match.params.userId,
        name: '',
        phone: '',
        password: '',
        email: '',
        gender: '',
        DOB: '',
        country: '',
        address: '',
        date: '',
        about: '',
        url1: '',
        city: '',
        favorites: [],
        image1: null,
        progress1: 0,
        theme: "",
        user: {
            _id: this.props.match.params.userId,
        },
        show: false,
        // theme: JSON.parse(localStorage.getItem('theme')),
        isDataloaded: false,
    }

    componentDidMount() {
        this.setState({ theme: localStorage.getItem('theme') })
        var option = {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch('http://localhost:8000/updateuser', option)
            .then(res => res.json())
            .then(data => {
                this.setState({ user: data })
                this.setState({ isDataloaded: true })
                localStorage.setItem('user', JSON.stringify(data))
            })
            .catch(err => console.log(err))


        let user = JSON.parse(localStorage.getItem('user'));

        this.refs.name.value = user.name
        this.refs.phone.value = user.phone
        this.refs.about.value = user.about
        this.refs.password.value = user.password
        this.refs.address.value = user.address
        // this.refs.country.value = user.country
        this.refs.city.value = user.city


        this.setState({ name: user.name })
        this.setState({ phone: user.phone })
        this.setState({ password: user.password })
        this.setState({ about: user.about })
        this.setState({ country: user.country })
        this.setState({ city: user.city })
        this.setState({ address: user.address })
        this.setState({ id: user._id })


    }
    delete = () => {

        // let retVal = window.confirm("Do you want to delete your account ?");
        // if (retVal === true) {
        var option = {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch('http://localhost:8000/deleteuser', option)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => { console.log(err) })

        toast('Your Account has been deleted', {
            className: 'logout-toast',
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            closeButton: false,
            // progress: undefined,
        });
        localStorage.removeItem('user')
        this.props.history.push('/')
        // alert("Your account has been deleted");
        // return true;
        // } else {
        // return false;
        // }
    }

    discard = () => {
        console.log('discard ran')
        // e.preventDefault()
        window.location.reload()
        // form.reset();
        // this.forceUpdate()
    }

    save = () => {

        if (this.state.address === "") {
            toast('Address is required!', {
                className: 'logout-toast',
                position: "bottom-left",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                closeButton: false,
                // progress: undefined,
            });

            var address = this.refs.address;
            address.focus()
            return false
        } else if (this.state.name === "") {
            toast('Name is required!', {
                className: 'logout-toast',
                position: "bottom-left",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                closeButton: false,
                // progress: undefined,
            });

            var name = this.refs.name;
            name.focus()
            return false
        } else if (this.state.password === "" || this.state.password.length <= 6) {
            toast('Passowrd cannot be null and must be 7 characters long!', {
                className: 'logout-toast',
                position: "bottom-left",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                closeButton: false,
                // progress: undefined,
            });

            var password = this.refs.password;
            password.focus()
            return false
        } else if (this.state.country === "") {
            toast('Country is required!', {
                className: 'logout-toast',
                position: "bottom-left",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                closeButton: false,
                // progress: undefined,
            });

            var country = this.refs.country;
            country.focus()
            return false
        } else if (this.state.city === "") {
            toast('City is required!', {
                className: 'logout-toast',
                position: "bottom-left",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                closeButton: false,
                // progress: undefined,
            });

            var city = this.refs.city;
            city.focus()
            return false
        } else if (this.state.phone === "") {
            toast('Phone is required!', {
                className: 'logout-toast',
                position: "bottom-left",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                closeButton: false,
                // progress: undefined,
            });
            var phone = this.refs.phone;
            phone.focus()
            return false
        } else if (this.state.about === "") {
            toast('About is required!', {
                className: 'logout-toast',
                position: "bottom-left",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                closeButton: false,
                // progress: undefined,
            });

            var about = this.refs.about;
            about.focus()
            return false
        } else {


            var option = {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            console.log(this.state)
            fetch('http://localhost:8000/updateinfo', option)
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    // let u = JSON.parse(localStorage.getItem('user'))
                    // u = data;
                    // localStorage.setItem('user', JSON.stringify(u))
                    // this.props.dispatch({type:'Add_user',payload:data})
                    localStorage.setItem('user', JSON.stringify(data))
                    this.setState({ user: data })
                })
                .catch(err => { console.log(err) })

            toast('Your changes have been saved', {
                className: 'logout-toast',
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                closeButton: false,
            });
        }
    }


    country1 = (country) => { this.setState({ country }) }

    render() {
        const handleClose = () => this.setState({ show: false });
        const handleShow = () => this.setState({ show: true });

        let u = JSON.parse(localStorage.getItem('user'))
        var dp = null
        if (this.state.user.url1 === "") {
            if (this.state.user.gender === "male") {
                dp = man
            }
            if (this.state.user.gender === "female") {
                dp = girl
            }
        }
        else { dp = this.state.user.url1 }
        

        const handleTheme = (e) => {
            console.log(e.target.checked);
            if (e.target.checked) {
                this.setState({ theme: "dark" })
                document.documentElement.setAttribute('data-theme', "dark");
                localStorage.setItem('theme', "dark")
            } else {
                this.setState({ theme: "normal" })
                document.documentElement.setAttribute('data-theme', "normal");
                localStorage.setItem('theme', "normal")
            }
        }
        return (
            <div className="app text-color">
                <div className="details-container">
                    <div className="details-header">
                        <h2 style={{ fontWeight: '400' }} >Profile Details</h2>
                        <div className="dark-mode-toggle-container">
                            <div id='comments'>
                                <label htmlFor="switcher"><b>Dark Mode &nbsp;</b></label>
                                <label className="switch">
                                    <input id="switcher" onChange={(e) => handleTheme(e)} type="checkbox" checked={this.state.theme === "dark"} />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="details-cols-container">
                        <div className="details-left-wrapper tabs-shadow">
                            <div className="profile-details-big-heading">
                                Profile Info
                                </div>
                            <hr />
                            <div className="details-profile-pic-container">
                                {this.state.isDataloaded ? <img src={dp} className="details-profile-pic" alt="Profile Pic" /> : <Skeleton className="details-profile-pic-skeleton" />}
                            </div>
                            <div className="no-editable-profile-details-wrapper profile-details-wrapper" >
                                <div className="profile-details-container">
                                    <div className='non-editable-info-container profile-details-info-container'>
                                        <span className=" profile-details-small-heading">Name</span>
                                        <span>{u.name}</span>
                                    </div>
                                </div>
                                <div className="profile-details-container">
                                    <div className='non-editable-info-container profile-details-info-container'>
                                        <span className="profile-details-small-heading">Location</span>
                                        <div>
                                            <span>{u.city}</span>, <span>{u.country}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="profile-details-container">
                                    <div className='non-editable-info-container profile-details-info-container'>
                                        <span className="profile-details-small-heading">Gender</span>
                                        <span>{u.gender}</span>
                                    </div>
                                </div>
                                <div className="profile-details-container">
                                    <div className='non-editable-info-container profile-details-info-container'>
                                        <span className="profile-details-small-heading">Address</span>
                                        <span>{u.address}</span>
                                    </div>
                                </div>
                                <div className="profile-details-container">
                                    <div className='non-editable-info-container profile-details-info-container'>
                                        <span className="profile-details-small-heading">Date Joined</span>
                                        <span>{u.date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" details-right-wrapper tabs-shadow">

                            <div className="profile-details-big-heading">
                                Edit your info here
                                    </div>
                            <hr />
                            <div className="editable-details-cols-container">
                                <div className="profile-details-first-col">
                                    <div className="profile-details-wrapper" >
                                        <div className="profile-details-container">
                                            <div className='profile-details-info-container'>
                                                <span className="profile-details-small-heading">Name</span>
                                                <span>
                                                    <input onChange={e => this.setState({ name: e.target.value })} type="text" ref="name" name="detail-name" className="detail-input" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="profile-details-container">
                                            <div className='profile-details-info-container'>
                                                <span className="profile-details-small-heading">Password</span>
                                                <span>
                                                    <input onChange={e => this.setState({ password: e.target.value })} type="text" ref="password" name="detail-name" className="detail-input" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="profile-details-container">
                                            <div className='profile-details-info-container'>
                                                <span className="profile-details-small-heading">Phone no.</span>
                                                <span>
                                                    <input onChange={e => this.setState({ phone: e.target.value })} type="text" ref="phone" name="detail-mobile" className="detail-input" />
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="profile-details-second-col">
                                    <div className="profile-details-wrapper" >
                                        <div className="profile-details-container">
                                            <div className='profile-details-info-container'>
                                                <span className="profile-details-small-heading">Country</span>
                                                <span>
                                                    <CountrySelect country={this.country1} />
                                                    {/* <input onChange={e => this.setState({ country: e.target.value })} type="text" ref="country" name="detail-info" className="detail-input" /> */}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="profile-details-container">
                                            <div className='profile-details-info-container'>
                                                <span className="profile-details-small-heading">City</span>
                                                <span>
                                                    <input onChange={e => this.setState({ city: e.target.value })} type="text" ref="city" name="detail-info" className="detail-input" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="profile-details-container">
                                            <div className='profile-details-info-container'>
                                                <span className="profile-details-small-heading">Address</span>
                                                <span>
                                                    <input onChange={e => this.setState({ address: e.target.value })} type="text" ref="address" name="detail-info" className="detail-input" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-details-about-container">
                                <div className="profile-details-big-heading">
                                    About Me
                                    </div>
                                <hr />
                                <div className="details-about-input-wrapper">
                                    {/* <textarea/> */}
                                    <textarea onChange={e => this.setState({ about: e.target.value })} rows="5" type="text" ref="about" name="detail-info" className=" detail-input-textarea " />
                                </div>
                            </div>
                            <hr />
                            <div className="profile-details-btn-container">
                                <div>
                                    <button className="btn login-btn details-page-btn" onClick={this.save}>Save</button>
                                    <button className="btn login-btn details-page-btn" onClick={this.discard}>Discard</button>
                                </div>
                                <div className="details-page-delete-btn">
                                    <button className="btn login-btn details-page-btn" type="button"
                                        // onClick={this.delete}
                                        onClick={handleShow}
                                    >Delete Account</button>
                                    {/* Confirmation Modal */}
                                    <Modal className="confirmation-modal" show={this.state.show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Confirm</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>Are you sure you want to delete you account?
                                                <div style={{ fontSize: '14px' }}>
                                                Please delete your ads first if you have any, otherwise they will remain in the active ads with your phone no.
                                                </div>
                                        </Modal.Body>
                                        <Modal.Footer className="confirmation-modal-footer">
                                            <Button className="confirmation-modal-yes-btn no-outline" onClick={this.delete} >Yes</Button>
                                            <Button className="confirmation-modal-no-btn no-outline" onClick={handleClose}>No</Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="container">
                    <div className="detail-container">
                        <div className="profile-pic-container">
                            <img height="150" width="150" src={dp} alt="profile-pic" />
                        </div>
                        <div style={{ textAlign: 'center' }}>

                            <span className="detail-text-group">
                                <label htmlFor="exampleInputEmail1">Your Name</label>
                                <br />
                                <input onChange={e => this.setState({ name: e.target.value })} type="text" ref="name" name="detail-name" className="detail-input" />
                            </span>
                            <span className="detail-text-group">
                                <label htmlFor="exampleInputEmail1">Address</label>
                                <br />
                                <input onChange={e => this.setState({ about: e.target.value })} type="text" ref="address" name="detail-info" className="detail-input" />
                            </span>
                            <span className="detail-text-group">
                                <label htmlFor="exampleInputEmail1">Mobile Number</label>
                                <br />
                                <input onChange={e => this.setState({ phone: e.target.value })} type="text" ref="phone" name="detail-mobile" className="detail-input" />
                            </span>
                            <span className="detail-text-group">
                                <label htmlFor="exampleInputEmail1">Password</label>
                                <br />
                                <input onChange={e => this.setState({ password: e.target.value })} type="text" ref="password" name="detail-name" className="detail-input" />
                            </span>
                            <div className="detail-text-group" style={{ width: '88%', }}>
                                <label htmlFor="exampleInputEmail1">About Me</label>
                                <br />
                                <textarea onChange={e => this.setState({ about: e.target.value })} style={{ resize: "none" }} rows="5" type="text" ref="about" name="detail-info" className="detail-input" />
                            </div>
                        </div>
                        <button className="btn btn-outline-danger mt-3" type="button" onClick={this.delete}>Delete my account and data</button>
                        <div className="container">
                            <hr />
                        </div>
                        <button type="button" className="btn btn-outline-info mt-3" onClick={this.discard}>Discard</button>
                        <button className="btn login-btn float-right" type="button" onClick={this.save}>Save Changes</button>
                    </div>
                </div> */}


            </div>
        );
    }
}
const mapStateToProps = (store) => {
    return {
        data: store.adsReducer,
        user: store.userReducer
    }
}

class CountrySelect extends Component {
    state = {
        country: ''
    }

    render() {
        var user = JSON.parse(localStorage.getItem('user'))
        return (
            <select id="user-country" defaultValue={user.country} ref="userCountry" onInput={e => (this.setState({ country: e.target.value }))} onChange={e => this.props.country(e.target.value)} className=" detail-input detail-input-country-select" name="Country">
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">Central African Republic</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote D'ivoire">Cote D'ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">French Southern Territories</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-bissau">Guinea-bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                <option value="Korea, Republic of">Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                <option value="Moldova, Republic of">Moldova, Republic of</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">Netherlands Antilles</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russian Federation">Russian Federation</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Helena">Saint Helena</option>
                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia and Montenegro">Serbia and Montenegro</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                <option value="Taiwan, Province of China">Taiwan, Province of China</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-leste">Timor-leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Viet Nam">Viet Nam</option>
                <option value="Virgin Islands, British">Virgin Islands, British</option>
                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                <option value="Wallis and Futuna">Wallis and Futuna</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
            </select>
        )
    }

}


export default connect(mapStateToProps)(Details)