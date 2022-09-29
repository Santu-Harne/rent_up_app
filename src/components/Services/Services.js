import React, { useState, useEffect } from 'react'
import Common from '../Common/Common'
import CommonBack from '../Common/CommonBack'
import PropType from '../Home/PropType'

function Services(props) {
    return (
        <>
            <CommonBack imgSrc={"./images/services.png"} title={"Services"} heading={"Services -All Services"} />

            <PropType />
            <Common />
        </>

    )
}

export default Services