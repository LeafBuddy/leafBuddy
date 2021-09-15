const express = require('express'); 
const plaidRouter = express.Router(); 
const plaidControllers = require('../controllers/plaidControllers.js');
const carbonControllers = require('../controllers/carbonControllers.js');
const mccControllers = require('../controllers/mastercardCodes.js');


plaidRouter.get('/linkToken', plaidControllers.createLinkToken, (req, res) => {
  console.log('router firing');
  res.status(200).json(res.locals.linkToken);
});

plaidRouter.post('/publicToken', plaidControllers.publicToken, (req, res) => {
  console.log('hitting public router');
  res.status(200).json(res.locals.);
});

plaidRouter.get('/transactions', plaidControllers.getTransactions, (req, res) => {
  console.log('hitting transactions router');
  res.status(200).json(res.locals.transactions);
});

plaidRouter.get('/carbon', carbonControllers.carbon, (req, res) => {
  console.log('hitting carbon router');
  res.status(200).json('finished carbon router');
});

plaidRouter.get('/codes', mccControllers.getCode, (req, res) => {
  console.log('hitting mcc router');
  res.status(200).json('finished mcc router');
});

module.exports = plaidRouter;
