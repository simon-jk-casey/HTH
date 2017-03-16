const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')

const api = require('./routes/api')
const passport = require('./passportSetup')

const corsOptions = {
  origin: true,
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  preflightContinure: false,
  credentials: true
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(require('express-session')({secret: 'pr3d4t0r', resave: false, saveUninitialized: false}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/api/v1', api)

module.exports = app
