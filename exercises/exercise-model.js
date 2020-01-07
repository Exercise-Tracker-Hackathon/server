const db = require("../data/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove
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

function update(id, changes) {
  return db("exercises")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("exercises")
    .where({ id })
    .del();
}
