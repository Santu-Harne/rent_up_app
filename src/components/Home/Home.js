import React, { useState, useEffect } from 'react'
import Agents from './Agents'
import Award from './Award'
import ContactUs from '../Common/ContactUs'
import Footer from '../Common/Footer'
import Location from './Location'
import '../Common/Navbar.css'
import Package from './Package'
import PropType from './PropType'
import RecentProp from './RecentProp'
import Search from './Search'
import Common from '../Common/Common'

function Home(props) {
    return (
        <section className='home-section'>
            <Search />
            <PropType />
            <RecentProp />
            <Award />
            <Location />
            <Agents />
            <Package />
            <Common />
        </section>

    )
}

export default Home