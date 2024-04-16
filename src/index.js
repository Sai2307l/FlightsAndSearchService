const express = require("express");
const bodyParser = require("body-parser");

const { port } = require("./config/serverConfig.js");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(port, () => console.log(`app listening on port ${port}!`));
};
setupAndStartServer();
