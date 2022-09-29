import React, { useState, useEffect } from 'react'
import Common from '../Common/Common'
import CommonBack from '../Common/CommonBack'
import RecentProp from '../Home/RecentProp'

function Blog(props) {
    return (
        <>
            <CommonBack imgSrc={"./images/about.png"} title={"Blog"} heading={"Blog Grid - Our Blogs"} />
            <RecentProp />
            <Common />
        </>
    )
}

export default Blog