import React, { useState, useEffect } from 'react'
import NewSongForm from './NewSongForm';

function SongList() {
    const [songs, setSongs] = useState([
        { title: 'Don\'t know what to do', id: 1 },
        { title: 'Psycho', id: 2 },
        { title: 'More & More', id: 3 },
    ]);

    const addSong = (title) => {
        const id = songs.length + 1;
        setSongs([
            ...songs,
            { title, id }
        ])
    }
    useEffect(() => {
        console.log('useffect hook', songs);
    })
    return (
        <div className="song-list">
            <ul>
               {songs.map(song => {
                   return ( <li key={song.id}>{song.title}</li> )
               })} 
            </ul>
            <NewSongForm addSong={addSong}></NewSongForm>
        </div>
    )
}

export default SongList
