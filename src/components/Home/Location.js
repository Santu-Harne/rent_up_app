import React from 'react'
import './Location.css'
import SingleLocation from './SingleLocation'

function Location(props) {
    return (
        <section className="Location">
            <div className='container'>
                <div className='row text-center w-50 mx-auto' >
                    <h1 className='display-5 fw-semibold'>Explore By Location</h1>
                    <p className='fs-5 mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid expedita eaque sint veritatis. Obcaecati culpa facere </p>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <SingleLocation title={"New Orleans, Louisiana"} imgSrc={"./images/city-1.png"} />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <SingleLocation title={"Jerrsy, United State"} imgSrc={"./images/city-2.png"} />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <SingleLocation title={"Liverpool, London"} imgSrc={"./images/city-3.png"} />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <SingleLocation title={"NewYork, United States"} imgSrc={"./images/city-4.png"} />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <SingleLocation title={"Montreal, Canada"} imgSrc={"./images/city-5.png"} />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <SingleLocation title={"California, USA"} imgSrc={"./images/city-6.png"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Location