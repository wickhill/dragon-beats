import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Detail from './Detail';
import Dropdown from './Dropdown';
import Listbox from './Listbox';

import vinyl from '../assets/vinyl.jpeg'

const Genre = () => {
  const client = import.meta.env.VITE_APP_CLIENT_ID
  const secret = import.meta.env.VITE_APP_CLIENT_SECRET

  const [token, setToken] = useState("")
  const [genres, setGenres] = useState({ selectedGenre: '', listOfGenresFromAPI: [] });
  const [playlist, setPlaylist] = useState({ selectedPlaylist: '', listOfPlaylistFromAPI: [] });
  const [tracks, setTracks] = useState({ selectedTrack: '', listOfTracksFromAPI: [] });
  const [trackDetail, setTrackDetail] = useState(null);
  //fetching genres, playlists, and tracks from Spotify's API
  useEffect(() => {

    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(client + ':' + secret)
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
      .then(tokenResponse => {
        setToken(tokenResponse.data.access_token);


        axios('https://api.spotify.com/v1/recommendations/available-genre-seeds', {
          method: 'GET',
          headers: { 'Authorization': 'Bearer ' + tokenResponse.data.access_token }
        })
          .then(genreSeedResponse => {
            console.log(genreSeedResponse.data);
            // Filtering by genres
            const genreNames = ['ambient', 'chill', 'classical','jazz']; 
            const filteredGenres = genreSeedResponse.data.genres.filter(genre =>
              genreNames.includes(genre)
            );
            setGenres({
              selectedGenre: genres.selectedGenre,
              listOfGenresFromAPI: filteredGenres.map(genre => ({ name: genre }))
            });
          });

      });
  }, [client, secret]);


  const genreChanged = val => {
    setGenres({
      selectedGenre: val,
      listOfGenresFromAPI: genres.listOfGenresFromAPI
    });

    axios(`https://api.spotify.com/v1/browse/categories/${val}/playlists?limit=10`, {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + token }
    })
      .then(playlistResponse => {
        setPlaylist({
          selectedPlaylist: playlist.selectedPlaylist,
          listOfPlaylistFromAPI: playlistResponse.data.playlists.items
        })
      });
  }

  const playlistChanged = val => {
    console.log(val);
    setPlaylist({
      selectedPlaylist: val,
      listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI
    });
  }

  const buttonClicked = e => {
    e.preventDefault();

    axios(`https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks?limit=10`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
      .then(tracksResponse => {
        // Map through each track item to extract the necessary data
        const trackDetails = tracksResponse.data.items.map(item => {
          console.log(tracksResponse)
          const { track } = item;
          console.log(item)
          return {
            id: track.id,
            name: track.name,
            artist: track.artists.map(artist => artist.name).join(', '),
            album: track.album.name,
            preview_url: track.preview_url,
            spotify_url: track.external_urls.spotify,
            image: track.album.images[0]?.url
          };
        });

        setTracks({
          selectedTrack: tracks.selectedTrack,
          listOfTracksFromAPI: trackDetails
        })
        console.log(tracks)
      });
  }

  const listboxClicked = val => {
    const currentTracks = [...tracks.listOfTracksFromAPI];
    const trackInfo = currentTracks.find(t => t.id === val);
    setTrackDetail(trackInfo);
    console.log(trackInfo, currentTracks)

  }

  return (
    // Set a background image 
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${vinyl})` }}>
    <div className="pt-[200px]">
      <div className="max-w-[1400px] my-0 mx-auto">
      <div className="h-16 bg-transparent"> {/* space for the header */} </div>

      <form onSubmit={buttonClicked} className="space-y-4 bg-gray-100 p-4 rounded-lg shadow-md mx-auto mt-4 max-w-sm">
          {/* Listbox and Detail Components */}
          <div className="grid grid-cols-1 gap-4 mt-4">
            <div className="w-full">
              <Dropdown label="Genre :" options={genres.listOfGenresFromAPI} selectedValue={genres.selectedGenre} changed={genreChanged} />
              <Dropdown label="Playlist :" options={playlist.listOfPlaylistFromAPI} selectedValue={playlist.selectedPlaylist} changed={playlistChanged} />
              {/* Search Button */}
              <div className="flex w-full">
                <button type='submit' className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 w-full transition duration-150 ease-in-out">
                  Search
                </button>
              </div>
              <Listbox items={tracks.listOfTracksFromAPI} clicked={listboxClicked} />
            </div>
            <div className="max-w-[600px] w-full">
              {trackDetail && <Detail {...trackDetail} />}
            </div>
          </div>
        </form>
      </div>
    </div>
    <div className="h-16 bg-transparent"> {/* space for the footer */} </div>
    </div>
  );
}


export default Genre