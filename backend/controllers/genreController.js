require('dotenv').config();
const router = require('express').Router();
// Axios takes the response from external API and stores data it in 
const axios = require("axios")
const db = require('../models');

function fetchGenres(req, res) {
    const accessToken = req.cookies['access_token'];
    const config = {
        headers: {
          // Include the access token in the Authorization header
          'Authorization': `Bearer ${accessToken}` 
        },
        params: {
          seed_genres: 'study,ambient,classical,jazz',
          market: 'US'
        }
    }
    return axios.get("https://api.spotify.com/v1/recommendations", config)
    .then(seededGenres=> {
        res.json(seededGenres.data)
    })
    .catch(error => {
        console.log("Error in the seeding process", error)
    })
}

function fetchGenrePlaylists(req, res) {
    const genre = req.params.id
    const accessToken = req.cookies['access_token'];
    const config = {
        headers: {
          // Include the access token in the Authorization header
          'Authorization': `Bearer ${accessToken}` 
        },
        params: {
          q: `genre:${genre}`,
          type: "playlist",
          market: 'US'
        }
    }
    return axios.get("https://api.spotify.com/v1/search", config)
    .then(fetchedPlaylists=> {
        res.json(fetchedPlaylists.data)
    })
    .catch(error => {
        console.log("Error in the seeding process", error)
    })
}


router.get("/seed", fetchGenres)
router.get("/:id", fetchGenrePlaylists)


module.exports = router