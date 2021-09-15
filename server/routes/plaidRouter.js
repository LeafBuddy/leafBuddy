const express = require('express'); 
const plaidRouter = express.Router(); 
const plaidControllers = require('../controllers/plaidControllers.js');
// const carbonControllers = require('../controllers/carbonControllers.js');
// const mccControllers = require('../controllers/mastercardCodes.js');
const carbonScore = require('../controllers/carbonScore.js');


plaidRouter.get('/linkToken', plaidControllers.createLinkToken, (req, res) => {
  console.log('router firing');
  res.status(200).json(res.locals.linkToken);
});

plaidRouter.post('/publicToken', plaidControllers.publicToken, (req, res) => {
  console.log('hitting public router');
  res.status(200).json(res.locals.);
});

plaidRouter.get('/transactions', plaidControllers.getTransactions, carbonScore.score, (req, res) => {
  res.status(200).json(res.locals.carbonlist);
});

module.exports = plaidRouter;
