const db = require("../data/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById
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
