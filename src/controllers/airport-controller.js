const { AirportService } = require("../services/index");
const airportService = new AirportService();

const createAirport = async (req, res) => {
  try {
    const airport = await airportService.create(req.body);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Successfully created a airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a new airport",
      err: error,
    });
  }
};
const destroyAirport = async (req, res) => {
  try {
    const response = await airportService.destroy(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted a Airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the Airport",
      err: error,
    });
  }
};
const getAirport = async (req, res) => {
  try {
    const Airport = await airportService.get(req.params.id);
    return res.status(200).json({
      data: Airport,
      success: true,
      message: "Successfully fetched a Airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to fetch the Airport",
      err: error,
    });
  }
};
const updateAirport = async (req, res) => {
  try {
    const Airport = await airportService.update(req.params.id, req.body);
    return res.status(200).json({
      data: Airport,
      success: true,
      message: "Successfully Updated a Airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to Update a Airport",
      err: error,
    });
  }
};

const getAllAirport = async (req, res) => {
  try {
    const Airport = await airportService.getAll(req.query);
    return res.status(201).json({
      data: Airport,
      success: true,
      message: "Successfully fetched all Airports",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to Find all Airport",
      err: error,
    });
  }
};

module.exports = {
  createAirport,
  destroyAirport,
  getAirport,
  updateAirport,
  getAllAirport,
};
