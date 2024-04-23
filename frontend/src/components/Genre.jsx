import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Genre = () => {
    const [genre, setGenre] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await axios.get('/genre/seed', { withCredentials: true });
                setGenre(response.data);
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
            <h1>Choose Your Musical Study Genre</h1>
            <div>
                {Object.keys(genre).map((genreType) => (
                    <div key={genreType} onClick={() => handleGenreClick(genreType)}>
                        {genre[genreType].name || genreType}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Genre;