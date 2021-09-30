require('dotenv').config()
const express = require('express');
const session = require('express-session')
const passport = require('passport')
const discordStrategy = require('./src/strategies/discordStrategy')
const db = require('./src/database/database.js')

// INIT
const app = express();

// FUNCTIONS
function validate(profileObject) {
    console.log(profileObject.username)
}

// ROUTES
const authroute = require('./src/routes/auth')

// MIDDLEWARE
app.use(session({
    secret: 'random secret',
    cookie: {
        maxAge: 60000 * 60 * 24
    },
    saveUninitialized: false
}));

app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', authroute)
app.get('/', (req, res) => {
    res.send("hi")
})

app.listen(process.env.PORT || 3001, () => {
    console.log(`listening to port ${process.env.PORT || 3001}`);
})