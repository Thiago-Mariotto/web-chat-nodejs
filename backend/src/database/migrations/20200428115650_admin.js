
exports.up = function(knex) {
    return knex.schema.createTable('admin', function(table) {
        
        table.increments('id').primary();
        table.string('username').notNullable();
        table.string('name').notNullable();
        table.string('password').notNullable();
        
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('admin');
};
