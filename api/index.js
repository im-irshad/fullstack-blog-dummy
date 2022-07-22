const express = require("express");
const app = express();
const db = require("./models");

db.sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log("Server started on port 5000");
  });
});
