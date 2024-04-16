require('dotenv').config();
const router = require('express').Router();
const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
        if (!user) throw new Error(`User not found: User with email ${username}`)
        const validPassword = await bcrypt.compare(password, user.password)
        if (!validPassword) throw new Error(`The password credentials shared did not match the credentials for the user with email ${username}`)
        const token = createToken(user)
        res.json({ token, user })
    } catch (error) {
        res.status(400).json({ msg: error.message })}
})

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

module.exports = router