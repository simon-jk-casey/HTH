const express = require('express')
const router = express.Router()

const db = require('../db/hthDB')

router.post('/signup', (req, res) => {
  //add street type
  const {username, password, firstName, lastName, streetNumber, streetName, suburb, city, email, gpsCoords} = req.body
  var user = {username, password, firstName, lastName, streetNumber, streetName, suburb, city, email, gpsCoords}
  db.addUser(user)
  .then((res) => {
    console.log(res, "result")
    //logs user table id
    //handle this and error when p/w hashing setup
  })
})

router.get('/users/:id', (req, res) => {
  //display authenticated user data
})

router.post('/users/:id', (req, res) => {
  //edit user data
})

router.post('/captures', (req, res) => {
  //capture type (trapped/detected?)
  //datestamp
  //notes
})

router.get('/captures', (req, res) => {
  //get data from captures by a date/date-range
})


//ADD DEVICE ROUTES

module.exports = router;
