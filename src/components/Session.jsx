import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

export default function Session ({ sessionLength, incrementSession, decrementSession }) {
    return (
        <div id="session-div">
              <span id="session-label">Session length</span>
            <div id="session-options" className='options' >
            <button className='length-btn' id='session-increment' onClick={incrementSession} >
            <FontAwesomeIcon icon={faPlus} /></button>
                <span id="session-length">{sessionLength}</span>
                <button className='length-btn' id='session-decrement' onClick={decrementSession} >
                <FontAwesomeIcon icon={faMinus} /></button>
            </div>
        </div>
    )
}