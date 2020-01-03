const router = require("express").Router();

const Users = require("./users-model.js");
// const restricted = require("../middleware/restricted-middleware.js");

router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/:id", verifyUserId, async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Users.findById(id);
    user.exercises = await Users.getExercisesByUserId(id);

    delete user.password;
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// router.get("/:id/tasks", restricted, verifyUserId, (req, res) => {
//   const id = req.params.id;

//   Users.findById(id)
//     .then(user => {
//       Users.getTasksByUserId(id)
//         .then(tasks => {
//           res.status(200).json({ ...user, tasks });
//           console.log(user, tasks);
//         })
//         .catch(err => {
//           res.status(500).json(err);
//         });
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });

// ---------------------- Custom Middleware ---------------------- //

function verifyUserId(req, res, next) {
  const id = req.params.id;

  Users.findById(id)
    .then(item => {
      if (item) {
        req.item = item;
        next();
      } else {
        res.status(404).json({ message: "User Not Found." });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

module.exports = router;
