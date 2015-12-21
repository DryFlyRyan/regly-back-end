
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('student', function(table) {
      table.increments('id');
      table.string('first_name');
      table.string('last_name');
      table.string('email');
      table.datetime('date_of_birth');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('student')
  ]);
};
