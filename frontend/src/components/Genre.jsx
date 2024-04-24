import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Genre = () => {
  const [genreData, setGenreData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get('/genre/seed', { withCredentials: true });
        setGenreData(response.data); 
      } catch (err) {
        setError(err.toString());
      } finally {
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

  const handleGenreClick = (genre) => {
    navigate(`/genre/${genre}`);
  };

  if (loading) return <div>Loading genres...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Choose Your Study Genre</h1>
      <div>
        {Object.keys(genreData).map((genreKey) => (
          <div key={genreKey} onClick={() => handleGenreClick(genreKey)}>
            {genreData[genreKey].name || genreKey} 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genre;