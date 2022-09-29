import React from 'react'
import './ContactUs.css'

function ContactUs(props) {
    return (
        <section className="ContactUs py-5">
            <div className='container'>
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-start">
                        <div className='text-white' >
                            <h1 className='text-white fw-bold display-5'>Do You Have Questions?</h1>
                            <h5>We'll help you to grow your career and growth.</h5>
                        </div>
                        <button className='cont-btn fs-4 px-5 py-4 rounded-pill'>Contact Us Today</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs