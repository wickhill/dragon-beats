require('dotenv').config();
const router = require('express').Router();
// Axios takes the response from external API and stores data it in 
const axios = require("axios")
const db = require('../models');


function fetchPlaylistTracks(req, res) {
    const playlistId = req.params.id
    const accessToken = req.cookies['access_token'];
    const config = {
        headers: {
           // Include the access token in the Authorization header
          'Authorization': `Bearer ${accessToken}`
        },
        params: {
          market: 'US'
        }
    }
    return axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, config)
    .then(fetchedPlaylistTracks=> {
        // console.log(`Seeded ${JSON.stringify(fetchedPlaylistTracks.data)}`);
        res.json(fetchedPlaylistTracks.data)
    })
    .catch(error => {
        console.log("Error in the seeding process", error)
    })
}

router.get("/:id", fetchPlaylistTracks)

module.exports = router