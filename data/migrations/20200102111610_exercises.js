exports.up = function(knex) {
  return knex.schema.createTable("exercises", exercises => {
    // exercise id
    exercises.increments();

    // exercise type
    exercises.string("type", 128).notNullable();

    // exercise reps
    exercises.integer("reps").notNullable();

    // exercise completed at
    exercises.timestamp("created_at").defaultTo(knex.fn.now());

    // connects exercise to user (foreign key)
    exercises
      .integer("user_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("exercises");
};
