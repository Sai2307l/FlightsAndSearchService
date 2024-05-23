"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Flights",
      [
        {
          flightNumber: "US2310",
          airplaneId: 15,
          departureAirportId: 21,
          arrivalAirportId: 23,
          arrivalTime: "2024-06-18T16:00:00.000",
          departureTime: "2024-06-18T19:30:00.000",
          price: 4500,
          totalSeats: 360,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          flightNumber: "US2110",
          airplaneId: 17,
          departureAirportId: 21,
          arrivalAirportId: 22,
          arrivalTime: "2024-06-18T08:00:00.000",
          departureTime: "2024-06-18T08:30:00.000",
          price: 3000,
          totalSeats: 210,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          flightNumber: "US652",
          airplaneId: 18,
          departureAirportId: 22,
          arrivalAirportId: 24,
          arrivalTime: "2024-06-18T13:45:00.000",
          departureTime: "2024-06-18T11:30:00.000",
          price: 3500,
          totalSeats: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
