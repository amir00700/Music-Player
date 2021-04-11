import React from 'react'
import Librarysong from './Librarysong';

const Library = ({songs, setCurrentSong,audioRef,isPlaying, setSongs}) => {
    return (
        <div className='library'>
            <h2>Library</h2>
            <div className="library-songs">
               {songs.map((song) =>(
               <Librarysong songs={songs} 
                song={song} 
                id={song.id}
                setCurrentSong={setCurrentSong}
                key={song.id}
                audioRef={audioRef}
                isPlaying={isPlaying}
                setSongs={setSongs}
                />
                
               ))}

            </div>
            
        </div>
    )
}

export default Library
