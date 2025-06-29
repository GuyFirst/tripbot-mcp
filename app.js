const express = require('express');
const tripRouter = require('./routes/tripRoute');
require('dotenv').config();

const app = express();

app.use(express.json()); // 👈 This must come BEFORE using any routes

app.use('/trip', tripRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`TripBot MCP server running on port ${PORT}`);
});
