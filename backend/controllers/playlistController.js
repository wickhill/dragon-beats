require('dotenv').config();
const router = require('express').Router();
// Axios takes the response from external API and stores data it in 
const axios = require("axios")
const db = require('../models');


function fetchUserPlaylists(req, res) {
    const userId = req.params.id
    const accessToken = req.cookies['access_token'];
    const config = {
        headers: {
           // Include the access token in the Authorization header
          'Authorization': `Bearer ${accessToken}`
        }
    }
    return axios.get(`https://api.spotify.com/v1/users/${userId}/playlists`, config)
    .then(fetchUserPlaylists=> {
        res.json(fetchUserPlaylists.data)
    })
    .catch(error => {
        console.log("Error in the seeding process", error)
    })
}


function fetchSinglePlaylist(req, res) {
    const playlistId = req.params.id
    const accessToken = req.cookies['access_token'];
    const config = {
        headers: {
           // Include the access token in the Authorization header
          'Authorization': `Bearer ${accessToken}`
        },
        params: {
          market: 'US',
          fields: "description, uri"
        }
    }
    return axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, config)
    .then(fetchedSinglePlaylist=> {
        res.json(fetchedSinglePlaylist.data)
    })
    .catch(error => {
        console.log("Error in the seeding process", error)
    })
}


router.get("/", fetchUserPlaylists)
router.get("/:id", fetchSinglePlaylist)


module.exports = router