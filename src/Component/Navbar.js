import React, { useState } from 'react'
import Logo from '../images/logo.png'
import './Navbar.css'

const Navbar = () => {
    
    let [isState, setState] = useState(true);
    let toggle = () => {
        setState( !isState )
    }

    return (
        <div className='nav-container'>
            <nav>
                <div className='nav-logo'>
                    <img src={Logo} alt='Mutify Logo' />
                    <p>MUTIFY</p>
                </div>
                <div className={isState? 'nav-links' : 'nav-links open'}>
                    <a href='#main-work'>Works With</a>
                    <a href='#main-noise'>Noise Level</a>
                    <a href='#main-switch'>Switch Device</a>
                    <a href='#main-feedback'>Feedback</a>
                    <a id='privacy' href='#main-privacy'>Privacy Policy</a>
                </div>
                <div className='nav-download'>
                    <a href='#main-work'>Download</a>
                </div>
                <div className='hamburger' onClick={()=> {toggle()}}>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
