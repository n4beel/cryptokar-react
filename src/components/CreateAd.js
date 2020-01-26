import React, { Component } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { createAd } from '../store/actions/carActions';
import { connect } from 'react-redux';

class CreateAd extends Component {

    state = {
        engineNum: '',
        chassisNum: '',
        name: '',
        model: '',
        manufacturer: '',
        price: '',
        color: '',
        capacity: '',
        doors: '',
        engineSize: '',
        cylinders: '',
        feulCapacity: '',
        feulType: '',
        transmission: '',
        gearBox: '',
        weight: '',
        length: '',
        height: '',
        width: '',
        description: '',
        imgUrl: 'https://www.carsondemand.co.uk/public/images/placeholderCar.png'
    }
    handleSubmit = e => {
        e.preventDefault();
        // console.log(this.state);
        this.props.createAd(this.state);
        this.props.history.push('/');
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <section className="small-banner-area organic-breadcrumb">
                    <div className="container">
                        <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                            <div className="col-first">
                                <h1>upload</h1>
                                <nav className="d-flex align-items-center">
                                    <Link to="/">Home<span className="lnr lnr-arrow-right"></span></Link>
                                    <Link to="#">Upload</Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="checkout_area section_gap">
                    <div className="container">
                        <div className="billing_details">
                            <div className="row">
                                <div className="col-12">
                                    <h3>Add a Vehicle</h3>
                                    <form className="row contact_form" action="#" method="post" noValidate="novalidate" onSubmit={this.handleSubmit}>
                                        <div className="col-md-3 form-group p_star">
                                            <input type="text" className="form-control" id="engineNum" name="engineNum"
                                                placeholder="Vehicle's Engine Number" onChange={this.handleChange} />
                                        </div>
                                        <div className="col-md-3 form-group p_star">
                                            <input placeholder="Vehicle's Chassis Number" type="text" className="form-control"
                                                id="chassisNum" name="chassisNum" onChange={this.handleChange} />
                                        </div>
                                        <div className="col-md-3 form-group p_star">
                                            <input placeholder="Vehicle Name" type="text" className="form-control" id="name"
                                                name="name" onChange={this.handleChange} />
                                        </div>
                                        <div className="col-md-3 form-group p_star">
                                            <input placeholder="Model" type="text" className="form-control" id="model" name="model" onChange={this.handleChange} />
                                        </div>
                                        <div className="col-md-3 form-group p_star">
                                            <input placeholder="Maufacturer Name" type="text" className="form-control" id="manufacturer"
                                                name="manufacturer" onChange={this.handleChange} />
                                        </div>
                                        <div className="col-md-3 form-group p_star">
                                            <input placeholder="Price" type="text" className="form-control" id="price" name="price" onChange={this.handleChange} />
                                        </div>
                                        <div className="col-md-3 form-group p_star">
                                            <input placeholder="Color" type="text" className="form-control" id="color" name="color" onChange={this.handleChange} />
                                        </div>
                                        <div className="col-md-3 form-group p_star">
                                            <input placeholder="Capacity" type="text" className="form-control" id="capacity"
                                                name="capacity" onChange={this.handleChange} />
                                        </div>
                                        <div className="col-md-3 form-group p_star">
                                            <input placeholder="Doors" type="text" className="form-control" id="doors" name="doors" onChange={this.handleChange} />
                                            <span></span>
                                        </div>
                                        <div className="col-md-3 form-group p_star">
                                            <input placeholder="Engine Size" type="text" className="form-control" id="engineSize"
                                                name="engineSize" onChange={this.handleChange} />
                                        </div>
                                        <div className="col-md-3 form-group p_star">
                                            <input placeholder="cylinders" type="text" className="form-control" id="cylinders"
                                                name="cylinders" onChange={this.handleChange} />
                                        </div>
                                        <div className="col-md-3 form-group p_star">
                                            <input placeholder="Feul Capacity" type="text" className="form-control" id="feulCapacity"
                                                name="feulCapacity" onChange={this.handleChange} />
                                        </div>
                                        <div className="col-md-3 form-group p_star">
                                            <input placeholder="Feul Type" type="text" className="form-control" id="feulType"
                                                name="feulType" onChange={this.handleChange} />
                                        </div>
                                        <div className="col-md-3 form-group p_star">
                                            <input placeholder="transmission" type="text" className="form-control" id="transmission"
                                                name="transmission" onChange={this.handleChange} />
                                        </div>
                                        <div className="col-md-3 form-group p_star">
                                            <input placeholder="Gear Box" type="text" className="form-control" id="gearBox"
                                                name="gearBox" onChange={this.handleChange} />
                                        </div>
                                        <div className="col-md-3 form-group p_star">
                                            <input placeholder="weight" type="text" className="form-control" id="weight" name="weight" onChange={this.handleChange} />
                                        </div>
                                        <div className="col-md-3 form-group p_star">
                                            <input placeholder="length" type="text" className="form-control" id="length" name="length" onChange={this.handleChange} />
                                            <span></span>
                                        </div>
                                        <div className="col-md-3 form-group p_star">
                                            <input placeholder="height" type="text" className="form-control" id="height" name="height" onChange={this.handleChange} />
                                        </div>
                                        <div className="col-md-3 form-group p_star">
                                            <input placeholder="width" type="text" className="form-control" id="width" name="width" onChange={this.handleChange} />
                                        </div>
                                        <div className="col-md-3">
                                            <input type="file" id="picture" name="picture" accept="image/*" />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <textarea className="form-control" name="description" id="description" rows="1"
                                                placeholder="Vehicle Description" onChange={this.handleChange}></textarea>
                                        </div>
                                        <input type="submit" className="primary-btn" value="Add" id="addBtn" />

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createAd: request => dispatch(createAd(request))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAd);