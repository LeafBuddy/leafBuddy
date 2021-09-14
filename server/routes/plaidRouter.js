import express from 'express'; 
const router = express.Router(); 
import plaidControllers from '../controllers/plaidControllers.js';

router.get('/', (req, res) => {
  res.status(200).send('check');
});

// router.get('/', plaidControllers.createLinkToken, (req, res) => {
//   res.status(200).send(res.locals.linkToken);
// });

export default router;