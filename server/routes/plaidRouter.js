const { Router } = require('express');
const { createLinkToken } = require('../controllers/plaidController.js');
const plaidRouter = Router();

plaidRouter.post('/create_link_token', createLinkToken, (req, res) => {
  res.status(200).send('okurr');
});


export default plaidRouter;