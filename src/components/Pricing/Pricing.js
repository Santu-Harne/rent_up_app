import React, { useState, useEffect } from 'react'
import Common from '../Common/Common'
import CommonBack from '../Common/CommonBack'
import Package from '../Home/Package'


function Pricing(props) {
    return (
        <>
            <CommonBack imgSrc={"./images/pricing.png"} title={"30 days money back guarantee"} heading={"No Extra Fees. Friendly Support"} />
            <Package />
            <Common />
        </>
    )
}

export default Pricing