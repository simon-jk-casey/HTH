var express = require('express');
var router = express.Router();


router.post('/signup', (req, res) => {
  //username
  //password
  //first name
  //last name
  //address:  street number, street name, suburb, city
  //gps coordinates
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
