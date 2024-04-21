require('dotenv').config();
const router = require('express').Router();
// Axios takes the response from external API and stores data it in 
const axios = require("axios")
const db = require('../models');

// Helper function to configure Spotify API headers
const getHeaders = (accessToken) => ({
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
});

// INDEX
// GET all playlists for a user
router.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    const accessToken = req.cookies['access_token'];
    axios.get(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: getHeaders(accessToken)
    })
    .then(response => res.json(response.data))
    .catch(error => {
        console.error("Error fetching user's playlists:", error);
        res.status(400).json({ message: 'Failed to fetch playlists' });
    });
});


// DELETE
// UNFOLLOW a playlist 
router.delete('/:playlistId/followers', (req, res) => {
    const playlistId = req.params.playlistId;
    const accessToken = req.cookies['access_token'];
    axios.delete(`https://api.spotify.com/v1/playlists/${playlistId}/followers`, {
        headers: getHeaders(accessToken)
    })
    .then(response => res.json({ message: 'Playlist unfollowed successfully' }))
    .catch(error => {
        console.error("Error unfollowing playlist:", error);
        res.status(400).json({ message: 'Failed to unfollow playlist' });
    });
});


// UPDATE
// UPDATE a playlist 
router.put('/:playlistId', (req, res) => {
    const playlistId = req.params.playlistId;
    const accessToken = req.cookies['access_token'];
    const data = {
        name: req.body.name,
        description: req.body.description,
        public: req.body.public
    };
    axios.put(`https://api.spotify.com/v1/playlists/${playlistId}`, data, {
        headers: getHeaders(accessToken)
    })
    .then(response => res.json(response.data))
    .catch(error => {
        console.error("Error updating playlist:", error, 777);
        res.status(400).json({ message: 'Failed to update playlist' });
    });
});

// CREATE   
// CREATE a new playlist 
router.post('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    const accessToken = req.cookies['access_token'];
    const data = {
        name: req.body.name,
        description: req.body.description,
        public: req.body.public
    };
    axios.post(`https://api.spotify.com/v1/users/${userId}/playlists`, data, {
        headers: getHeaders(accessToken)
    })
    .then(response => res.json(response.data))
    .catch(error => {
        console.error("Error creating playlist:", error);
        res.status(400).json({ message: 'Failed to create playlist' });
    });
});

// SHOW
// GET a single playlist
router.get('/:playlistId', (req, res) => {
    const playlistId = req.params.playlistId;
    const accessToken = req.cookies['access_token'];
    axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, {
        headers: getHeaders(accessToken),
        params: { market: 'US' }
    })
    .then(response => res.json(response.data))
    .catch(error => {
        console.error("Error fetching playlist:", error);
        res.status(400).json({ message: 'Failed to fetch playlist' });
    });
});




module.exports = router