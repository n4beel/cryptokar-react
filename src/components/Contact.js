import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <section className="small-banner-area organic-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div className="col-first">
                            <h1>Contact Us</h1>
                            <nav className="d-flex align-items-center">
                                <Link to="/">Home<span className="lnr lnr-arrow-right"></span></Link>
                                <Link to="#">Contact</Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <section className="margin-top contact_area section_gap_bottom">
                <div className="container">
                    <div className="row contact-section">

                        <div className="col-3">
                            <div className="contact_info">
                                <div className="info_item">
                                    <i className="lnr lnr-home"></i>
                                    <h6>Karachi, Pakistan</h6>
                                    <p>UBIT, University of Karachi</p>
                                </div>
                                <div className="info_item">
                                    <i className="lnr lnr-phone-handset"></i>
                                    <h6>00 (090) 078 601</h6>
                                    <p>Mon to Fri 9am to 6 pm</p>
                                </div>
                                <div className="info_item">
                                    <i className="lnr lnr-envelope"></i>
                                    <h6>support@cryptokar.com</h6>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.6078144330213!2d67.11284041453406!3d24.945426947991468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338a24e592ea7%3A0x396c11bf227c8d35!2sUBIT%20-%20Umaer%20Basha%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2s!4v1579637562367!5m2!1sen!2s"
                                width="100%" height="450" frameborder="0" allowfullscreen="" title="UBIT Location"></iframe>
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Contact
