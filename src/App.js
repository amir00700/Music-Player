import React,{useState,useRef} from "react";
//import styles
import   './styles/app.scss';
//adding components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library'

//import util
import data from "./util";
import { library } from "@fortawesome/fontawesome-svg-core";


function App() {
  //state
const[songs, setSongs] = useState(data());
const[currentSong, setCurrentSong] = useState(songs[0]);
const [isPlaying, setIsPlaying] = useState(false);
const audioRef= useRef(null);
const [songInfo,setSongInfo] = useState({
  currentTime: 0,
  duration: 0,
})

const timeUpdatehandler =(e) =>{
  const current = e.target.currentTime;
  const duration= e.target.duration;
  setSongInfo({...setSongInfo,currentTime:current, duration: duration});

}

  return (
    <div className="App">
      <Song currentSong={currentSong}/>
    <Player 
    setSongInfo={setSongInfo}
    songInfo={songInfo}
    audioRef={audioRef}
    isPlaying={isPlaying} 
    setIsPlaying={setIsPlaying}
     currentSong={currentSong}/>
     <Library isPlaying={isPlaying} 
     audioRef={audioRef}
      songs={songs} 
      setCurrentSong={setCurrentSong}
      setSongs={setSongs}
      />
     <audio onTimeUpdate={timeUpdatehandler} 
     onLoadedMetadata={timeUpdatehandler}
     ref={audioRef}
     src={currentSong.audio}></audio>
      
    </div>
  );
}

export default App;
