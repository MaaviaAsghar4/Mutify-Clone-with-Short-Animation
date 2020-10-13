import React, { useState } from 'react'
import Logo from '../images/logo.png'
import './Navbar.css'

const Navbar = () => {

    let [isState, setState] = useState(true);
    let toggle = () => {
        setState(!isState)
    }

    return (
        <div className='nav-container'>
            <nav>
                <div className='nav-logo'>
                    <img src={Logo} alt='Mutify Logo' />
                    <p>MUTIFY</p>
                </div>
                <div className={isState ? 'nav-links' : 'nav-links open'}>
                    <ul>
                        <li><a href='#main-work'>Works With</a></li>
                        <li><a href='#main-noise'>Noise Level</a></li>
                        <li><a href='#main-switch'>Switch Device</a></li>
                        <li><a href='#main-feedback'>Feedback</a></li>
                        <li><a id='privacy' href='#main-privacy'>Privacy Policy</a></li>
                    </ul>
                </div>
                <div className='nav-download'>
                    <a href='#main-work'>Download</a>
                </div>
                <div className='hamburger' onClick={() => { toggle() }}>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
