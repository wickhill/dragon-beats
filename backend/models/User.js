const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    likedSongs: {type: [String], default: []},
    playlists: {type: [String], default: []},
},  {
    timestamps: true,
    toJSON: {
     transform: function(doc, ret){
         delete ret.password
         return ret
     }
    }
})

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 10)
    return next()
})

module.exports = mongoose.model('User', userSchema)