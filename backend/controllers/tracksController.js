require('dotenv').config();
const router = require('express').Router();
// Axios takes the response from external API and stores data it in 
const axios = require("axios")
const db = require('../models');

function fetchTracks(req, res) {
    const tracksId = req.params.id
    const accessToken = req.cookies['access_token'];
    const config = {
        headers: {
            // Include the access token in the Authorization header
            'Authorization': `Bearer ${accessToken}`
        },
    }
    return axios.get(`https://api.spotify.com/v1/tracks/${tracksId}`, config)

    .then(fetchedTracks=> {
        // console.log(`Seeded ${JSON.stringify(fetchedTracks.data)}`);
        res.json(fetchedTracks.data)
    })
    .catch(error => {
        console.log("Error in the seeding process", error)
    })
}

router.get("/:id", fetchTracks)

module.exports = router;