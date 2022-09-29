import React from 'react'

function SingleLocation(props) {
    const { imgSrc, title } = props
    return (
        <div className='SingleLocation position-relative mt-4'>
            {/* <img src={'./images/city-1.png'} alt="img" /> */}
            <img src={imgSrc} alt="img" />
            <div>
                <h5>{title}</h5>
                <p className='text-white'>12 Villas07 Offices10 Apartments</p>
            </div>
        </div>
    )
}

export default SingleLocation