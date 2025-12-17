import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const audioContext = new AudioContext()
const gainNode = audioContext.createGain();
gainNode.gain.value = .004
gainNode.connect(audioContext.destination)

const oscillatorDownBeat = audioContext.createOscillator();
oscillatorDownBeat.type = 'sawtooth'
oscillatorDownBeat.frequency.value = 220
oscillatorDownBeat.connect(gainNode)

const oscillatorWeakBeat = audioContext.createOscillator();
oscillatorWeakBeat.frequency.value = 110
oscillatorWeakBeat.type = 'square'
oscillatorWeakBeat.connect(gainNode)


// oscillatorDownBeat.start()





createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
