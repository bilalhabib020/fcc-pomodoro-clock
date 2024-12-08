import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Display from './components/Display';
import TimeLength from './components/TimeLength';

function App() {
  

  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [time, setTime] = useState(1500);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isSessionActive , setIsSessionActive] = useState(true);

  const audio = document.getElementById('beep');


  useEffect(
    () => {
      let timer;
      if(isTimerRunning && time > 0) {
        timer = setInterval(() => setTime(prevTime => prevTime - 1), 1000)
      }

      else if (isTimerRunning && time === 0) {
        audio.play(); 
        setTime( isSessionActive ? breakLength * 60 : sessionLength * 60 );
        setIsSessionActive( !isSessionActive );
        
      }

      
      return () => clearInterval(timer);
    }, [breakLength, sessionLength, time, isTimerRunning, isSessionActive]
  )

  const handlePlayPauseBtn = () => setIsTimerRunning(!isTimerRunning);

  const incrementBreak = () => {
    if( isTimerRunning || breakLength === 60) {
      return;
    }
    else {
      setBreakLength(prevSession => prevSession + 1);
      if(!isSessionActive) {
        setTime(breakLength * 60 + 60);
      }
    }
  }
 
  const decrementBreak = () => {
    if( isTimerRunning || breakLength === 1) {
      return;
    }
    else {
      setBreakLength(prevSession => prevSession - 1);
      if(!isSessionActive) {
        setTime(breakLength * 60 - 60);
      }
    }
  }

  const incrementSession = () => {
    if( isTimerRunning || sessionLength === 60) {
      return;
    }
    else {
      setSessionLength(prevSession => prevSession + 1);
      if(isSessionActive) {
        setTime(sessionLength * 60 + 60);
      }
      
    }
  }
 
  const decrementSession = () => {
    if( isTimerRunning || sessionLength === 1) {
      return;
    }
    else {
      
      setSessionLength(prevSession => prevSession - 1);
      if(isSessionActive) {
        setTime(sessionLength * 60 - 60);
      }
      
    }
  }

  const reset = () => {
    setBreakLength(5);
    setSessionLength(25);
    setTime(1500);
    setIsTimerRunning(false);
    setIsSessionActive(true);
    if(audio) {
    audio.currentTime = 0;
    audio.pause();
    }
  };

  const formatTime = () => {
    if( time < 0) {
    return "00:00";
    }
    let minutes = Math.floor( time / 60 );
    let seconds = time - minutes * 60 ;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return minutes + ':' + seconds;
  }

  return (
    <>
    <div id="wrapper">
      <div id="clock">
        <h1 id="app-heading">25 + 5 Clock</h1>

        <Display 
        isSessionActive={isSessionActive}
        isTimerRunning={isTimerRunning}
        formatTime={formatTime}
        handlePlayPauseBtn={handlePlayPauseBtn}
        reset={reset} />

        <TimeLength
        breakLength={breakLength}
        sessionLength={sessionLength}
        incrementBreak={incrementBreak}
        decrementBreak={decrementBreak}
        incrementSession={incrementSession}
        decrementSession={decrementSession} />

<audio id='beep' preload='auto' 
src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav' />
    
        
      </div>
    </div>
    </>
  )
}



export default App
