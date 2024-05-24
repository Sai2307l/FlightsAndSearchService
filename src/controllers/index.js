const { create, destroy, get, update, getAll } = require("./city-controller");
const { createFlight, findFlight } = require("./flight-controller");
const {
  createAirport,
  destroyAirport,
  getAirport,
  updateAirport,
  getAllAirport,
} = require("./airport-controller");

module.exports = {
  createFlight,
  findFlight,
  create,
  destroy,
  get,
  update,
  getAll,
  createAirport,
  destroyAirport,
  getAirport,
  updateAirport,
  getAllAirport,
};
