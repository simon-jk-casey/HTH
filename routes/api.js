const express = require('express')
const router = express.Router()

const db = require('../db/hthDB')

router.post('/signup', (req, res) => {
  // add street type
  // const {username, password, firstName, lastName, streetNumber, streetName, suburb, city, email, gpsCoords} = req.body
  // const user = {username, password, firstName, lastName, streetNumber, streetName, suburb, city, email, gpsCoords}
  // WILL LIKELY TO RE_ADD ABOVE ONCE HASHING IMPLEMENTED
  db.addUser(req.body)
  .then((res) => {
  })
  .catch((err) => {
    console.log(err)
  })
})

router.post('/login', (req, res) => {
  // get login details to compare
  // complete when passport auth set up
})

router.get('/users/:id', (req, res) => {
  // display authenticated user data

})

router.post('/users/:id', (req, res) => {
  // edit user info
})

router.get('/devices', (req, res) => {
  db.getDevices()
  .then((result) => {
    res.json(result)
    // returning object correctly, handle as necessary for front end
  })
  .catch((err) => {
    console.log(err)
  })
})

router.post('/devices', (req, res) => {
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

router.get('/devices/:id', (req, res) => {
  db.getDeviceById(req.params.id)
  .then((result) => {
    res.json(result)
  })
  .catch((err) => {
    console.log(err)
  })
})

router.post('/devices/:id', (req, res) => {
  db.removeDevice(req.params.id)
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })
})

router.post('/captures', (req, res) => {
  db.addPredatorData(req.body)
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })
})

router.get('/captures', (req, res) => {
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
