import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

const CarDetails = props => {
    let { car } = props;
    if (car) {
        return (
            <div>
                <Navbar />
                <section className="small-banner-area organic-breadcrumb">
                    <div className="container">
                        <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                            <div className="col-first">
                                <h1>Product Details Page</h1>
                                <nav className="d-flex align-items-center">
                                    <Link to="/">Home<span className="lnr lnr-arrow-right"></span></Link>
                                    <Link to="/buy">Buy<span className="lnr lnr-arrow-right"></span></Link>
                                    <Link to="#">Car</Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="product_image_area">
                    <div className="container">
                        <div className="row s_product_inner">
                            <div className="col-lg-6">
                                <img alt="" className="car-image" src={car.imgUrl} />
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <div className="s_product_text">
                                    <h3>{`${car.manufacturer} ${car.name} ${car.model}`}</h3>
                                    <h2>{car.price}</h2>
                                    <p>{car.description}</p>
                                    <div className="card_area d-flex align-items-center">
                                        <a className="primary-btn" href="#">Buy</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="product_description_area">

                    <div className="container">
                        <h3>Specification</h3>

                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                                    aria-controls="home" aria-selected="false">Performance</a>
                            </li>
                        </ul>

                        <div className="tab-content" id="myTabContent">

                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="table-responsive">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h5>Engine Size</h5>
                                                </td>
                                                <td>
                                                    <h5>{car.engineSize}</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>Cylinders</h5>
                                                </td>
                                                <td>
                                                    <h5>{car.cylinders}</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>Feul Capacity</h5>
                                                </td>
                                                <td>
                                                    <h5>{car.feulCapacity}</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>Feul Type</h5>
                                                </td>
                                                <td>
                                                    <h5>{car.feulType}</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>Transmission</h5>
                                                </td>
                                                <td>
                                                    <h5>{car.transmission}</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>Gear Box</h5>
                                                </td>
                                                <td>
                                                    <h5>{car.gearBox}</h5>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                                    aria-controls="profile" aria-selected="false">Characterstics</a>
                            </li>
                        </ul>

                        <div className="tab-content" id="myTabContent">

                            <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="table-responsive">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h5>Width</h5>
                                                </td>
                                                <td>
                                                    <h5>{car.width}</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>Height</h5>
                                                </td>
                                                <td>
                                                    <h5>{car.height}</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>Length</h5>
                                                </td>
                                                <td>
                                                    <h5>{car.length}</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>Weight</h5>
                                                </td>
                                                <td>
                                                    <h5>{car.weight}</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>Color</h5>
                                                </td>
                                                <td>
                                                    <h5>{car.color}</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>Capacity</h5>
                                                </td>
                                                <td>
                                                    <h5>{car.capacity}</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>Doors</h5>
                                                </td>
                                                <td>
                                                    <h5>{car.doors}</h5>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />

            </div>
        )
    }
    else {
        return (
            null
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const cars = state.firestore.data.cars;
    const car = cars ? cars[id] : null;
    return {
        car: car,
        auth: state.firebase.auth,
    }
}



export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'cars' }
    ])
)(CarDetails);