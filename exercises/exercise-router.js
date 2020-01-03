const router = require("express").Router();
const jwt_decode = require("jwt-decode");

const Exercises = require("./exercise-model");

// ---------------------- /api/exercises ---------------------- //

router.post("/", (req, res) => {
  let exercise = req.body;
  const token = req.headers.authorization;
  const decoded = jwt_decode(token);
  exercise.user_id = decoded.subject;

  Exercises.add(exercise)
    .then(newExercise => {
      res.status(201).json({ newExercise });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/", async (req, res) => {
  try {
    const exercises = await Exercises.find();
    res.status(200).json({ exercises });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
