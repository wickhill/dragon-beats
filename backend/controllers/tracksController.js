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

// I.N.D.U.C.E.S

// INDEX
// Get Current User's Saved Tracks:
router.get('/', (req, res) => {
    const accessToken = req.cookies['access_token'];
    axios.get('https://api.spotify.com/v1/me/tracks', {
        headers: getHeaders(accessToken)
    })
    .then(response => res.json(response.data))
    .catch(error => {
        console.error("Error fetching current user's tracks:", error);
        res.status(400).json({ message: 'Failed to fetch current user INDEX route tracks' });
    });
});

// SHOW
// Get a single Track:
router.get('/:tracksId', (req, res) => {
    const tracksId = req.params.tracksId;
    const accessToken = req.cookies['access_token'];
    axios.get(`https://api.spotify.com/v1/tracks/${tracksId}`, {
        headers: getHeaders(accessToken), params: { market: 'US' }
    })
    .then(response => res.json(response.data))
    .catch(error => res.status(400).json({ message: 'Failed to fetch SHOW route tracks', error: error.response.data }));
});

// Add Tracks to a Playlist:
router.post('/users/:userId/playlists/:playlistId/tracks', (req, res) => {
    const { playlistId } = req.params;
    const accessToken = req.cookies['access_token'];
    const data = { uris: req.body.uris };
    axios.post(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, data, {
        headers: getHeaders(accessToken)
    })
    .then(response => res.json(response.data))
    .catch(error => res.status(400).json({ message: 'Failed to add items to playlist' }));
});

// Remove Tracks from a Playlist:
router.delete('/users/:userId/playlists/:playlistId/tracks', (req, res) => {
    const { playlistId } = req.params;
    const accessToken = req.cookies['access_token'];
    const data = { tracks: req.body.tracks };
    axios.delete(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        headers: getHeaders(accessToken),
        data: data
    })
    .then(response => res.json(response.data))
    .catch(error => res.status(400).json({ message: 'Failed to remove items from playlist' }));
});

// Get Tracks Cover Image
// router.get('/:tracksId/images', (req, res) => {
//     const tracksId = req.params.tracksId;
//     const accessToken = req.cookies['access_token'];
//     axios.get(`https://api.spotify.com/v1/tracks/${tracksId}/images`, {
//         headers: getHeaders(accessToken)
//     })
//     .then(response => res.json(response.data))
//     .catch(error => {
//         console.error("Error fetching tracks cover image:", error);
//         res.status(400).json({ message: 'Failed to fetch tracks cover image' });
//     });
// });


module.exports = router;
