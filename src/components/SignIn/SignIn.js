import React, { useState, useEffect } from 'react'
import Common from '../Common/Common'
import './SignIn.css'

function SignIn(props) {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-8 rounded-4 offset-lg-2 ">
                        <div className="row flex-wrap-reverse">
                            <div className="mb-3 col-md-6 rounded-4 text-center shadow p-4">
                                <h2 className='fw-bold'>Sign In</h2>
                                <div className='icons my-4'>
                                    <a href="#signIn"><i class="fa-brands fa-facebook-f"></i></a>
                                    <a href="#signIn"><i class="fa-brands fa-google-plus-g"></i></a>
                                    <a href="#signIn"><i class="fa-brands fa-linkedin-in"></i></a>
                                </div>
                                <label htmlFor="">Or use your account</label>
                                <input type="text" className='form-control mb-4' name="name" id="name" placeholder='Name' />
                                <input type="email" className='form-control mb-4' name="email" id="email" placeholder='Email' />
                                <input type="password" className='form-control mb-4' name="password" id="password" placeholder='Password' />
                                <button className='border-0 bg-info px-5 py-2 rounded-pill text-white fw-semibold'>Sign In</button>
                            </div>
                            <div className="mb-3 col-md-6 d-flex rounded-4 bg-danger shadow p-4 align-items-center text-center">
                                <div className="">
                                    <h2 className='text-white fw-bold'>Hello, Friend!</h2>
                                    <p className='text-white'>Enter your personal details and start journey with us</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Common />
        </>
    )
}

export default SignIn