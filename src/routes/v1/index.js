const express = require("express");

const FlightMiddleware = require("../../middlewares/index");

const Controller = require("../../controllers/index");
const router = express.Router();

router.post("/city", Controller.create);
router.delete("/city/:id", Controller.destroy);
router.get("/city/:id", Controller.get);
router.patch("/city/:id", Controller.update);
router.get("/city", Controller.getAll);

router.post(
  "/flights",
  FlightMiddleware.validateCreateFlight,
  Controller.createFlight
);
router.get("/flights", Controller.findFlight);

router.post("/airport", Controller.createAirport);
router.delete("/airport/:id", Controller.destroyAirport);
router.get("/airport/:id", Controller.getAirport);
router.patch("/airport/:id", Controller.updateAirport);
router.get("/airport", Controller.getAllAirport);

module.exports = router;
