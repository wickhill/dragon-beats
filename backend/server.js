const express = require('express');
const cors = require("cors");
require('dotenv').config();

const app = express();
const db = require('./models');

// set up middleware
app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json())

//SEEDING route for bookmarks
//Route to delete existing bookmarks and seed the database with initial data
app.get("/seed", function (req, res) {
    // Remove any existing bookmarks
    db.Playlist.deleteMany({})
      .then(removedPlaylist => {
        console.log(`Removed ${removedPlaylist.deletedCount} playlists`)
        // Seed the bookmark collection with the seed data
        db.Playlist.insertMany(db.seedPlaylist)
          .then(addedPlaylist => {
            console.log(`Added ${addedPlaylist.length} playlists`)
            res.json(addedPlaylist)
          })
      })
  })





  //declare a variable for our port number
const PORT = process.env.PORT || 3000;

// turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));