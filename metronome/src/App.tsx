import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bpm, setBpm] = useState(40)
  const [timeSig, setTimeSig] = useState("")

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
        <input onChange={() => setTimeSig("4/4")} type="radio" id="4/4" name="timeSignature" value="4/4"/>
        </label> 
        <label>3/4:
        <input onChange={() => setTimeSig("3/4")} type="radio" id="3/4" name="timeSignature" value="3/4"/>
        </label>
        <p>
          Selected Time Signature: {timeSig}
        </p>
        <button id="startButton">Start</button>
        <button id="stopButton">Stop</button>
      
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
