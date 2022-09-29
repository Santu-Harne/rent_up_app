import React from 'react'
import './Award.css'

function Award(props) {
    return (
        <section className="award">
            <div className="container">
                <div className="row ">
                    <div className='w-75 text-center mx-auto'>
                        <h4 className='text-success'>Our Awards</h4>
                        <h3 className='text-white display-6 pb-5 mb-4'>Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-6 text-center">
                        <i className="fa-solid fa-trophy"></i>
                        <h1>32 M</h1>
                        <h5>BLue Burmin Award</h5>
                    </div>
                    <div className="col-md-3 col-sm-6 text-center">
                        <i className="fa-solid fa-briefcase"></i>
                        <h1>43 M</h1>
                        <h5>Mimo X11 Award</h5>
                    </div>
                    <div className="col-md-3 col-sm-6 text-center">
                        <i className="fa-solid fa-lightbulb"></i>
                        <h1>51 M</h1>
                        <h5>Australian UGC Award</h5>
                    </div>
                    <div className="col-md-3 col-sm-6 text-center">
                        <i className="fa-sharp fa-solid fa-heart"></i>
                        <h1>42 M</h1>
                        <h5>IITCA Green Award</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Award
//<i class="fa-solid fa-trophy"></i>
//<i class="fa-solid fa-briefcase"></i>
//<i class="fa-solid fa-lightbulb"></i>
//<i class="fa-sharp fa-solid fa-heart"></i>