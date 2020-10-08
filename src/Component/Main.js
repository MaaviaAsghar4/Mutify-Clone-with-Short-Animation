import React from 'react';
import Typing from 'react-typing-animation';
import Mutify from '../images/mutify.jpg'
// import Wave from '../images/wave1.svg'
import './Main.css'

const TypingAnimation = () => {
    return (
        <Typing loop={true} startDelay={1000} className='head-dynamic'>
            <span>to quickly mute your microphone...!!</span>
            <Typing.Backspace count={37} delay={1000} />
            <span>and instantly unmute your microphone...!!</span>
            <Typing.Backspace count={41} delay={1000} />
        </Typing>
    )
}

const Main = () => {
    return (
        <div className='head'>
            <h1>Mutify for Mac</h1>
            <p>Use a shortcut or the touch bar on any Mac device</p>
            <TypingAnimation />
            <div className='head-btn'>
                <button className='download'>Download</button>
                <button className='buy'>Buy: $4.99</button>
            </div>
            <div className='head-img'>
                <img src={Mutify} alt='mutify' />
                {/* <img src={Wave} alt='mutify' /> */}
            </div>
            {/* <div className='bg-img'>
            </div> */}
        </div>
    )
}

export default Main
