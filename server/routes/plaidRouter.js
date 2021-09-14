import express from 'express'; 
const router = express.Router(); 
import plaidControllers from '../controllers/plaidControllers.js';

// router.get('/', (req, res) => {
//   res.status(200).send('check');
// });

router.get('/linkToken', plaidControllers.createLinkToken, (req, res) => {
  // console.log('router firing');
  res.status(200).send(res.locals.linkToken);
});

router.post('/publicToken', plaidControllers.publicToken, (req, res) => {
  console.log('hitting public router')
  res.status(200).json();
});


export default router;
