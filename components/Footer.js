import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {

    // return (
    //     <footer className="footer-02 footer">
    //         <div className="container">
    //             <div className="row">
    //                 <div className="col-md-4 col-lg-5">
    //                     <div className="row">
    //                         <div className="col-md-12 col-lg-8 mb-md-0 mb-4">
    //                             <h2 className="footer-heading">About Us</h2>
    //                             <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
    //                         </div>
    //                         <div className="row">
    //                             <h1></h1>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className="col-md-8 col-lg-7">
    //                     <div className="row">
    //                         <div className="col-md-6 mb-md-0 mb-4 border-left">
    //                             <h2 className="footer-heading">About</h2>
    //                             <ul className="list-unstyled ">
    //                                 <li><a href="#" className="py-1 d-block text-dark">Staff</a></li>
    //                                 <li><a href="#" className="py-1 d-block text-dark">Team</a></li>
    //                                 <li><a href="#" className="py-1 d-block text-dark">Careers</a></li>
    //                                 <li><a href="#" className="py-1 d-block text-dark">Blog</a></li>
    //                             </ul>
    //                         </div>
    //                         <div className="col-md-6 mb-md-0 mb-4 border-left">
    //                             <h2 className="footer-heading">Resources</h2>
    //                             <ul className="list-unstyled">
    //                                 <li><a href="#" className="py-1 d-block text-dark">Security</a></li>
    //                                 <li><a href="#" className="py-1 d-block text-dark">Global</a></li>
    //                                 <li><a href="#" className="py-1 d-block text-dark">Charts</a></li>
    //                                 <li><a href="#" className="py-1 d-block text-dark">Privacy</a></li>
    //                             </ul>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <footer className="text-center" style={{backgroundColor: 'rgb(240,239,230'}}>

    //             <div className="container pt-4">

    //                 <section className="mb-4">

    //                     <a
    //                         className="btn btn-link btn-floating btn-lg text-dark m-1"
    //                         href="#!"
    //                         role="button"
    //                         data-mdb-ripple-color="dark"
    //                     ><i className="fab fa-facebook-f"></i
    //                     ></a>


    //                     <a
    //                         className="btn btn-link btn-floating btn-lg text-dark m-1"
    //                         href="#!"
    //                         role="button"
    //                         data-mdb-ripple-color="dark"
    //                     ><i className="fab fa-twitter"></i
    //                     ></a>


    //                     <a
    //                         className="btn btn-link btn-floating btn-lg text-dark m-1"
    //                         href="#!"
    //                         role="button"
    //                         data-mdb-ripple-color="dark"
    //                     ><i className="fab fa-google"></i
    //                     ></a>


    //                     <a
    //                         className="btn btn-link btn-floating btn-lg text-dark m-1"
    //                         href="#!"
    //                         role="button"
    //                         data-mdb-ripple-color="dark"
    //                     ><i className="fab fa-instagram"></i
    //                     ></a>

    //                     <a
    //                         className="btn btn-link btn-floating btn-lg text-dark m-1"
    //                         href="#!"
    //                         role="button"
    //                         data-mdb-ripple-color="dark"
    //                     ><i className="fab fa-linkedin"></i
    //                     ></a>

    //                     <a
    //                         className="btn btn-link btn-floating btn-lg text-dark m-1"
    //                         href="#!"
    //                         role="button"
    //                         data-mdb-ripple-color="dark"
    //                     ><i className="fab fa-github"></i
    //                     ></a>
    //                 </section>

    //             </div>



    //             <div className="text-center text-dark p-3 border-top" style={{backgroundColor: 'rgb(240,239,230'}}>
    //                 © 2023 Copyright:
    //                 <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    //             </div>

    //         </footer>
    //     </footer>
    // );
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="twitter" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="google" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="github" />
                    </a>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon="gem" className="me-3" />
                                Company name
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Angular
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    React
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Vue
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Laravel
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Pricing
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Settings
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Orders
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Help
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                New York, NY 10012, US
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                info@example.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                            </p>
                            <p>
                                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2021 Copyright:
                <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                    MDBootstrap.com
                </a>
            </div>
        </MDBFooter>
    );
}
