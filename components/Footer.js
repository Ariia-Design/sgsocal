import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {

    return (
        <footer className="footer-02 footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-lg-5">
                        <div className="row">
                            <div className="col-md-12 col-lg-8 mb-md-0 mb-4">
                                <h2 className="footer-heading">About Us</h2>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            </div>
                            <div className="row">
                                <h1></h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-7">
                        <div className="row">
                            <div className="col-md-6 mb-md-0 mb-4 border-left">
                                <h2 className="footer-heading">About</h2>
                                <ul className="list-unstyled ">
                                    <li><a href="#" className="py-1 d-block text-dark">Staff</a></li>
                                    <li><a href="#" className="py-1 d-block text-dark">Team</a></li>
                                    <li><a href="#" className="py-1 d-block text-dark">Careers</a></li>
                                    <li><a href="#" className="py-1 d-block text-dark">Blog</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 mb-md-0 mb-4 border-left">
                                <h2 className="footer-heading">Resources</h2>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="py-1 d-block text-dark">Security</a></li>
                                    <li><a href="#" className="py-1 d-block text-dark">Global</a></li>
                                    <li><a href="#" className="py-1 d-block text-dark">Charts</a></li>
                                    <li><a href="#" className="py-1 d-block text-dark">Privacy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="text-center" style={{backgroundColor: 'rgb(240,239,230'}}>

                <div className="container pt-4">

                    <section className="mb-4">

                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-facebook-f"></i
                        ></a>


                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-twitter"></i
                        ></a>


                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-google"></i
                        ></a>


                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-instagram"></i
                        ></a>

                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-linkedin"></i
                        ></a>

                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-github"></i
                        ></a>
                    </section>

                </div>



                <div className="text-center text-dark p-3 border-top" style={{backgroundColor: 'rgb(240,239,230'}}>
                    © 2023 Copyright:
                    <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>

            </footer>
        </footer>
    );
}
