
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('users', (table) => {
    table.increments('id').primary()
    table.string('username').notNullable().unique()
    table.string('password').notNullable()
    table.string('firstName').notNullable()
    table.string('lastName').notNullable()
    table.string('streetNumber').notNullable()
    table.string('streetName').notNullable()
    // add street type (ie ave, st etc)
    table.string('suburb').notNullable()
    table.string('city').notNullable()
    table.string('email').notNullable().unique()
    table.string('gpsCoords').notNullable().unique()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
