const CrudRepo = require("./crud-repository");
const { Airport } = require("../models/index");

class AirportRepository extends CrudRepo {
  constructor() {
    super(Airport);
  }
}

module.exports = AirportRepository;
