const db = require("../data/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db("sets");
}

function findBy(filter) {
  return db("sets").where(filter);
}

async function add(set) {
  const [id] = await db("sets").insert(set, "id");

  return findById(id);
}

function findById(id) {
  return db("sets")
    .where({ id })
    .first();
}
