import React from 'react'
import Main from './Main'
import Navbar from './Navbar'
import Works from './Works'
import Noise from './Noise'
import './Home.css'

const Home = () => {
    return (
        <div className='background'>
            <Navbar />
            <Main />
            <Works />
            <Noise />
        </div>
    )
}

export default Home
