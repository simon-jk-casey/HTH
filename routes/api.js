const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const passport = require('../passportSetup')

const db = require('../db/hthDB')

const saltRounds = 10

function ensureAuthenticated (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  } else {
    res.send('Unauthorised')
  }
}

router.post('/signup', (req, res) => {
  // add street type
  const {username, password, firstName, lastName, streetNumber, streetName, suburb, city, email, gpsCoords} = req.body
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) throw err
    else {
      const user = {username, password, firstName, lastName, streetNumber, streetName, suburb, city, email, gpsCoords}
      db.addUser(user)
      .then(() => res.json({status: 200, message: 'signup successful'}))
      .catch((err) => {
        throw err
      })
    }
  })
})

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({user: req.user})
})

router.get('/users/:id', ensureAuthenticated, (req, res) => {
  // display authenticated user data
})

router.post('/users/:id', ensureAuthenticated, (req, res) => {
  // edit user info
})

router.get('/devices', ensureAuthenticated, (req, res) => {
  db.getDevices()
  .then((result) => {
    res.json(result)
  })
  .catch((err) => {
    console.log(err)
  })
})

router.post('/devices', ensureAuthenticated, (req, res) => {
  // const {userId, deviceType} = req.body
  // const device = {userId, deviceType}
  // userId will come from elsewhere when passport added, need to fix then (can also be non-int but since will be supplied by cookie for auth user shouldnt matter as will be auto)
  db.addDevice(req.body)
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
})

router.get('/devices/:id', ensureAuthenticated, (req, res) => {
  db.getDeviceById(req.params.id)
  .then((result) => {
    res.json(result)
  })
  .catch((err) => {
    console.log(err)
  })
})

router.post('/devices/:id', ensureAuthenticated, (req, res) => {
  db.removeDevice(req.params.id)
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })
})

router.post('/captures', ensureAuthenticated, (req, res) => {
  db.addPredatorData(req.body)
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })
})

router.get('/captures', ensureAuthenticated, (req, res) => {
  db.getPredatorData()
  .then((result) => {
    res.json(result)
  })
  .catch((err) => {
    console.log(err)
  })
})

// Above will return all capture data, can do this and have front end state handle the filtering - will probably still need either further routes for more complex join functions or complex joins on existing routes.

// REMOVE CONSOLE LOGS, ADD ERROR HANDLING

module.exports = router
