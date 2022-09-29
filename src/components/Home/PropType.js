import React from 'react'
import './PropType.css'
import SingleProp from './SingleProp'

function PropType(props) {
    return (
        <section className="PropType" id='PropType'>
            <div className='container'>
                <div className="row text-center">
                    <h1 className='display-5 fw-semibold' >Featured Property Types</h1>
                    <p className='fs-5 mb-5'>Find All Type of Property</p>
                </div>
                <div className="PropGrid">
                    <div>
                        <SingleProp imgSrc={"./images/h1.png"} title={"Family House"} label={"122 Property"} />
                    </div>
                    <div>
                        <SingleProp imgSrc={"./images/h2.png"} title={"House & Villa"} label={"155 Property"} />
                    </div>
                    <div>
                        <SingleProp imgSrc={"./images/h3.png"} title={"Apartment"} label={"300 Property"} />
                    </div>
                    <div>
                        <SingleProp imgSrc={"./images/h4.png"} title={"Office & Studio"} label={"80 Property"} />
                    </div>
                    <div>
                        <SingleProp imgSrc={"./images/h5.png"} title={"Villa & Condo"} label={"80 Property"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PropType