import React from 'react';

import payment1 from './../../assets/payment-1.svg';
import payment2 from './../../assets/payment-2.svg';
import payment3 from './../../assets/payment-3.svg';
import payment4 from './../../assets/payment-4.svg';
import payment5 from './../../assets/payment-5.svg';
import payment6 from './../../assets/payment-6.svg';

const Footer = () => {
  return (
    <>
      <div className="footer mt-5 py-5">
        <div className="container">
            <div className="row gy-4">
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-md-4">
                            <h3 className='mb-3'>Company</h3>
                            <p className="mb-0">Find a location nearest</p>
                            <p className='mb-4'>you. See <strong>Our Stores</strong></p>
                            <p className="mb-0"><strong>+237 2240 7723</strong></p>
                            <p>blushAura@domain.com</p>
                        </div>

                        <div className="col-md-4">
                            <h3 className="mb-3">Useful Links</h3>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <a href="" className='text-decoration-none'>- New Products</a>
                                </li>
                                <li className="mb-2">
                                    <a href="" className='text-decoration-none'>- Best Sellers</a>
                                </li>
                                <li className="mb-2">
                                    <a href="" className='text-decoration-none'>- Bundle & Save</a>
                                </li>
                                <li className="mb-2">
                                    <a href="" className='text-decoration-none'>- Online Gift Card</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4">
                            <h3 className="mb-3">Information</h3>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <a href="" className='text-decoration-none'>- Start A Return</a>
                                </li>
                                <li className="mb-2">
                                    <a href="" className='text-decoration-none'>- BContact Us</a>
                                </li>
                                <li className="mb-2">
                                    <a href="" className='text-decoration-none'>- Shipping FAQ</a>
                                </li>
                                <li className="mb-2">
                                    <a href="" className='text-decoration-none'>- Terms & Conditions</a>
                                </li>
                                <li className="mb-2">
                                    <a href="" className='text-decoration-none'>- Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <h3 className="mb-4">Good emails</h3>
                    <p className="mb-5">Enter your email below to be the first to know about naw collections and product launches</p>
                    <div className="subscribe-box d-flex">
                        <input type="email" className='form-control' placeholder='Enter your email address' />
                        <button className="btn">Subscribe</button>
                    </div>
                </div>
            </div>

            <div className="footer-bottom my-5">
                <div className="row align-items-start">
                    <div className="col-lg-4">
                        <div className="footer-icon-text d-flex gap-3 justify-content-center jstify-content-lg-end">
                            <p>&copy; Glowing 2025 | Powered by BlushAura</p>
                            <div className="footer-icons d-flex gap-2">
                                <i className="ri-instagram-line"></i>
                                <i className="ri-twitter-x-line"></i>
                                <i className="ri-facebook-circle-fill"></i>
                                <i className="ri-youtube-fill"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer-logo text-center">
                            <a href="#" className="navbar-brand mx-auto order-0">
                                <h2 className="m-0 fw-bold" style={{letterSpacing: '2px'}}>BLUSHAURA</h2>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="payment-img mt-xl-0 d-flex gap-2 justify-content-center justify-content-lg-end">
                            <img src={payment1} alt="" className="img-fluid" />
                            <img src={payment2} alt="" className="img-fluid" />
                            <img src={payment3} alt="" className="img-fluid" />
                            <img src={payment4} alt="" className="img-fluid" />
                            <img src={payment5} alt="" className="img-fluid" />
                            <img src={payment6} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
