const { Flights } = require("../models/index");
const { Op, where } = require("sequelize");

class FlightRepository {
  #createFilter(data) {
    let filter = {};
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }
    if (data.minPrice) {
      Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
    }
    if (data.maxPrice) {
      Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });
    }
    if (data.maxPrice && data.minPrice) {
      Object.assign(filter, {
        price: { [Op.between]: [data.minPrice, data.maxPrice] },
      });
    }
    console.log(filter);
    return filter;
  }
  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getAllFlight(filter) {
    try {
      const FilterObj = this.#createFilter(filter);
      const flight = await Flights.findAll({
        where: FilterObj,
      });
      // console.log(FilterObj);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
}

module.exports = FlightRepository;
