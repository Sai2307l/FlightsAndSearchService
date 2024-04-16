const express = require("express");

const { port } = require("./config/serverConfig.js");

const setupAndStartServer = async () => {
  const app = express();

  app.listen(port, () => console.log(`app listening on port ${port}!`));
};
setupAndStartServer();
