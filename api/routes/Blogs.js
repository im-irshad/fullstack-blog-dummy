const express = require("express");
const router = express.Router();
const { Blogs } = require("../models");

router.get("/", (req, res) => {
  res.send("Hello from Blogs");
});

router.post("/", async (req, res) => {
  const blog = req.body;
  await Blogs.create(blog);
  res.json(blog);
});
module.exports = router;
