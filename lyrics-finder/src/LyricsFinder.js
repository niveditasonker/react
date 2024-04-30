import {useRef, useState} from 'react';
import './styles.css';


const LyricsFinder = () => {
    const [song, setSong] = useState('');
    const [artist, setArtist] = useState('');
    const [lyrics, setLyrics] = useState('');

    const handleSongName = (event) => {
        setSong(event.target.value);
    }

    const handleArtistName = (event) => {
        setArtist(event.target.value);
    }

    const searchLyrics = async() => {
        await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
        .then((response) => response.json())
        .then(async(res) => {
            console.log(res);
            await setLyrics(res);
        })
    }

    return(
        <div className='container'>
            <h2>Welcome to Lyrics Finder</h2>
            <div className='input-text'>
                <label htmlFor='songName'></label>
                <input className='search-bar' type='text' placeholder='Type song name...'
                    onChange={handleSongName} value={song}></input> &nbsp;
                <label htmlFor='artistName'></label>
                <input className='search-bar' type='text' placeholder='Type artist name...'
                    onChange={handleArtistName} value={artist}></input> &nbsp;
                <button className='search-button' type='submit' onClick={searchLyrics}>Search</button>
            </div>
        </div>
    )
}

export default LyricsFinder;