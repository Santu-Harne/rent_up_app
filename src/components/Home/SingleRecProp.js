import React, { useState } from 'react'

function SingleRecProp(props) {
    const [propType, setPropType] = useState(props.businessType)
    const { title, price, location, type, imgSrc } = props
    const [like, setLike] = useState(false)
    return (
        <div className='SingleRecProp shadow'>
            <img src={imgSrc} alt="img" />
            <div className='p-4'>
                <button className={`${propType === "sale" ? "sale" : "rent"} px-3 py-1 fw-bold border-0`}>{propType === "sale" ? "For Sale" : "For Rent"}</button>
                <i type='button' onClick={() => setLike(!like)} className={`bi fs-4 text-secondary bi-heart-fill float-end ${like ? "text-danger" : ""}`}></i>
                <h5 className=" mt-4">{title}</h5>
                <h5 className='text-secondary fs-6'><i className="bi bi-geo-alt-fill"></i>{location}</h5>
            </div>
            <div className='d-flex justify-content-between border-top px-4 py-3'>
                <div className='text-nowrap'>
                    <button className='price-button border-0 px-4 py-3 rounded-pill fs-5 fw-semibold text-white'>${price}</button>
                    <label className='fs-6' >/sqft</label>
                </div>
                <h5 className='align-self-center text-end'>{type}</h5>
            </div>
        </div >
    )
}

export default SingleRecProp