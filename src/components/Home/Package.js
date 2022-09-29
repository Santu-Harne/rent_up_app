import React from 'react'
import './Package.css'

function Package(props) {
    return (
        <section className="Package">
            <div className="container">
                <div className='row text-center w-75 mx-auto' >
                    <h1 className='display-5 fw-semibold'>Select Your Package</h1>
                    <p className='fs-5 mb-5'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                </div>
                <div className="row">
                    <div className="package-grid align-items-center">
                        <div className="shadow-lg rounded-4 text-center p-4 ">
                            <h3 className='fw-bold'>Basic</h3>
                            <h1 className='display-2 fw-bold text-dark py-3'><span className='fs-1 fw-semibold'>$</span>29</h1>
                            <h4 className='mb-5 text-nowrap'>per user, per month</h4>
                            <ul className="list-group">
                                <li className="list-item d-flex justify-content-between mb-3">
                                    <i className="fa-solid fa-check rounded-circle"></i>
                                    <label className='text-black fs-5 text-end'>95.5% Uptime Guarantee</label>
                                </li>
                                <li className="list-item d-flex justify-content-between mb-3">
                                    <i className="fa-solid fa-check rounded-circle"></i>
                                    <label className='text-black fs-5 text-end'>120GB CDN Bandwidth</label>
                                </li>
                                <li className="list-item d-flex justify-content-between mb-3">
                                    <i className="fa-solid fa-check rounded-circle"></i>
                                    <label className='text-black fs-5 text-end'>5GB Cloud Storage</label>
                                </li>
                                <li className="list-item d-flex justify-content-between mb-3">
                                    <i className="fa-solid fa-x rounded-circle"></i>
                                    <label className='text-black fs-5 text-end'>Personal Help Support</label>
                                </li>
                                <li className="list-item d-flex justify-content-between mb-3">
                                    <i className="fa-solid fa-x rounded-circle"></i>
                                    <label className='text-black fs-5 text-end'>Enterprise SLA</label>
                                </li>
                            </ul>
                            <button className='start-plan fs-4 px-5 py-4 rounded-pill bg-transparent'>Start Basic</button>
                        </div>
                        <div className="shadow-lg rounded-4 text-center p-4 ">
                            <button className='border-0 list-btn text-white rounded-pill' >Best Value</button>
                            <h3 className='fw-bold'>Standard</h3>
                            <h1 className='display-2 fw-bold text-dark py-3'><span className='fs-1 fw-semibold'>$</span>49</h1>
                            <h4 className='mb-5'>per user, per month</h4>
                            <ul className="list-group">
                                <li className="list-item d-flex justify-content-between mb-3">
                                    <i className="fa-solid fa-check rounded-circle"></i>
                                    <label className='text-black fs-5 text-end'>95.5% Uptime Guarantee</label>
                                </li>
                                <li className="list-item d-flex justify-content-between mb-3">
                                    <i className="fa-solid fa-check rounded-circle"></i>
                                    <label className='text-black fs-5 text-end'>150GB CDN Bandwidth</label>
                                </li>
                                <li className="list-item d-flex justify-content-between mb-3">
                                    <i className="fa-solid fa-check rounded-circle"></i>
                                    <label className='text-black fs-5 text-end'>10GB Cloud Storage</label>
                                </li>
                                <li className="list-item d-flex justify-content-between mb-3">
                                    <i className="fa-solid fa-check rounded-circle"></i>
                                    <label className='text-black fs-5 text-end'>Personal Help Support</label>
                                </li>
                                <li className="list-item d-flex justify-content-between mb-3">
                                    <i className="fa-solid fa-x rounded-circle"></i>
                                    <label className='text-black fs-5 text-end'>Enterprise SLA</label>
                                </li>
                            </ul>
                            <button className='start-plan best-plan text-nowrap fs-4 px-5 py-4 rounded-pill bg-transparent'>Start Standard</button>
                        </div>
                        <div className="shadow-lg rounded-4 text-center p-4 ">
                            <h3 className='fw-bold'>Platinum</h3>
                            <h1 className='display-2 fw-bold text-dark py-3'><span className='fs-1 fw-semibold'>$</span>79</h1>
                            <h4 className='mb-5'>2 user, per month</h4>
                            <ul className="list-group">
                                <li className="list-item d-flex justify-content-between mb-3">
                                    <i className="fa-solid fa-check rounded-circle"></i>
                                    <label className='text-black fs-5 text-end'>100% Uptime Guarantee</label>
                                </li>
                                <li className="list-item d-flex justify-content-between mb-3">
                                    <i className="fa-solid fa-check rounded-circle"></i>
                                    <label className='text-black fs-5 text-end'>200GB CDN Bandwidth</label>
                                </li>
                                <li className="list-item d-flex justify-content-between mb-3">
                                    <i className="fa-solid fa-check rounded-circle"></i>
                                    <label className='text-black fs-5 text-end'>20GB Cloud Storage</label>
                                </li>
                                <li className="list-item d-flex justify-content-between mb-3">
                                    <i className="fa-solid fa-check rounded-circle"></i>
                                    <label className='text-black fs-5 text-end'>Personal Help Support</label>
                                </li>
                                <li className="list-item d-flex justify-content-between mb-3">
                                    <i className="fa-solid fa-x rounded-circle"></i>
                                    <label className='text-black fs-5 text-end'>Enterprise SLA</label>
                                </li>
                            </ul>
                            <button className='start-plan fs-4 px-5 py-4 rounded-pill bg-transparent text-nowrap'>Start Platinum</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Package