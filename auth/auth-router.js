const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../users/users-model");

// for endpoints beginning with /api/auth
router.post("/register", validateUserContent, (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
  user.password = hash;

  Users.add(user)
    .then(saved => {
      const token = generateToken(saved);
      res.status(201).json({
        saved,
        token
      });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/login", validateUserContent, (req, res) => {
  let { email, password } = req.body;

  Users.findBy({ email })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        // generate token
        const token = generateToken(user);

        res.status(200).json({
          user,
          token //return the token upon login
        });
      } else {
        res.status(401).json({ message: "Invalid email or password" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// ---------------------- Generate Token ---------------------- //

function generateToken(user) {
  const payload = {
    subject: user.id, // standard claim = sub
    email: user.email
  };
  const options = {
    expiresIn: "7d"
  };
  return jwt.sign(payload, process.env.SECRET, options);
}

// ---------------------- Custom Middleware ---------------------- //

function validateUserContent(req, res, next) {
  if (!req.body.email || !req.body.password) {
    res.status(400).json({ message: "Email & password fields are required." });
  } else {
    next();
  }
}

module.exports = router;
