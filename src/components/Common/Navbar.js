import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar(props) {
    const [toggler, setToggler] = useState(true)
    return (
        <>
            <nav className="navbar navbar-expand-md sticky-top">
                <div className="container">
                    <NavLink className="navbar-brand" to={'/home'}><img src="./images/logo.png" alt="logo" /></NavLink>
                    <span className="navbar-toggler text-white" type="button" onClick={() => setToggler(!toggler)} data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        {toggler ? <i className="bi bi-list"></i> : <i className="bi bi-x"></i>}
                    </span>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/home"}>Home</NavLink></li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/about"}>About</NavLink></li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/services"}>Services</NavLink></li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/blog"}>Blog</NavLink></li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/pricing"}>Pricing</NavLink></li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/contact"}>Contact</NavLink></li>
                            <li className="nav-item align-self-end ">
                                <NavLink className="nav-link text-nowrap my-list" to={"/mylist"}><span className='rounded-circle px-2'>2</span> My List</NavLink></li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-nowrap text-white sign-btn rounded float-end" to={"/signin"}><i className="bi bi-box-arrow-right me-2 fs-6"></i> Sign In</NavLink></li>
                            {/* <li className="nav-item">
                                <a className="nav-link text-nowrap text-white sign-btn rounded float-end" href="#PropType"><i className="bi bi-box-arrow-right me-2 fs-6"></i> Sign In</a></li> */}
                        </ul >
                    </div >
                </div >
            </nav >
        </>
    )
}

export default Navbar