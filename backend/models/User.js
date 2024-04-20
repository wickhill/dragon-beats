const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    likedSongs: {type: [String], default: []},
    playlists: [{
        name: String,
        tracks: [{ type: String}]
    }],
    spotifyUserId: String,  // Store Spotify User ID
    spotifyAccessToken: String,  // Store Spotify Access Token
    spotifyRefreshToken: String,  // Store Spotify Refresh Token
}, {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret){
            delete ret.password;  
            delete ret.spotifyAccessToken;
            delete ret.spotifyRefreshToken;
            return ret;
        }
    }
});

userSchema.methods.generateAuthToken = async function(){
    const token = jwt.sign({_id: this._id, name: this.name}, process.env.JWT_SECRETKEY)
    return token
}

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 10)
    return next()
})

module.exports = mongoose.model('User', userSchema)