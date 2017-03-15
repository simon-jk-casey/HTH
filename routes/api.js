const express = require('express')
const router = express.Router()

const db = require('../db/hthDB')

router.post('/signup', (req, res) => {
  //add street type
  const {username, password, firstName, lastName, streetNumber, streetName, suburb, city, email, gpsCoords} = req.body
  const user = {username, password, firstName, lastName, streetNumber, streetName, suburb, city, email, gpsCoords}
  db.addUser(user)
  .then((res) => {
    console.log(res, "result")
  })
  .catch((err) => {
    console.log(err);
  })
})

router.post('/login', (req, res) => {
  //get login details to compare
  //complete when passport auth set up
})

router.get('/users/:id', (req, res) => {
  //display authenticated user data

})

router.post('/users/:id', (req, res) => {
  //edit user info
})

router.get('/devices', (req, res) => {
  db.getDevices()
  .then((data) => {
    console.log(data);
    res.json(data)
    //returning object correctly, handle as necessary for front end
  })
  .catch((err) => {
    console.log(err)
  })
})

router.post('/devices', (req, res) => {
  // const {userId, deviceType} = req.body
  // const device = {userId, deviceType}
  //userId will come from elsewhere when passport added, need to fix then (can also be non-int but since will be supplied by cookie for auth user shouldnt matter as will be auto)
  db.addDevice(req.body)
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
})

router.get('/devices/:id', (req, res) => {
  //get specific device details by id
})

router.post('/devices/:id', (req, res) => {
  //remove a device
})

router.post('/captures', (req, res) => {
  //capture type (trapped/detected?)
  //datestamp
  //notes
})

router.get('/captures', (req, res) => {
  //get data from captures by a date/date-range
})


//REMOVE CONSOLE LOGS, ADD ERROR HANDLING

module.exports = router;
