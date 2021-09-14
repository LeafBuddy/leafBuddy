const express = require('express'); 
const plaidRouter = express.Router(); 
const plaidControllers = require('../controllers/plaidControllers.js');

// router.get('/', (req, res) => {
//   res.status(200).send('check');
// });

plaidRouter.get('/linkToken', plaidControllers.createLinkToken, (req, res) => {
  console.log('router firing');
  res.status(200).json(res.locals.linkToken);
});

plaidRouter.post('/publicToken', plaidControllers.publicToken, (req, res) => {
  console.log('hitting public router');
  res.status(200).json();
});


module.exports = plaidRouter;