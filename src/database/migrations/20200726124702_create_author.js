
exports.up = function(knex) {
    return knex.schema.createTable('author', function(table){
        table.increments('id');
        table.string('name');

        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('author');
};