const express = require("express");
const { validateToken } = require("../middlewares/AuthMware");
const router = express.Router();
const { Blogs } = require("../models");
const { Users } = require("../models");

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

router.route("/myblogs/:id").get(validateToken, async (req, res) => {
  console.log("try block");
  // const user = await Users.findOne({ where: { id: req.params.id } });
  // const userId = user.id;
  // console.log(userId);
  const foundBlogs = await Blogs.findAll({
    where: { userId: req.params.id },
  });

  res.json(foundBlogs);
});

router.put("/update/:id", async (req, res) => {
  console.log(req.body);
  const id = req.params.id;
  const newValues = req.body;

  // const updatedBlog = await Blogs.update({ newValues }, { where: { id: id } });
  // res.json(updatedBlog);
});
module.exports = router;
