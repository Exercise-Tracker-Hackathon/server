exports.up = function(knex) {
  return knex.schema.createTable("sets", sets => {
    // sets id
    sets.increments();

    // set completed at
    sets.timestamp("completed_at").defaultTo(knex.fn.now());

    // set connected to exercise (foreign key)
    sets
      .integer("exercise_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("exercises")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("sets");
};
