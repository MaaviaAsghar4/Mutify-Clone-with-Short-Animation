import React from 'react'
import Main from './Main'
import Navbar from './Navbar'
import Works from './Works'
import Noise from './Noise'
import './Home.css'
import Switch from './Switch'
import Feedback from './Feedback'

const Home = () => {
    return (
        <div className='background'>
            <Navbar />
            <Main />
            <Works />
            <Noise />
            <Switch />
            <Feedback />
        </div>
    )
}

export default Home
