const Knex = require('knex')
const knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
const knex = Knex(knexConfig)

function addUser (user) {
  return knex('users').insert(user)
}

function getUsers () {
  return knex('users')
}

function getUserByUsername (username) {
  return knex('users').where('username', `${username}`)
}

function getUserById (id) {
  return knex('users').where('id', `${id}`)
}

function removeUser (id) {
  return knex('users').where('id', `${id}`).del()
}

function addDevice (device) {
  return knex('devices').insert(device)
}

function getDevices () {
  return knex('devices')
}

function getDeviceById (id) {
  return knex('devices').where('id', `${id}`)
}

function removeDevice (id) {
  return knex('devices').where('id', `${id}`).del()
}

function addPredatorData (predatorData) {
  return knex('predatorData').insert(predatorData)
}

// function getPredatorData () {
//   return knex('predatorData')
// }

function getCaptureData () {
  return knex('predatorData')
  .join('devices', 'predatorData.deviceId', 'devices.id')
}

module.exports = {
  addUser,
  getUsers,
  getUserByUsername,
  getUserById,
  removeUser,
  addDevice,
  getDevices,
  getDeviceById,
  removeDevice,
  addPredatorData,
  // getPredatorData,
  getCaptureData
}
