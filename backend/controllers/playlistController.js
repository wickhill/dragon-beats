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

//I.N.D.U.C.E.S

// INDEX
// Get Current User's Playlists
router.get('/', (req, res) => {
    const accessToken = req.cookies['access_token'];
    axios.get('https://api.spotify.com/v1/me/playlists', {
        headers: getHeaders(accessToken)
    })
    .then(response => res.json(response.data))
    .catch(error => {
        console.error("Error fetching current user's playlists:", error);
        res.status(400).json({ message: 'Failed to fetch current user playlists' });
    });
});

// INDEX
// GET User's playlists
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

// Get Playlist Cover Image
router.get('/:playlistId/images', (req, res) => {
    const playlistId = req.params.playlistId;
    const accessToken = req.cookies['access_token'];
    axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/images`, {
        headers: getHeaders(accessToken)
    })
    .then(response => res.json(response.data))
    .catch(error => {
        console.error("Error fetching playlist cover image:", error);
        res.status(400).json({ message: 'Failed to fetch playlist cover image' });
    });
});

//INDEX
// Get Playlist Items
router.get('/:playlistId/tracks', (req, res) => {
    const playlistId = req.params.playlistId;
    const accessToken = req.cookies['access_token'];
    axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        headers: getHeaders(accessToken)
    })
    .then(response => res.json(response.data))
    .catch(error => {
        console.error("Error fetching playlist items:", error);
        res.status(400).json({ message: 'Failed to fetch playlist items' });
    });
});

//DELETE
// Remove Playlist Items
router.delete('/:playlistId/tracks', (req, res) => {
    const playlistId = req.params.playlistId;
    const accessToken = req.cookies['access_token'];
    const data = { tracks: req.body.tracks };
    axios.delete(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        headers: getHeaders(accessToken),
        data: data
    })
    .then(response => res.json(response.data))
    .catch(error => {
        console.error("Error removing items from playlist:", error);
        res.status(400).json({ message: 'Failed to remove items from playlist' });
    });
});

// DELETE
// Unfollow a playlist 
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
// Change Playlist Details
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
// Create a new playlist 
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

// Add Items to Playlist
router.post('/:playlistId/tracks', (req, res) => {
    const playlistId = req.params.playlistId;
    const accessToken = req.cookies['access_token'];
    const data = { uris: req.body.uris };
    axios.post(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, data, {
        headers: getHeaders(accessToken)
    })
    .then(response => res.json(response.data))
    .catch(error => {
        console.error("Error adding items to playlist:", error);
        res.status(400).json({ message: 'Failed to add items to playlist' });
    });
});


// SHOW
// Get a single playlist
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