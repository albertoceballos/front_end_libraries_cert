import './App.css';
import React from 'react';

const sounds = [
  {
    keyCode: 81,
    key: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    key: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    key: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    key: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    key: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    key: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    key: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    key: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    key: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

let soundMaps = {};

for(let s of sounds)
{
  soundMaps[s.keyCode] = s;
}

function App() {
  let power = React.useRef(true);
  const [volume, setVolume] = React.useState(1);
  const [soundName, setSoundName] = React.useState("");

  const handleVolumeChange = e => {
    setVolume(e.target.value);
  }

  const pressKeyDown = (e) => {
    if(e.keyCode in soundMaps){
      let o = soundMaps[e.keyCode];
      play(o.key, o.id);
    }
  }

  React.useEffect(()=>{
    document.addEventListener('keydown',pressKeyDown);
  },[]);
  
  const play = (key, sound) => {
    console.log(power.current);
    if(power.current === true){
      setSoundName(sound);
      const audio = document.getElementById(key);
      audio.volume = 1;
      audio.currentTime = 0;
      audio.play();
    }
  }

  const stop = () =>{
    power.current = !power.current;
  }

  
  return (
    <div id="drum-machine">
      <div id="main-logo">
        FCC
      </div>
      <div className="grid-container-2">
        <div className="grid-container">
          {
            sounds.map((b)=>
              <button key={b.key} className="drum-pad" id={b.keyCode} onClick={()=>play(b.key,b.id)}>
                <audio className="clip" src={b.url} id={b.key} type="audio/mpeg"/>
                {b.key}
              </button>
            )
          }
        </div>
        <div>
          <div>
            <div id="power-title">Power</div>
            <label className="switch">
              <input type="checkbox" defaultChecked onClick={stop}/>
              <span className="slider"></span>
            </label>
          </div>
          <div id="display">
            {soundName}
          </div>
          <div id="vol" className="slider-container">
            <input 
              type="range"
              step="0.01" 
              min="0"
              max="1" 
              value={volume}
              onChange={handleVolumeChange}
              className="vol-slider"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
