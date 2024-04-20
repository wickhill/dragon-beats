const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

//Loading environment variables from a .env file into process.env
require("dotenv").config()
const db = require('./models')
const userCtrl = require("./controllers/userController")
const genreCtrl = require("./controllers/genreController")
const playlistCtrl = require("./controllers/playlistController")
const tracksCtrl = require("./controllers/tracksController")

// Middleware
app.use(cors());             
app.use(express.json());     
app.use(cookieParser());
//Promise based HTTP client for making requests to external API
const axios = require("axios") 
// Middleware to parse JSON bodies
app.use(express.json())
//HTTP request logger middleware for node.js
const morgan = require("morgan")
app.use(morgan("tiny"))

app.use("/user", userCtrl)
app.use("/genre", genreCtrl)
app.use("/playlists", playlistCtrl)
app.use("/tracks", tracksCtrl)

//I.N.D.U.C.E.S.
// Index route
app.get("/", (req, res) => {
    res.send("Dragon Beats App!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));