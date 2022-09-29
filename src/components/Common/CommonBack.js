import React from 'react'
import './CommonBack.css'

function CommonBack(props) {
    return (
        <section className='CommonBack d-flex' style={{
            background: `linear-gradient(rgba(17,40,72,.629), rgba(17,40,72,.629)), url(${props.imgSrc})`, backgroundSize: "cover", backgroundPosition: "center"
        }}>
            <div className="container mt-auto">
                <div className="row ">
                    <div className='pb-4'  >
                        <h5 className='text-white'>{props.title}</h5>
                        <h1 className=' fw-semibold display-5 text-white'>{props.heading}</h1>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default CommonBack