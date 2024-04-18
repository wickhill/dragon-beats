/* Require modules:
--------------------------------------------------------------- */
const express = require("express");
const router = express.Router();

/* Require the db connection, and models:
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
router.get("/:id", (req, res) => {
    db.Track.findById(req.params.id)
    .then((track) => {
        if(!track) res.status(404).json({ error: "Track not found" });
        else res.json(track);
    })
    .catch((err) => res.json({ error: err.message }));
});

// UPDATE - Updates a specific track and returns the updated track as JSON
router.put("/:id", (req, res) => {
    db.Track.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((track) => res.json(track))
    .catch((err) => res.json({ error: err.message }));
});

// DELETE - Deletes a specific track and returns a success message
router.delete("/:id", (req, res) => {
    db.Track.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: "Track successfully deleted" }))
    .catch((err) => res.json({ error: err.message }));
});

module.exports = router;