const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');
require('dotenv/config.js');
const moment = require('moment');
const pool = require('../db/connect.js');
const User = require('../db/model.js');
const randomstring = require("randomstring");

const configuration = new Configuration({
  basePath: PlaidEnvironments[process.env.PLAID_ENV],
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
      'PLAID-SECRET': process.env.PLAID_SECRET,
    },
  },
});

const plaidClient = new PlaidApi(configuration);

const plaidControllers = {};

// FRONT END FETCHES LINK TOKEN
// CREATE LINK TOKEN ---> connects our app & that user to Plaid servers
// USER USES LINK TOKEN TO LOG IN AND IS SUCCESSFUL
// SUCCESSFUL LOGIN GENERATES PUBLIC TOKEN
// PUBLIC TOKEN IS SENT BACK TO BACKEND
// PUBLIC TOKEN IS EXCHANGED FOR ACCESS TOKEN
// SAVE ACCESS TOKEN SO YOU DON'T NEED IT EVERYTIME FOR A LOGGED IN USER
// ACCESS TOKEN IS USED TO GET TRANSACTION DATA

plaidControllers.createLinkToken = async (req, res, next) => {
  try {
    const response = await plaidClient.linkTokenCreate({
      user: {
        client_user_id: 'user_good',
      },
      client_name: 'LeafBuddy',
      products: ['auth', 'transactions'],
      language: 'en',
      country_codes: ['US'],
      account_filters: {
        depository: {
          account_subtypes: ['checking', 'savings'],
        },
      },
    });
    res.locals.linkToken = response.data.link_token;
    return next();
  } catch (err) {
    console.log('Error with token:', err);
    return next(err);
  }
};

plaidControllers.setCookie = (req, res, next) => {


   return next();
};

plaidControllers.publicToken = async (req, res, next) => {
  try {

    const public_token = req.body.public_token;
    const response = await plaidClient.itemPublicTokenExchange({
      public_token,
    });
    res.locals. = response.data.;
     
    // create user ID and save in cookies and DB
    const id = randomstring.generate({
      length: 12,
      charset: 'alphabetic'
    });
     res.cookie('leaf', id );

    await User.findOneAndUpdate({username: id}, {thetoken:res.locals.}, {upsert:true}); 

    return next();
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

// {
// account_id: 'Yg1yYmpN0XfzkLQpVmx6Up3L4d9XovHedjXVL',
// account_owner: null,
// amount: 16.35,
// authorized_date: null,
// authorized_datetime: null,
// category: [ 'Travel', 'Taxi' ],
// category_id: '22016000',
// check_number: null,
// date: '2021-09-10',
// datetime: null,
// iso_currency_code: 'USD',
// location: {
//   address: null,
//   city: null,
//   country: null,
//   lat: null,
//   lon: null,
//   postal_code: null,
//   region: 'CA',
//   store_number: null
// },
// merchant_name: 'Uber',
// name: 'Uber',
// payment_channel: 'in store',
// payment_meta: {
//   by_order_of: null,
//   payee: null,
//   payer: null,
//   payment_method: null,
//   payment_processor: null,
//   ppd_id: null,
//   reason: null,
//   reference_number: null
// }

plaidControllers.getTransactions = async (req, res, next) => {
  const now = moment();
  const today = now.format('YYYY-MM-DD');
  const thirtyDays = now.subtract(30, 'days').format('YYYY-MM-DD');

  // get user ID from cookie
  const username = req.cookies.leaf;
  const user = await User.find({username:username});
  const  = user[0].thetoken;

  try{
    const response = await plaidClient.transactionsGet({
      : ,
      start_date: thirtyDays,
      end_date: today,
    });

    res.locals.transactions = response.data.transactions;
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = plaidControllers;
