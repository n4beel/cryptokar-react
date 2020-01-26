import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-area section_gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="single-footer-widget">
                            <h6>About Us</h6>
                            <p className="light-color">
                                Cryptokar is a virtual storefront for cars which can be bought with cryptocurrency.
						</p>
                        </div>
                    </div>
                    <div className="col-lg-4">

                    </div>
                    <div className="col-lg-3">

                    </div>
                    <div className="col-lg-2">
                        <div className="single-footer-widget">
                            <h6>Follow Us</h6>
                            <p className="light-color">Let us be social</p>
                            <div className="footer-social d-flex align-items-center">
                                <Link to="https://www.facebook.com"><i className="fa fa-facebook"></i></Link>
                                <Link to="https://www.facebook.com"><i className="fa fa-twitter"></i></Link>
                                <Link to="https://www.facebook.com"><i className="fa fa-dribbble"></i></Link>
                                <Link to="https://www.facebook.com"><i className="fa fa-behance"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
                    <p className="footer-text m-0 light-color">
                        Copyright &copy;
					<script>document.write(new Date().getFullYear());</script> All rights reserved | This website is
					made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <code>ERROR 404</code>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer