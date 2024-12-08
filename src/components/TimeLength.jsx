import Break from "./Break"
import Session from "./Session"

export default function TimeLength ({ breakLength, sessionLength, incrementBreak, decrementBreak, incrementSession, decrementSession }) {
    return (
        <div id="time-length">
            <Break breakLength={breakLength} incrementBreak={incrementBreak} decrementBreak={decrementBreak} />
            <Session sessionLength={sessionLength} incrementSession={incrementSession} decrementSession={decrementSession} />
        </div>
    )
}