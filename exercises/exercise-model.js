const db = require("../data/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update
};

function find() {
  return db("exercises");
}

function findBy(filter) {
  return db("exercises").where(filter);
}

async function add(exercise) {
  const [id] = await db("exercises").insert(exercise, "id");

  return findById(id);
}

function findById(id) {
  return db("exercises")
    .where({ id })
    .first();
}

async function update(id, changes) {
  await db("exercises")
    .where({ id })
    .update(changes);

  return db("exercises").where({ user_id: id });
}
