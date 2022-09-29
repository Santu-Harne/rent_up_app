import React from 'react'
import './RecentProp.css'
import SingleRecProp from './SingleRecProp';

function RecentProp(props) {

    return (
        <section className='RecentProp'>
            <div className="container">
                <div className='row text-center w-75 mx-auto' >
                    <h1 className='display-5 fw-semibold'>Recent Property Listed</h1>
                    <p className='fs-5 mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid expedita eaque sint veritatis. Obcaecati culpa facere </p>
                </div>
                <div className="row">
                    <div className='RecProp'>
                        <div>
                            <SingleRecProp imgSrc={'./images/p-1.png'} title={"Red Carpet Real Estate"} location={"210 Zirak Road, Canada"} price={"3,700"} type={"Apartment"} businessType={"rent"} />
                        </div>
                        <div>
                            <SingleRecProp imgSrc={'./images/p-2.png'} title={"Fairmount Properties"} location={"5698 Zirak Road, NewYork"} price={"9,750"} type={"Condos"} businessType={"sale"} />
                        </div>
                        <div>
                            <SingleRecProp imgSrc={'./images/p-3.png'} title={"The Real Estate Corner"} location={"5624 Mooker Market, USA"} price={"5,860"} type={"Offices"} businessType={"rent"} />
                        </div>
                        <div>
                            <SingleRecProp imgSrc={'./images/p-4.png'} title={"Herringbone Reality"} location={"5621 Liverpoo, London"} price={"7,540"} type={"Homes & Villas"} businessType={"sale"} />
                        </div>
                        <div>
                            <SingleRecProp imgSrc={'./images/p-5.png'} title={"Brick Lane Realty"} location={"210 Montreal Road, Canada"} price={"4,850"} type={"Commercial"} businessType={"rent"} />
                        </div>
                        <div>
                            <SingleRecProp imgSrc={'./images/p-6.png'} title={"Banyon Tree Realty"} location={"210 Zirak Road, Canada"} price={"2,742"} type={"Apartment"} businessType={"sale"} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RecentProp