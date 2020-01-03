const router = require("express").Router();
const jwt_decode = require("jwt-decode");

const Sets = require("./sets-model");

// ---------------------- /api/sets ---------------------- //

router.post("/", (req, res) => {
  let set = req.body;

  Sets.add(set)
    .then(newSet => {
      res.status(201).json({ newSet });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/", async (req, res) => {
  try {
    const sets = await Sets.find();
    res.status(200).json({ sets });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
