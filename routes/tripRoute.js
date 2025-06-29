const express = require('express');
const router = express.Router();

// import agents
const parserAgent = require('../agents/parserAgent');
const plannerAgent = require('../agents/plannerAgent');
const responseAgent = require('../agents/responseAgent');

router.post('/', async (req, res) => {
  try {
    const userPrompt = req.body.prompt;

    if (!userPrompt) {
      return res.status(400).json({ error: 'Missing prompt in request body.' });
    }

    const parsedData = await parserAgent.parse(userPrompt);
    const plan = await plannerAgent.plan(parsedData);
    const result = await responseAgent.respond(plan);

    res.status(200).json(result);
  } catch (err) {
    console.error('Trip error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
