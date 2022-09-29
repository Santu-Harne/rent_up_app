import React from 'react'
import "./Footer.css"

function Footer(props) {
    return (
        <section className="Footer pt-5">
            <div className='container container-footer pt-3'>
                <div className="row">
                    <div className="col-lg-6 col-sm-8 mb-5 align-item-center">
                        <img src="./images/logo-light.png" alt="" />
                        <h2 className='text-white my-4'>Do You Need Help With Anything?</h2>
                        <p className='fs-5 mb-5'>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
                        <form className="mb-3 d-flex" autoComplete='off'>
                            <input type="email" name="email" id="email" className="form-control" placeholder="Email Address" />
                            <button type='button' className='border-0 rounded text-white fw-bold px-4 ms-1 float-right'>Subscribe</button>
                        </form>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 text-nowrap mb-5 align-item-center">
                        <h4 className='text-white mb-5'>LAYOUTS</h4>
                        <ul>
                            <li><p className="fs-5 mb-4">Home Page</p></li>
                            <li><p className="fs-5 mb-4">About Page</p></li>
                            <li><p className="fs-5 mb-4">Service Page</p></li>
                            <li><p className="fs-5 mb-4">Property Page</p></li>
                            <li><p className="fs-5 mb-4">Contact Page</p></li>
                            <li><p className="fs-5 mb-4">Single Blog</p></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-8 col-sm-8 text-nowrap mb-5 align-item-center">
                        <h4 className='text-white mb-5'>ALL SECTION</h4>
                        <ul>
                            <li><p className="fs-5 mb-4">Headers</p></li>
                            <li><p className="fs-5 mb-4">Features</p></li>
                            <li><p className="fs-5 mb-4">Attractive</p></li>
                            <li><p className="fs-5 mb-4">Testimonials</p></li>
                            <li><p className="fs-5 mb-4">Videos</p></li>
                            <li><p className="fs-5 mb-4">Footers</p></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 mb-5">
                        <h4 className='text-white mb-5'>COMPANY</h4>
                        <ul>
                            <li><p className="fs-5 mb-4">About</p></li>
                            <li><p className="fs-5 mb-4">Blog</p></li>
                            <li><p className="fs-5 mb-4">Pricing</p></li>
                            <li><p className="fs-5 mb-4">Affiliate</p></li>
                            <li><p className="fs-5 mb-4">Login</p></li>
                            <li><p className="fs-5 mb-4">Changelog</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-12 border-top border-secondary border-opacity-25 text-center">
                <p className='fs-5 py-4 m-0'>© 2021 RentUP. Designd By GorkCoder.</p>
            </div>

        </section>
    )
}

export default Footer