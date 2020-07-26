
exports.up = function(knex) {
    return knex.schema.createTable('pictures', function(table){
        table.increments('id');
        table.string('filename');
        
        // Category relationship
        table.decimal('category_id').notNullable();
        table.foreign('category_id').references('id').inTable('category');

        // Author relationship
        table.decimal('author_id').notNullable();
        table.foreign('author_id').references('id').inTable('author');

        
        table.timestamp(true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('pictures');
};
