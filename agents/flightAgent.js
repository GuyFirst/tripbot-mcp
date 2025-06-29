module.exports = {
  getFlights: async (destination, startDate, endDate) => {
    return [
      {
        airline: "Air France",
        price: 800,
        departure: startDate,
        return: endDate
      }
    ];
  }
};