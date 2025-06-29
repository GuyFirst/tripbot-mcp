module.exports = {
  parse: async (prompt) => {
    // Dummy parser - returns hardcoded info
    return {
      destination: "Paris",
      startDate: "2025-07-11",
      endDate: "2025-07-19",
      budget: 2000
    };
  }
};