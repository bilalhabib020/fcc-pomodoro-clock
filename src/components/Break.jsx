import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

export default function Break ({ breakLength, incrementBreak, decrementBreak }) {
    return (
        <div id="break-div">
            <span id="break-label">Break length</span>
            <div id="break-options" className='options'>
                <button className='length-btn' id='break-increment' onClick={incrementBreak} >
                <FontAwesomeIcon icon={faPlus} /></button>
                <span id="break-length">{breakLength}</span>
            <button className='length-btn' id='break-decrement' onClick={decrementBreak} >
            <FontAwesomeIcon icon={faMinus} /></button>
            </div>
        </div>
    ) 
}