exports.up = function(knex) {
  return knex.schema.createTable("exercises", exercises => {
    // exercise id
    exercises.increments();

    // exercise type
    exercises.string("type", 128);

    // exercise sets
    exercises.integer("sets");

    // exercise reps
    exercises.integer("reps");

    // exercise completed at
    exercises.timestamp("completed_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("exercises");
};
