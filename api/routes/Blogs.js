const express = require("express");
const { validateToken } = require("../middlewares/AuthMware");
const router = express.Router();
const { Blogs } = require("../models");

router.get("/", async (req, res) => {
  const listOfBlogs = await Blogs.findAll();
  res.json(listOfBlogs);
});

router.post("/new", validateToken, async (req, res) => {
  const blog = req.body;
  await Blogs.create(blog);
  res.json(blog);
});

router.get("/:id", async (req, res) => {
  const blog = req.params.id;
  const foundBlog = await Blogs.findOne({ where: { id: blog } });
  res.json(foundBlog);
});

router.get("/myblogs/:id", validateToken, async (req, res) => {
  const userId = req.params.id;
  const foundBlogs = await Blogs.findAll({ where: { userId: userId } });
  res.json(foundBlogs);
});

module.exports = router;
