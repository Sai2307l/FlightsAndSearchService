const { AirplaneRepository, FlightRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");
class FlightService {
  constructor() {
    this.airplaneRepo = new AirplaneRepository();
    this.flightRepo = new FlightRepository();
  }
  async createFlight(body) {
    try {
      if (compareTime(body.arrivalTime, body.departureTime)) {
        throw { error: "Arrival time cannot be less than departure time" };
      }
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
  async getFlightData(data) {
    try {
      const flight = await this.flightRepo.getAllFlight(data);
      return flight;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw { error };
    }
  }
}

module.exports = FlightService;
