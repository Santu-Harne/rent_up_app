import React, { useState, useEffect } from 'react'
import Common from '../Common/Common'
import CommonBack from '../Common/CommonBack'
import './About.css'

function About(props) {
    return (
        <>
            <CommonBack imgSrc={"./images/about.png"} title={"About"} heading={"About Us - Who We Are?"} />

            <section className="About">
                <div className="container" >
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4">
                            <h1 className='fw-semibold display-5'>Our Agency Story</h1>
                            <h5 className='text-secondary' >Check out our company story and work process</h5>

                            <h5 className='lh-lg mt-4 fw-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>

                            <h5 className='lh-lg mt-4 fw-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>

                            <button className='border-0 more-btn mt-3 rounded-pill'>More About Us</button>
                        </div>
                        <div className="col-lg-6">
                            <img src="./images/immio.png" alt="img" />
                        </div>
                    </div>
                </div>
            </section>

            <Common />
        </>
    )
}

export default About