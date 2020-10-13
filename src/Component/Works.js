import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import './Work.css'
import Appear from '../images/Appear.png'
import Hangouts from '../images/Hangouts.png'
import Messenger from '../images/Messenger.png'
import skype from '../images/skype.png'
import slack from '../images/slack.png'
import telegram from '../images/telegram.png'
import viber from '../images/viber.png'
import webex from '../images/webex.png'
import zoom from '../images/zoom.png'
import Meetings from '../images/Meetings.png'
import facetime from '../images/facetime.jpg'
import magnifier from '../images/magnifier.png'
import macbook from '../images/macbook.png'

const Works = () => {
    const { ref } = useWebAnimations({
        keyframes: [
            { transform: "translateY(0px)" },
            { transform: "translateY(20px)" },
            { transform: "translateY(0px)" },
        ],
        timing: {
            duration: 10000,
            iterations: Infinity,
            easing: "ease-in-out"
        }
    });

    const { btn } = useWebAnimations({
        keyframes: [
            { transform: "translateY(0px)" },
            { transform: "translateY(120px)" },
            { transform: "translateY(0px)" },
        ],
        timing: {
            duration: 50,
            iterations: Infinity,
            easing: "ease-in-out"
        }
    });

    return (
        <div id={'main-work'} className='work-container'>
            <div className='logos-container' ref={ref}>
                <img className='appear' src={Appear} alt='' />
                <img className='zoom' src={zoom} alt='' />
                <img className='hangout' src={Hangouts} alt='' />
                <img className='messenger' src={Messenger} alt='' />
                <img className='skype' src={skype} alt='' />
                <img className='slack' src={slack} alt='' />
                <img className='telegram' src={telegram} alt='' />
                <img className='viber' src={viber} alt='' />
                <img className='webex' src={webex} alt='' />
                <img className='meeting' src={Meetings} alt='' />
                <img className='opacity vib' src={viber} alt='' />
                <img className='opacity slk' src={slack} alt='' />
            </div>
            <div className='work-content'>
                <h1>Control Your Microphone anywhere</h1>
                <h3>Even during calls</h3>
                <img src={facetime} alt='' />
            </div>
            <div className='work-use'>
                <img src={macbook} alt='' />
                <img ref={btn} className='magnifier' src={magnifier} alt='' />
            </div>
            <div className='work-context'>
                <p>Use a shortcut or the touch bar on any Mac device</p>
                <p>to quickly mute your microphone</p>
                <button className='download'>Download</button>
                <button className='buy'>Buy</button>
            </div>
        </div>
    )
}

export default Works
