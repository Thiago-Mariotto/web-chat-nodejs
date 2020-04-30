
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
        
        table.increments('id').primary();
        table.string('username').notNullable();
        
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
