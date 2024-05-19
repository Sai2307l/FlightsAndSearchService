const express = require("express");
const bodyParser = require("body-parser");

const { port } = require("./config/serverConfig.js");
const ApiRoutes = require("./routes/index.js");

const db = require("./models/index.js");
const { Airplane } = require("./models/index.js");
const { where, Model } = require("sequelize");
// const { Airplane } = require("./models/airplane.js");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(port, async () => {
    console.log(`app listening on port ${port}!`);

    if (process.env.DB_sync) {
      db.sequelize.sync({ alter: true });
    }
  });
};
setupAndStartServer();
