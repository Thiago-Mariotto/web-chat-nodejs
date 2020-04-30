
exports.up = function(knex) {
    return knex.schema.createTable('messages', function(table) {
        
        table.increments('id').primary();;
        table.string('message').notNullable();
        table.integer("username").notNullable();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
            
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('messages');

};
