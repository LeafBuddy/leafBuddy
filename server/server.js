const path = require('path');
const dotenv = require('dotenv')
const cors = require('cors')
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const passport = require('passport');
dotenv.config({path: path.resolve(__dirname, './config/config.env' )})
const GoogleStrategy = require('passport-google-oauth20').Strategy;


//middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
// app.use(cookieSession({
//     name: 'session',
//     keys: ['key1','key2'],
// }))
console.log(`http://localhost:${process.env.PORT}/auth/google/callback`);
 
//passport strategy
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.CLIENT_ID,
//       clientSecret: process.env.CLIENT_SECRET,
//       callbackURL: `http://localhost:${process.env.PORT}/auth/google/callback`,
//     },
//     async function (accessToken, refreshToken, profile, done) {
//       // User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       //   return cb(err, user);
//       // });
//       console.log('access toke', accessToken);
//       console.log('refresh token', refreshToken);
//       console.log('profile', profile);

//       //add user to db with their access token for future api calls
//       try {
//         await eventController.addUser(profile, accessToken, refreshToken);
//         await eventController.pushCalEvents(accessToken, profile);
//       } catch (err) {
//         console.log(err);
//       }

//       return done(null, {
//         profile: profile,
//         accessToken: accessToken,
//         refreshToken: refreshToken,
//       });
//     }
//   )
// );
// //passport hashing and dehashing
// passport.serializeUser(function (user, cb) {
//   cb(null, user);
// });

// passport.deserializeUser(function (user, cb) {
//   // User.findById(id, function(err, user) {
//   cb(null, user);
//   // });
// });
// console.log('made it just before redirect');

// //passport routes
// app.get(
//   '/google',
//   passport.authenticate('google', {
//     scope: [
//       'profile',
//       'https://www.googleapis.com/auth/calendar',
//       'https://www.googleapis.com/auth/calendar.events',
//     ],
//     accessType: 'offline',
//     prompt: 'consent',
//   })
// );
// // ^^ provides read write access to user calendars and events within calendar, see https://developers.google.com/calendar/api/guides/auth
// app.get(
//   '/google/callback',
//   passport.authenticate('google', {
//     failureRedirect: '/loginfailure',
//     successRedirect: '/',
//   }),
//   function (req, res) {
//     console.log('done');
//     // Successful authentication, redirect home.
//   }
// );

//dummy routes to see if auth worked!
app.get('/loginfailure', (req, res) =>
  res.send('Authentication failed. Please return to homepage and try again.')
);
app.use(express.static(path.resolve(__dirname, '../build')));

//serve css files
app.get('/style/style.scss', (_req, res) => {
  res.set('Content-Type', 'text/css');
  res.sendFile(path.resolve(__dirname, '..', 'assets', 'css', 'style.scss'));
});
//serve js files
app.get('/js/:file', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'assets', 'js', 'index.js'));
});

//default route handler
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

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
