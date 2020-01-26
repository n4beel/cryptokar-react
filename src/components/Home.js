import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer'
import Banner from './../assets/images/banner/banner-img.png'

const Home = () => {
    return (
        <div>
            <Navbar />
            <section className="banner-area">
                <div className="container">
                    <div className="row fullscreen align-items-center justify-content-start">
                        <div className="col-lg-12">
                            {/* <!-- single-slide --> */}
                            <div className="row single-slide align-items-center d-flex">
                                <div className="col-lg-5 col-md-6">
                                    <div className="banner-content">
                                        <h1>Cryptokar</h1>
                                        <p>
                                            An online storefront for cars with ease of payment through the easist and most secure
                                            payment gateway ever known to Mankind. CRYPTOCURRENCY
                                        </p>

                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="banner-img">
                                        <img className="img-fluid" src={Banner} alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home;