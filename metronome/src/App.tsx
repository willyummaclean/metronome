import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bpm, setBpm] = useState(40)
  const [timeSig, setTimeSig] = useState(0)
  const [clickOn, setClickOn] = useState(false)
  let beatNumber = 1
  let nextNoteTime = 0.0;  
  const scheduleAheadTime = 0.1;  

  const audioContext = new AudioContext()
  const gainNode = audioContext.createGain();
  gainNode.gain.value = .009
  gainNode.connect(audioContext.destination)

  function nextNote() {
    const secondsPerBeat = 60.0 / bpm;    
    nextNoteTime += secondsPerBeat;
    if (beatNumber > timeSig) {
        beatNumber = 1
      }
      else {
        beatNumber++
      }
    }

  function scheduleClick(beatNumber: number, time: number) {  
      const osc = audioContext.createOscillator();
      osc.connect(gainNode);
      if (beatNumber === 1) {
          osc.type = 'sawtooth'
          osc.frequency.value = 220;
      } else {
          osc.type = 'square'
          osc.frequency.value = 110.0;
      }
      osc.start( time );
      osc.stop( time + .05 );     
  }
  
  function scheduler() {
      while (nextNoteTime < audioContext.currentTime + scheduleAheadTime ) {
          scheduleClick( beatNumber, nextNoteTime );
          nextNote();
      }
  }

  useEffect(() => {
    if (clickOn){
    const interval = setInterval(scheduler, 100)
    return () => clearInterval(interval);
    }
  }, [clickOn])
 

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <label>BPM:
        <input onChange={(e) => setBpm(Number(e.target.value))} type="number" id="bpm" name="bpm" min="40" max="200" defaultValue={40}/>
        </label> 
          <p>
          Selected BPM: {bpm}
          </p>
        <label>4/4:
        <input onChange={() => setTimeSig(4)} type="radio" id="4/4" name="timeSignature" value="4/4"/>
        </label> 
        <label>3/4:
        <input onChange={() => setTimeSig(3)} type="radio" id="3/4" name="timeSignature" value="3/4"/>
        </label>
        <p>
          Selected Time Signature: {timeSig}
        </p>
        <button onClick={() => setClickOn(true)}id="startButton" >Start</button>
        <button onClick={() => setClickOn(false)} id="stopButton">Stop</button>
      
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}


export default App
