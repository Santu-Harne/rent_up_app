import React from 'react'

function SingleAgent(props) {
    const { listCount, name, location, imgSrc } = props
    return (
        <div className='SingleAgent bg-white rounded border p-4'>
            <button className='border-0 list-btn text-white rounded-pill' >{listCount} Listings</button>
            <div className='img-div text-center'>
                <div className='d-inline-block position-relative' >
                    <img src={imgSrc} alt="img" />
                    <i className="fa-solid fa-circle-check text-primary"></i>
                </div>
            </div>
            <div className='mt-4 text-center social-med'>
                <label className='text-secondary fs-5 mb-3'><i className="bi bi-geo-alt-fill"></i>{location}</label>
                <h5>{name}</h5>
                <a href=""></a>
                <div className='justify-content-evenly d-flex'>
                    <a href="#SingleAgent"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#SingleAgent"><i className="fa-brands fa-linkedin-in"></i> </a>
                    <a href="#SingleAgent"><i className="fa-brands fa-twitter"></i> </a>
                    <a href="#SingleAgent"><i className="fa-brands fa-instagram"></i> </a>
                </div>
            </div>
            <div className='d-flex justify-content-between'>
                <button className=' btn-msg border-0 rounded'><i className="fa-solid fa-envelope fs-3 pe-2"></i>Message</button>
                <button className='btn-cal bg-dark border-0 rounded'><i className="fa-solid fa-phone-flip fs-4 "></i></button>
            </div>
        </div>
    )
}

export default SingleAgent