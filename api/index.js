const express = require("express");
const app = express();
const db = require("./models");

app.use(express.json());

// Routers
const blogRouter = require("./routes/Blogs");
const commentRouter = require("./routes/Comments");

app.use("/api/blogs", blogRouter);
app.use("/api/comments", commentRouter);

db.sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log("Server started on port 5000");
  });
});
