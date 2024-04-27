import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Detail from './Detail';
import Dropdown from './Dropdown';
import Listbox from './Listbox';
import vinyl from '../assets/vinyl.jpeg'

// Main functional component for Genre
const Genre = () => {
  // Spotify API client and secret keys from environment variables
  const client = import.meta.env.VITE_APP_CLIENT_ID
  const secret = import.meta.env.VITE_APP_CLIENT_SECRET
  // State for storing Spotify API token
  const [token, setToken] = useState("")
  // State for genres
  const [genres, setGenres] = useState({ selectedGenre: '', listOfGenresFromAPI: [] });
  // State for playlists
  const [playlist, setPlaylist] = useState({ selectedPlaylist: '', listOfPlaylistFromAPI: [] });
  // State for tracks
  const [tracks, setTracks] = useState({ selectedTrack: '', listOfTracksFromAPI: [] });
  // State for detailed track info
  const [trackDetail, setTrackDetail] = useState(null);
  // Fetching genres, playlists, and tracks from Spotify's API
  useEffect(() => {
    // Request for authentication token
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
        // Fetching available genre seeds
        axios('https://api.spotify.com/v1/recommendations/available-genre-seeds', {
          method: 'GET',
          headers: { 'Authorization': 'Bearer ' + tokenResponse.data.access_token }
        })
          .then(genreSeedResponse => {
            console.log(genreSeedResponse.data);
            // Filtering by genres
            const genreNames = ['ambient', 'chill', 'classical', 'jazz'];
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

  // Handle genre selection change
  const genreChanged = val => {
    setGenres({
      selectedGenre: val,
      listOfGenresFromAPI: genres.listOfGenresFromAPI
    });
    // Fetch playlists for a selected genre
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
  // Handle playlist selection change
  const playlistChanged = val => {
    console.log(val);
    setPlaylist({
      selectedPlaylist: val,
      listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI
    });
  }
  // Handle button click to search for tracks
  const buttonClicked = e => {
    e.preventDefault();
    // Fetch tracks for a selected playlist
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
  // Handle listbox item click
  const listboxClicked = val => {
    const currentTracks = [...tracks.listOfTracksFromAPI];
    const trackInfo = currentTracks.find(t => t.id === val);
    setTrackDetail(trackInfo);
    console.log(trackInfo, currentTracks)

  }

  return (
    // Set a background image 
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${vinyl})` }}>
      <div className="pt-[10px]  sm:pt-[100px]">
        <div className="max-w-[1400px] my-0 mx-auto">
          <div className="h-16 bg-transparent"> {/* space for the header */} </div>
          <form onSubmit={buttonClicked} className="space-y-4 bg-gray-100 p-4 rounded-lg shadow-md mx-auto mt-4 max-w-sm sm:max-w-[600px]">
            {/* Listbox and Detail Components */}
            <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
              <div className="w-full">
                <Dropdown label="Genre :" options={genres.listOfGenresFromAPI} selectedValue={genres.selectedGenre} changed={genreChanged} />
                <Dropdown label="Playlist :" options={playlist.listOfPlaylistFromAPI} selectedValue={playlist.selectedPlaylist} changed={playlistChanged} />
                {/* Search Button */}
                <div className="flex w-full">
                  <button type='submit' className="bg-teal-400 rounded-xl hover:bg-teal-700 text-gray-900 font-bold py-2 px-4 w-full transition duration-150 ease-in-out">
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