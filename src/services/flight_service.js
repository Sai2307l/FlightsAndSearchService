const { AirplaneRepository, FlightRepository } = require("../repository/index");

class FlightService {
  constructor() {
    this.airplaneRepo = new AirplaneRepository();
    this.flightRepo = new FlightRepository();
  }
  async createFlight(body) {
    try {
      const airplane = await this.airplaneRepo.getAirplane(body.airplaneId);
      const flight = await this.flightRepo.createFlight({
        ...body,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw { error };
    }
  }
  async getFlightData(body) {
    try {
      const airplane = await this.airplaneRepo.getAirplane(body.airplaneId);
      return airplane;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw { error };
    }
  }
}

module.exports = FlightService;
