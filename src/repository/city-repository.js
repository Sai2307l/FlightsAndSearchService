const { where } = require("sequelize");
const { City } = require("../models/index");

class CityRepo {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      throw { error };
    }
  }
  async deleteCity({ id }) {
    try {
      await City.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = CityRepo;
