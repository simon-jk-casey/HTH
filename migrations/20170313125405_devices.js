
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('devices', (table) => {
    table.increments('id').primary()
    table.integer('userId').notNullable()
    table.string('deviceName').notNullable()
    table.string('deviceType').notNullable()
    table.string('notes')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('devices')
}
