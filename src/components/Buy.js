import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

const Buy = props => {
    let { cars, auth } = props;
    return (
        <div>
            <Navbar />
            <section className="small-banner-area organic-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div className="col-first">
                            <h1>Shop Category page</h1>
                            <nav className="d-flex align-items-center">
                                <Link to="/">Home<span className="lnr lnr-arrow-right"></span></Link>
                                <Link to="buy">Buy</Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <section className="lattest-product-area pb-40 category-list">
                        <div className="row" id="product-catalog">
                            {
                                cars && cars.map(car => {
                                    return (
                                        auth.uid !== car.userUid && car.status === 'active' ?

                                            <div key={car.id} className="col-lg-3 col-md-6">
                                                <Link to={"/car/" + car.id}>
                                                    <div className="single-product">
                                                        <div className="image-container">
                                                            <img alt="" className="img-fluid" src={car.imgUrl} />
                                                        </div>
                                                        <div className="product-details">
                                                            <h6>{`${car.manufacturer} ${car.name} ${car.model}`}</h6>
                                                            <div className="price">
                                                                <h6>Rs. {car.price}</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            : null

                                    )
                                })
                            }
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}

const mapStateToProps = state => {
    // console.log(state);
    return {
        cars: state.firestore.ordered.cars,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'cars' }
    ])
)(Buy);
