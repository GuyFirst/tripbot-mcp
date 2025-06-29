module.exports = {
  respond: async (plan) => {
    return {
      summary: `Trip to ${plan.destination} from ${plan.startDate} to ${plan.endDate}`,
      flight: plan.selectedFlight,
      hotel: plan.selectedHotel,
      totalCost: plan.totalCost,
      withinBudget: plan.totalCost <= plan.budget
    };
  }
};