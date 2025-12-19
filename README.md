To run this project use the following commands:

npm install 
npm run dev 

Then visit:

 http://localhost:5173/

You can then select the desired BPM, time signature and hit start to run the metronome. 
Changing BPM or time signature will stop the metronome.

My process for this project involved reviewing documentation and articles to become 
familiarized with the Web Audio API, develop a strategy to manage time keeping, 
and learn how to use the setInterval and clearInterval functions. 

Here I review the steps I took to achieve the current results:

1. Created React app with Vite
2. Added basic buttons needed to complete requirements
3. Researched Web Audio API and found resources
4. Played with setting up oscillators
5. Reviewed Web Audio API book, and followed link to an article
6. Adapted more complicated functions described in article
7. Debugged to discover why only one click was triggered
8. Researched re-triggering useEffect found SetInterval example
9. Fixed extra beat issue and assured first beat will always be a downbeat
10. Added additional time signature buttons and functionality to prevent user from going outside of tempo window and show modal
11. Implemented a handler function to stop the metronome if the user changed BPM or time signature

Resources:

Basic Web Audio API Tutorial:
https://www.youtube.com/watch?v=vzdonYZYCOA

Searching how to make a sound with Web Audio API:
https://dev.to/rayalva407/creating-an-oscillator-with-the-web-audio-api-5b8m

Making an Oscillator with the Web Audio API:
https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode

Triggering Sounds:
https://webaudioapi.com/book/Web_Audio_API_Boris_Smus_html/ch02.html

Article with an Approach to Audio Scheduling using the Web Audio API:
https://web.dev/articles/audio-scheduling

SetInterval Examples:
https://devtrium.com/posts/set-interval-react
https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval

ClearInterval Examples:
https://developer.mozilla.org/en-US/docs/Web/API/Window/clearInterval
https://stackoverflow.com/questions/72592921/how-stop-setinterval-automatically-in-react-hooks

TSX Modal Example:
https://stackademic.com/blog/how-to-implement-a-reusable-modal-component-in-react-and-typescript
