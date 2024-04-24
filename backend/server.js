const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
//Loading environment variables from a .env file into process.env
require("dotenv").config()
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();

const db = require('./models')
const userCtrl = require("./controllers/userController")
const genreCtrl = require("./controllers/genreController")
const playlistCtrl = require("./controllers/playlistController")
const tracksCtrl = require("./controllers/tracksController")

// Middleware
app.use(cors());             
app.use(cookieParser());
//Promise based HTTP client for making requests to external API
const axios = require("axios") 
// Middleware to parse JSON bodies
app.use(express.json())
//HTTP request logger middleware for node.js
const morgan = require("morgan")
app.use(morgan("tiny"))

app.all('/api/*', (req, res) => {

    const targetUrl = `https://accounts.spotify.com/authorize?${qs.stringify({
        response_type: 'code',
        client_id: process.env.CLIENT_ID,
        scope: 'playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public',
        redirect_uri: "http://localhost:5173/user/callback"
      })}`
      proxy.web(req, res, { target: targetUrl });
  });

app.use("/user", userCtrl)
app.use("/genre", genreCtrl)
app.use("/playlists", playlistCtrl)
app.use("/tracks", tracksCtrl)

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
    }
    next();
  });

//I.N.D.U.C.E.S.
// Index route
app.get("/", (req, res) => {
    res.send("Dragon Beats App!");
});




// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));