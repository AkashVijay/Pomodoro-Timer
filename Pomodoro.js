import React, {useState, useEffect} from 'react'

import PauseButton from './PauseButton';
import PlayButton from './PlayButton';



export default function Pomodoro() {
    const[minutes,setMinutes]= useState(25);
    const[seconds,setSeconds] = useState(0);
    const[displayMessage,setDisplayMessage] = useState(false);
    const[isPaused, setIsPaused] = useState(true);
   

    useEffect(()=>{
        if(isPaused){
        let interval = setInterval(() => {
            clearInterval(interval);
      
            if (seconds === 0) {
              if (minutes !== 0) {
                setSeconds(59);
                setMinutes(minutes - 1);
              } else {
                let minutes = displayMessage ? 24 : 4;
                let seconds = 59;
      
                setSeconds(seconds);
                setMinutes(minutes);
                setDisplayMessage(!displayMessage);
              }
            } else {
              setSeconds(seconds - 1);
            }
          }, 1000);
        }
    },[isPaused,seconds])

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return (<div className='pomodoro'>
        
        <div className='message'>
          {displayMessage && <div>Take a break! A new session will begin in:</div>} 
        </div>
        <div className='timer'>{timerMinutes}:{timerSeconds}</div>
        <div style = {{marginTop:'20px'}}>
        {isPaused ? <PauseButton onClick={() => setIsPaused(false)}/> : <PlayButton onClick={() => setIsPaused(true)} />}
        
       
       </div>
       
     
    </div>)
        
    
}