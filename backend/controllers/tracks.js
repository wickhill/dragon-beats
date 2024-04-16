/* Require modules
--------------------------------------------------------------- */
const express = require("express");
const router = express.Router();

/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require("../models");

// INDEX - Returns all tracks as JSON
router.get("/", (req, res) => {
    db.Track.find({})
    .then((tracks) => res.json(tracks))
    .catch((err) => res.json({ error: err.message }));
});

// CREATE - Adds a new tracks and returns the track as JSON
router.post("/", (req, res) => {
    db.Track.create(req.body)

.then((track) => res.json(track))
.catch((err) => res.json({ error: err.message }));
});

// SHOW - Returns a single track by ID as JSON
router.get("/:spotifyId", (req, res) => {
    db.Track.findById(req.params.spotifyId)
    .then((track) => {
        if(!track) res.status(404).json({ error: "Track not found" });
        else res.json(track);
    })
    .catch((err) => res.json({ error: err.message }));
});