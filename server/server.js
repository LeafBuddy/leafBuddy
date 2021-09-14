import express from 'express';
/* const cookieParser = require('cookie-parser');
const cors = require('cors'); */
import path, { dirname } from 'path';
const app = express();
import router from './routes/plaidRouter.js';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//middleware
/* app.use(cors());
 */ app.use(express.json());
/* app.use(cookieParser());
 */ app.use(express.urlencoded({ extended: true }));

//plaid router
app.use('/plaid', router);

app.get('/style/style.scss', (_req, res) => {
  res.set('Content-Type', 'text/css');
  res.sendFile(path.resolve(__dirname, '..', 'assets', 'css', 'style.scss'));
});
//serve js files
app.get('/js/:file', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'assets', 'js', 'index.js'));
});

//default route handler
// app.get('/', (req, res) => {
//   res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
// });



//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express global error handler caught unknown middleware error',
    status: err.status || 500,
    message: err.message || { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

//initialize server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
