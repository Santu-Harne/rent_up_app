import React, { useState, useEffect } from 'react'
import { BsSearch } from "react-icons/bs";
import './Search.css'

function Search(props) {
    const [search, setSearch] = useState({
        location: '',
        propType: '',
        priceRange: ''
    })

    const changeHandler = (e) => {
        const { name, value } = e.target
        setSearch({ ...search, [name]: value })
    }
    return (
        <section className="search-section">
            <div className='container'>
                <div className="row ">
                    <div className="col-12 text-center text-white">
                        <h1 className='display-3 fw-bold text-white'>Search Your Next<br /> Home</h1>
                        <p className='text-white'>Find new & featured property located in your local city.</p>
                    </div>
                </div>
                <div className="row bg-light search-form mx-auto align-self-end rounded px-4 mt-5">
                    <form className="form">
                        <div className="row">
                            <div className="form-group col-md-3 col-sm-6 p-3">
                                <label htmlFor="location" className="form-label">City/Street</label>
                                <input type="text" name="location" id="location" value={search.location} onChange={changeHandler} className="form-control" placeholder='Location' />
                            </div>
                            <div className="form-group col-md-3 col-sm-6 border-start p-3">
                                <label htmlFor="propType" className="form-label">Property Type</label>
                                <input type="text" name="propType" id="propType" value={search.propType} onChange={changeHandler} className="form-control" placeholder='Property Type' />
                            </div>
                            <div className="form-group col-md-3 col-sm-6 border-start p-3">
                                <label htmlFor="priceRange" className="form-label">Price Range</label>
                                <input type="text" name="priceRange" id="priceRange" value={search.priceRange} onChange={changeHandler} className="form-control" placeholder='Price Range' />
                            </div>
                            <div className="form-group justify-content-between d-flex align-items-center col-md-3 col-sm-6 border-start p-3">
                                <h5 className='fs-6'>Advance<br />Filter</h5>
                                <button type='button' className='btn src-btn float-end px-4'><i className="fa fa-search text-white"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Search