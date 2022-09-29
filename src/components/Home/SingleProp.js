import React from 'react'

function SingleProp(props) {
    const { imgSrc, title, label } = props
    return (
        <div className='singleProp p-4 shadow text-center rounded'>
            <img src={imgSrc} className='mb-4' alt="" />
            <h4 className='text-nowrap' >{title}</h4>
            <label className='text-nowrap'>{label}</label>
        </div>
    )
}

export default SingleProp