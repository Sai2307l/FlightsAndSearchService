const express = require("express");
const Controller = require("../../controllers/index");
const router = express.Router();

router.post("/city", Controller.create);
router.delete("/city/:id", Controller.destroy);
router.get("/city/:id", Controller.get);
router.patch("/city/:id", Controller.update);
router.get("/city", Controller.getAll);

router.post("/flights", Controller.createFlight);
router.post('/flights/find',Controller.findFlight);

module.exports = router;
