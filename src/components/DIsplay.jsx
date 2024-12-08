import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'


export default function Display ( { formatTime, isSessionActive, isTimerRunning, reset, handlePlayPauseBtn } ) {
    return (
        <div id="display">
            <p id='timer-label' >{isSessionActive ? "Session" : "Break"}</p>
            <span id="time-left" >{formatTime()}</span>
            <div id="display-btn-div">
            { isTimerRunning ? <button id="start_stop" className='display-btn' onClick={handlePlayPauseBtn}><FontAwesomeIcon icon={faPause}/></button>
             : <button id="start_stop" className='display-btn' onClick={handlePlayPauseBtn}><FontAwesomeIcon icon={faPlay}/></button> }
           <button id='reset' className='display-btn' onClick={reset}><FontAwesomeIcon icon={faRotateRight} /></button>
            </div>
        </div>
    )
}




