import React from 'react'

function ScrollUp(props) {

    const scroll_Up = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <button className='scrollUp' onClick={() => scroll_Up()}>
            <i className="fa-solid fa-chevron-up "></i>
        </button>
    )
}

export default ScrollUp