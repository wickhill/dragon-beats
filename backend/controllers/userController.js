require('dotenv').config();
const router = require('express').Router();
// Axios takes the response from external API and stores data it in 
const axios = require("axios")
// Database models
const db = require('../models');
// For hashing passwords
const bcrypt = require('bcrypt');
// For creating and verifying JSON Web Tokens (JWT)
const jwt = require('jsonwebtoken');
// For encoding and decoding query strings
const qs = require('querystring');
// Require the JWT config
const config = require("../jwt.config")

// SIGNUP
router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await db.User.findOne({ username });
    if (existingUser) {
      throw new Error(`Username ${username} already exists. Please sign in`);
    }
   // Hash the password asynchronously
   const hashedString = await bcrypt.hash(password, 10);
    // Create a new user with the hashed password
    const newUser = new db.User({
      username: username,
      password: hashedString,
      email: email
    });
    // Save the new user
    await newUser.save();
    // Create a token for the new user
    const token = createToken(newUser);
    res.json({ token, newUser });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});


// The redirect URI after user grants permission on Spotify's authorization page
const redirectUri = "http://localhost:3000/user/callback"
// GET route to start Spotify login process
router.get('/spotify-auth', (req, res) => {
  // Define the scope of access we are requesting from Spotify
  const scope = 'playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public'
  // Redirect to Spotify's authorization page
  res.redirect(`https://accounts.spotify.com/authorize?${qs.stringify({
    response_type: 'code',
    client_id: process.env.CLIENT_ID,
    scope: scope,
    redirect_uri: redirectUri,
  })}`);
});

// SIGNIN
// Receive credentials from user
// Verify credentials are accurate
// If credentials are accurate, then return a token

router.post('/signin', async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await db.User.findOne({ username })
    if (!user) throw new Error(`No user found with username ${username}`)
    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) throw new Error(`The password credentials shared did not match the credentials for the user with username ${username}`)
    const token = createToken(user)
    res.json({ token, user })
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
})

// The redirect URI after user grants permission on Spotify's authorization page
const redirect_uri = "http://localhost:3000/user/callback"
// GET route to start Spotify login process
router.get('/login', (req, res) => {
  // Define the scope of access we are requesting from Spotify
  const scope = 'playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public user-read-private user-read-email'
  // Redirect to Spotify's authorization page
  res.redirect(`https://accounts.spotify.com/authorize?${qs.stringify({
    response_type: 'code',
    client_id: process.env.CLIENT_ID,
    scope: scope,
    redirect_uri: redirect_uri,
  })}`);
});

// GET route to handle the callback after user has authorized with Spotify
// Exchange the code provided by Spotify for an access token
router.get('/callback', (req, res) => {
  // The code from Spotify is in req.query.code
  axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    data: qs.stringify({
      grant_type: 'authorization_code',
      code: req.query.code,
      redirect_uri: redirect_uri,
    }),
    headers: {
      // Encode clientId and clientSecret into a Base64 string for the Authorization header
      'Authorization': `Basic ${Buffer.from(`${process.env.CLIENT_ID}:${process.env.SECRET_ID}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  })
    .then(response => {
      // Extract the access token and refresh token from the response
      const { access_token, refresh_token } = response.data;
      let spotifyUser = null;
      fetch("https://api.spotify.com/v1/me", {
        headers: {
          "Authorization": `Bearer ${access_token}`
        },
      })
        .then(res => {
          if(res.ok) {
            return res.json()
          }
        })
        .then(data => {
          if(data) {
            spotifyUser = data.id
          }
          console.log(spotifyUser, 777)
        })
        .catch(error => {
          console.error('Error getting profile:', error);
        })
        .finally(() => {
          const spotifyUserId = spotifyUser ? spotifyUser: process.env.SPOTIFY_USER_ID
          res.cookie('access_token', access_token, {
            httpOnly: true, // 
            // secure: process.env.NODE_ENV !== 'development',     // Set to true later when in production
            sameSite: 'lax', // CSRF protection
            maxAge: 3500000 //Set the cookie to expire at the same time as the access token
          });
          res.cookie("spotifyUserId", spotifyUserId, {
            httpOnly: true, // 
            // secure: process.env.NODE_ENV !== 'development',     // Set to true later when in production
            sameSite: 'lax', // CSRF protection
            maxAge: 3500000 //Set the cookie to expire at the same time as the access token
          });
   // Redirect to the app home page
   res.redirect(`http://localhost:3000`);
        })
    })
    .catch(error => {
      console.error('Error getting Tokens:', error);
      res.send('Error getting tokens');
    });
});

// Create token form
function createToken(user) {
  return jwt.sign({ user }, process.env.SECRETKEY, { expiresIn: '24h' })
}

// Verify a token

function checkToken(req, res, next) {
  let token = req.get('Authorization')
  if (token) {
    token = token.split(' ')[1]
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      req.user = err ? null : decoded.user
      req.exp = err ? null : new Date(decoded.exp * 1000)
    })
    return next()
  } else {
    req.user = null
    return next()
  }
}

function ensureLoggedIn(req, res, next) {
  if (req.user) return next()
  res.status('401').json({ msg: 'Unauthorized You Shall Not Pass' })
}

// DELETE user by id
router.delete('/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id)
  res.status(200).send({ message: "Successfully deleted user" })
})

// UPDATE user by id
router.put('/:id', async (req, res) => {
  const updatedUser = await db.User.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  ).select('-password -__v')
  const token = createToken(updatedUser)
  res.status(200).json({ token, user: updatedUser })
})



module.exports = router