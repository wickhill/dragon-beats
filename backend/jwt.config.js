require('dotenv').config()

module.exports = {
    jwtSecret: process.env.SECRET_KEY,
    jwtSession: {
        session: false
    }
}