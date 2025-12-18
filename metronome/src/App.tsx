import { useEffect, useState } from 'react'
import './App.css'
import Modal from './modal';

function App() {
  const [bpm, setBpm] = useState(40)
  const [timeSig, setTimeSig] = useState(0)
  const [clickOn, setClickOn] = useState(false)
  const [showModal, setShowModal] = useState<boolean>(false);
  let beatNumber = 0
  let nextNoteTime = 0.0;  
  const scheduleAheadTime = 0.1;  

  const audioContext = new AudioContext()
  const gainNode = audioContext.createGain();
  gainNode.gain.value = .009
  gainNode.connect(audioContext.destination)

  function nextNote() {
    const secondsPerBeat = 60.0 / bpm;    
    nextNoteTime += secondsPerBeat;
    if (beatNumber == timeSig) {
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
    if (clickOn && bpm >= 40 && bpm <= 200) {
      const interval = setInterval(scheduler, 100)
      return () => clearInterval(interval);
    } else if (clickOn) {
      setClickOn(false)
      toggleModal()
    } else {
      beatNumber = 1;
    };
    
  }, [clickOn]);

  function handleTimeSigChange(timeSig: number) {
    setTimeSig(timeSig);
    setClickOn(false);
  }

  function handleBpmChange(bpm: number) {
    setBpm(bpm);
    setClickOn(false);
  }

  function toggleModal() {
    setShowModal(!showModal);
  }
 

  return (
    <>
      <h1>Web Audio API Oscillator Metronome</h1>
      <div className="card">
        <p className="read-the-docs">
        Select a Tempo, a Time Signature and Click the 'Start' button!
        </p>
        <label>BPM:
        <input onChange={(e) => handleBpmChange(Number(e.target.value))} type="number" id="bpm" name="bpm" min="40" max="200" defaultValue={40}/>
        </label> 
          <p>
          Selected BPM: {bpm}
          </p>
        <label>5/4:
        <input onChange={() => handleTimeSigChange(5)} type="radio" id="4/4" name="timeSignature" value="5/4"/>
        </label> 
        <label>4/4:
        <input onChange={() => handleTimeSigChange(4)} type="radio" id="4/4" name="timeSignature" value="4/4"/>
        </label> 
        <label>3/4:
        <input onChange={() => handleTimeSigChange(3)} type="radio" id="3/4" name="timeSignature" value="3/4"/>
        </label>
         <label>2/4:
        <input onChange={() => handleTimeSigChange(2)} type="radio" id="4/4" name="timeSignature" value="2/4"/>
        </label> 
        <div>
          {timeSig !== 0? (<p>Selected Time Signature: {timeSig}/4</p>) : (<p>Please Select A Time Signature</p>)  }
        </div>
        <div>
          {timeSig !== 0 && clickOn == false? (<div><button onClick={() => setClickOn(true)}id="startButton" >Start</button></div>) : (<p></p>) }
          {clickOn? (<div><button onClick={() => setClickOn(false)} id="stopButton">Stop</button></div>) : (<p></p>) }
        </div>
        <div>
          <Modal open={showModal} onClose={toggleModal} >
            <div>
            </div>
          </Modal>
        </div>
      </div>
      
    </>
  )
}


export default App
