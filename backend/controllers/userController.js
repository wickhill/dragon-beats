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
// const config = require('../../jwt.config.js')

// Signup form ----> Create Route

router.post('/', async (req, res) => {
    try {
        const newUser = new db.User(req.body)
        await newUser.save()
        // make a token
        const token = createToken(newUser)
        res.json({token, newUser})
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
})

// Login form

// receive credentials from user
// verify credentials are accurate
// if credentials are accurate then you return a token

router.post('/login', async (req, res) => {
    try{
        const { username, password } = req.body
        const user = await db.User.findOne({ username })
        if (!user) throw new Error(`User not found: ${username}`)
        const validPassword = await bcrypt.compare(password, user.password)
        if (!validPassword) throw new Error(`The password credentials shared did not match the credentials for the user with email ${username}`)
// Set the username in the session after successful authentication
req.session.username = username; // Store the username in the session
req.session.save(err => { // Save the session before redirecting
  if (err) {
      return res.status(500).json({ message: "Couldn't save session" });
  }
});
        const token = createToken(user)
        res.json({ token, user })
    } catch (error) {
        res.status(400).json({ msg: error.message })}
})


// The redirect URI after user grants permission on Spotify's authorization page
const redirect_uri = "http://localhost:3000/user/callback"
// GET route to start Spotify login process
router.get('/login', (req, res) => {
    // Define the scope of access we are requesting from Spotify
    const scope = 'playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public';
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
  if (!req.session || !req.session.username) {
    return res.status(400).send('Session is not initialized or username not found');
  }

  const username = req.session.username; // Now you have the username from the session
  // Your code to handle the callback from Spotify
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
      const { access_token, refresh_token, expires_in} = response.data;
       // Set the access token in an HTTP-only cookie
       res.cookie('access_token', access_token, {
        httpOnly: true, // 
        // secure: process.env.NODE_ENV !== 'development',     // Set to true later when in production
        sameSite: 'lax', // CSRF protection
        maxAge: expires_in * 3500000 //Set the cookie to expire at the same time as the access token
    });
// Now we need to get the Spotify user ID using the access token
return axios.get('https://api.spotify.com/v1/me', {
  headers: { 'Authorization': `Bearer ${access_token}` }
});
})
.then(spotifyResponse => {
// Save Spotify details in the user's document
// You need to identify the user's document here. This could be through a session, or a temporary state you created before initiating the auth flow
const spotifyUserId = spotifyResponse.data.id;
console.log(spotifyUserId, 111)
console.log(req.session.username, 222)
// Dind the user in DB by their username 
return db.User.findOneAndUpdate(
  { username: req.session.username },
   // Replace with actual logic to get the username
  {
      spotifyUserId: spotifyUserId,
      spotifyAccessToken: access_token,
      spotifyRefreshToken: refresh_token,
      // may also need to update the expiry time of the access token here later
  },
  { new: true }
);
})
.then(updatedUser => {
// If you need to send a token to the user for your app, generate it here
const tokenForMyApp = updatedUser.generateAuthToken();
res.cookie('myapp_token', tokenForMyApp, { httpOnly: true, sameSite: 'lax' });
res.redirect(`http://localhost:3000`);
})
.catch(error => {
console.error('Error during the callback:', error);
res.status(400).send('Error during the callback');
});
});

//  // Redirect to the main application page or another route???
//       res.redirect(`http://localhost:3000`);
//     })
//     .catch(error => {
//       console.error('Error getting Tokens:', error);
//       res.send('Error getting tokens');
//     });
//   });
  




// createToken form
function createToken(user){
    return jwt.sign({ user }, process.env.SECRETKEY, { expiresIn: '24h' })
}

// Verify a token

function checkToken(req, res, next){
    let token = req.get('Authorization')
    if(token){
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

function ensureLoggedIn(req, res, next ){
    if(req.user) return next()
    res.status('401').json({ msg: 'Unauthorized You Shall Not Pass'})
}

// CRUD Routes
// Delete user by id
router.delete('/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).send({message: "Successfully deleted user"})
})

// Update user by id
router.put('/:id', async (req, res) => {
  //since we have access to db
    const updatedUser = await db.User.findByIdAndUpdate(
        req.params.id,
        {$set: req.body},
        {new: true}
    ).select('-password -__v')
    const token = createToken(updatedUser)
  // Here we can send the response once with both the token and the updated user info
  //Tested in postman - it works, make sure to include Content-Type: application/json in "headers" when testing
    res.status(200).json({ token, user: updatedUser })
})



module.exports = router