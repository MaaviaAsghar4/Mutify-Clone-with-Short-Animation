import React from 'react'
import './Feedback.css'
import Logo from '../images/logo.png'
import wave from '../images/wave.mp4'

const Feedback = () => {
    return (
        <div className='feedback' id={'main-feedback'}>
            <div className='fb-context'>
                <div className='ctxt'>
                    <h1>Have an Idea or Feedback</h1>
                    <p>help@mutify.app</p>
                </div>
                <div className='mp-video'>
                <video width='320' height='240' loop autoplay='autoplay'>
                    <source src={wave} type='video/mp4' />
                </video>
                </div>
            </div>
            <div className='fb-logo'>
                <img src={Logo} alt='' />
                <span>MUTIFY</span>
            </div>
            <div className='fb-footer'>
                <p>
                    Made by Pixel Point – Web, Mobile, AI, Blockchain development company.
                    © 2019 Mutify. All right reserved
                </p>
            </div>
        </div>
    )
}

export default Feedback
