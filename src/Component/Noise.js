import React from 'react'
import './Noise.css'
import Circlewave from '../images/wave2.png'

const Noise = () => {
    return (
        <div className='img-block' id={'main-noise'}>
            <div>
                <div className='img-context'>
                    <h1>Easily control the volume level</h1>
                    <p>
                        Use a shortcut to quickly access a
                        window for your microphone volume controls
                    </p>
                    <button className='btn-try'>Try It Free</button>
                </div>
            </div>
            <div className='img-wave'>
                <img src={Circlewave} height={400} alt='' />
            </div>
        </div>
    )
}

export default Noise
