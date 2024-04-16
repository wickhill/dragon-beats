const mongoose = require('mongoose')
const tracksSchema = new mongoose.Schema({

spotifyId: { type: String, required: true },
name: { type: String, required: true },
albumName: String,
artistNames: [String],
durationMS: Number,
popularity: Number,
previewURL: String,
imageUrl: String,
releaseDate: String

});

module.exports = mongoose.model("Tracks", tracksSchema)