const express = require("express");
const bodyParser = require("body-parser");

const { port } = require("./config/serverConfig.js");
const ApiRoutes = require("./routes/index.js");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(port, async () => {
    console.log(`app listening on port ${port}!`);
  });
};
setupAndStartServer();
