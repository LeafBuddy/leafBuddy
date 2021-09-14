import express from 'express';
/* const cookieParser = require('cookie-parser');
const cors = require('cors'); */
import path from 'path';
const app = express();
/* const messageRouter = require('./routers/messageRouter.js'); */

//middleware
/* app.use(cors());
 */ app.use(express.json());
/* app.use(cookieParser());
 */ app.use(express.urlencoded({ extended: true }));


//serve css files
app.get('/css/style.css', (_req, res) => {
  res.set('Content-Type', 'text/css');
  res.sendFile(path.resolve(__dirname, '..', 'assets', 'css', 'style.css'));
});
//serve js files
app.get('/js/:file', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'assets', 'js', 'index.js'));
});

//default route handler
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../views/index.html'));
});

//message router
/* app.use('/messages', messageRouter);
 */ //auth router
//app.use('/authenticate', authRouter);

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
