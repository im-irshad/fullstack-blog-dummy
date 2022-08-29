const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middlewares/AuthMware");

router.post("/signup", async (req, res) => {
  const user = req.body;
  user.password = await bcrypt.hash(user.password, 10);
  await Users.create(user);
  res.json(user);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ where: { email } });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = sign(
      { userId: user.id, email: user.email },
      "secretdummykey",
      {
        expiresIn: "1h",
      }
    );
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

router.get("/auth", validateToken, (req, res) => {
  res.json({ userId: req.user, email: req.email });
});

router.put("/update", async (req, res) => {
  console.log(req.userId);
  if (req.body.name) {
    const updatedProfile = await Users.update(
      {
        name: req.body.name,
      },
      {
        where: {
          id: req.body.userId,
        },
      }
    );
  }

  req.body.email && console.log("email");
  req.body.password && console.log("password");
});

module.exports = router;
