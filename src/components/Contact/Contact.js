import React from 'react'
import './Contact.css'
import CommonBack from './../Common/CommonBack';
import Common from '../Common/Common';


function Contact(props) {
    return (
        <>
            <CommonBack imgSrc={"./images/pricing.png"} title={"Contact Us"} heading={"Get Helps & Friendly Support"} />
            <section className="Contact">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-8 offset-2 shadow-lg rounded-3 p-5">
                            <h5 className="form-label mt-4">Fill The Form</h5>
                            <input className='form-control' type="text" name="name" id="name" placeholder='Name' />
                            <input className='form-control' type="email" name="email" id="email" placeholder='Email' />
                            <input className='form-control' type="text" name="subject" id="subject" placeholder='Subject' />
                            <textarea className='form-control' name="description" id="description" cols="30" rows="5" placeholder='Description'></textarea>
                            <button className='border-0 rounded'>Submit Request</button>
                        </div>
                    </div>
                </div>
            </section>
            <Common />
        </>
    )
}

export default Contact