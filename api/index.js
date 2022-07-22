const express = require("express");
const app = express();
const db = require("./models");

app.use(express.json());

// Routers
const blogRouter = require("./routes/Blogs");

app.use("/api/blogs", blogRouter);

db.sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log("Server started on port 5000");
  });
});
