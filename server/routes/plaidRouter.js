import express from 'express'; 
const router = express.Router(); 
import plaidControllers from '../controllers/plaidControllers.js';

router.get('/token',  (req, res) => {
  res.status(200).send('checkkk');
});

// router.get('/link', plaidControllers.createLinkToken, (req, res) => {
//   res.status(200).send(res.locals.linkToken);
// });

export default router;