import React from 'react'
import { NavLink } from 'react-router-dom'

function Pnf(props) {
    return (
        <div className='container my-5'>
            <div className="row text-center">
                <div className="col-md-12">
                    <h1 className='display-3  text-danger'>Page not found</h1>
                    <NavLink to={'/'} className="btn btn-warning">Return Home</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Pnf