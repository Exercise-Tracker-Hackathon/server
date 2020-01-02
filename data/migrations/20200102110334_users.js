exports.up = function(knex) {
  return knex.schema.createTable("users", users => {
    // user id
    users.increments();

    // users email
    users
      .string("email", 128)
      .notNullable()
      .unique();

    // users password
    users.string("password", 128).notNullable();

    // users name
    users.string("name", 128);

    // users join date
    users.timestamp("created_at").defaultTo(knex.fn.now());

    // users avatar pic/defaults to a placeholder image
    users
      .string("avatar_url", 3000)
      .defaultTo(
        "https://static.wixstatic.com/media/4151a5_7706b6198d164a3e947f4548166228ad~mv2.png"
      );

    // users preference on time between sets
    users.integer("timer");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
