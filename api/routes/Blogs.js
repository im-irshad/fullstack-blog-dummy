const express = require("express");
const router = express.Router();
const { Blogs } = require("../models");

router.get("/", async (req, res) => {
  const listOfBlogs = await Blogs.findAll();
  res.json(listOfBlogs);
});

router.post("/", async (req, res) => {
  const blog = req.body;
  await Blogs.create(blog);
  res.json(blog);
});

router.get("/:id", async (req, res) => {
  const blog = req.params.id;
  const foundBlog = await Blogs.findOne({ where: { id: blog } });
  res.json(foundBlog);
});
module.exports = router;
