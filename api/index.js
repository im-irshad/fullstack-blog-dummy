const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Routers
const blogRouter = require("./routes/Blogs");
const commentRouter = require("./routes/Comments");
const userRouter = require("./routes/Users");

app.use("/auth", userRouter);
app.use("/api/blogs", blogRouter);
app.use("/api/comments", commentRouter);
app.use("/api/users", userRouter);

db.sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log("Server started on port 5000");
  });
});
