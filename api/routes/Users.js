const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  const user = req.body;
  user.password = await bcrypt.hash(user.password, 10);
  await Users.create(user);
  res.json(user);
});

router.post("/login", async (req, res) => {
  const { name, password } = req.body;
  const user = await Users.findOne({ where: { name } });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json(user);
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

module.exports = router;
