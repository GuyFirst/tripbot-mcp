// agents/plannerAgent.js

const flightAgent = require('./flightAgent');
const hotelAgent = require('./hotelAgent');

module.exports = {
  plan: async ({ destination, startDate, endDate, budget }) => {
    const flights = await flightAgent.getFlights(destination, startDate, endDate);
    const hotels = await hotelAgent.getHotels(destination, startDate, endDate);

    const totalCost = flights[0].price + hotels[0].price;

    return {
      destination,
      startDate,
      endDate,
      budget,
      selectedFlight: flights[0],
      selectedHotel: hotels[0],
      totalCost
    };
  }
};
