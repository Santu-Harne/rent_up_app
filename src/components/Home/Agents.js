import React from 'react'
import './Agents.css'
import SingleAgent from './SingleAgent'

function Agents(props) {
    return (
        <section className="Agents">
            <div className="container">
                <div className='row text-center w-75 mx-auto' >
                    <h1 className='display-5 fw-semibold'>Our Featured Agents</h1>
                    <p className='fs-5 mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid expedita eaque sint veritatis. Obcaecati culpa facere </p>
                </div>
                <div className="row">
                    <div className='agent'>
                        <SingleAgent imgSrc={"./images/team-1.png"} location={"Liverpool, Canada"} name={"Sargam S. Singh"} listCount={'50'} />
                        <SingleAgent imgSrc={"./images/team-2.png"} location={"Montreal, Canada"} name={"Harijeet M. Siller"} listCount={'70'} />
                        <SingleAgent imgSrc={"./images/team-3.png"} location={"Denever, USA"} name={"Anna K. Young"} listCount={'80'} />

                        <SingleAgent imgSrc={"./images/team-4.png"} location={"2272 Briarwood Drive"} name={"Adam K. Jollio"} listCount={'51'} />
                        <SingleAgent imgSrc={"./images/team-5.png"} location={"Liverpool, Canada"} name={"Benzee Merindo"} listCount={'42'} />
                        <SingleAgent imgSrc={"./images/team-6.png"} location={"Montreal, USA"} name={"Michael P. Grimaldo "} listCount={'38'} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Agents