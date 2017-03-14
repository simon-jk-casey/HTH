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

function addDevice (device) {
  return knex('devices').insert(device)
}

function getDevices () {
  return knex('devices')
}

function getDeviceById (id) {
  return knex('devices').where('id', `${id}`)
}

module.exports = {
  addUser,
  getUsers,
  getUserByUsername,
  getUserById,
  addDevice,
  getDevices,
  getDeviceById
}
