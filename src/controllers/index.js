const { create, destroy, get, update, getAll } = require("./city-controller");
const { createFlight, findFlight } = require("./flight-controller");

module.exports = {
  createFlight,
  findFlight,
  create,
  destroy,
  get,
  update,
  getAll,
};
