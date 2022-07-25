const express = require("express");
const router = express.Router();
const { comments } = require("../models/Comments");

router.get("/:blogId", async (req, res) => {
  const blogId = req.params.blogId;
  const comments = await Comments.findAll({ where: { blogId } });
  res.json(comments);
});

router.post("/", async (req, res) => {
  const comment = req.body;
  const newComment = await Comments.create(comment);
  res.json(newComment);
});

module.exports = router;
