import React from 'react'
import './Switch.css'
import Mockup from '../images/mockup.png'
import Muted from '../images/muted.png'
import APright from '../images/apright.png'
import APleft from '../images/apleft.png'

const Switch = () => {
    return (
        <div className='switch-box' id={'main-switch'}>
            <div className='switch-container'>
                <img className='mockup' src={Mockup} alt='' />
                <img className='muted' src={Muted} alt='' />
                <img className='apright' src={APright} alt='' />
                <img className='apleft' src={APleft} alt='' />
            </div>
            <div className='switch-context'>
                <h1>Stay muted even on a newly connected device</h1>
                <p>
                    If you mute your mic on a call and switch to a new device, such as your AirPods, 
                    the app will detect the change and mute the new device as well
                </p>
                <button className='download'>Download</button>
            </div>
        </div>
    )
}

export default Switch
