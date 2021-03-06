const db = require("../data/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  getExercisesByUserId,
  getNumberOfSetsbyExerciseId
};

function find() {
  return db("users").select("id", "email", "password");
}

function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  const [id] = await db("users").insert(user, "id");

  return findById(id);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function getExercisesByUserId(id) {
  return db("exercises").where({ user_id: id });
}

function getNumberOfSetsbyExerciseId(id) {
  return db("sets").where({ exercise_id: id });
}
