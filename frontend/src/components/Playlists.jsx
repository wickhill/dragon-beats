import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Playlists = ({ accessToken, userId }) => {
  const [playlists, setPlaylists] = useState([]);
  const [error, setError] = useState(null);

  // Fetch the user's playlists
  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/playlists/users/${userId}`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        });
        setPlaylists(response.data.items); 
      } catch (error) {
        setError(error);
      }
    };

    fetchPlaylists();
  }, [accessToken, userId]);

  return (
    <div>
      <h2>Your Playlists</h2>
      {error && <p>Error: {error.message}</p>}
      <ul>
        {playlists.map(playlist => (
          <li key={playlist.id}>
            {playlist.name} - {playlist.tracks.total} tracks
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlists;