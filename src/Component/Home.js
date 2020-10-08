import React from 'react'
import Main from './Main'
import Navbar from './Navbar'
import Works from './Works'
import './Home.css'

const Home = () => {
    return (
        <div className='background'>
            <Navbar />
            <Main />
            <Works />
        </div>
    )
}

export default Home
