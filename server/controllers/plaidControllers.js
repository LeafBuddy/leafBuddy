const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');
require('dotenv/config.js');
const moment = require('moment');


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

plaidControllers.publicToken = async (req, res, next) => {
  try {
    const public_token = req.body.public_token;
    const response = await plaidClient.itemPublicTokenExchange({
      public_token,
    });
    res.locals.access_token = response.data.access_token;
    console.log('this is the access token ', res.locals.access_token);
    return next();
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

plaidControllers.getTransactions = async (req, res, next) => {
  // Notes for Michael:
  // - Connect your Bank: should be linked to Plaid Client/Plaid Container
  // - You can get transaction data from the Localhost:8080/plaid/transactions
  const now = moment();
  const today = now.format('YYYY-MM-DD');
  const fiveDaysAgo = now.subtract(5, 'days').format('YYYY-MM-DD');

  const access_token = 'access-development-bfb5c15e-985c-4eeb-b744-02932bfe8356';
  console.log(access_token);

  try {
    const response = await plaidClient.transactionsGet({
      access_token,
      start_date: fiveDaysAgo,
      end_date: today,
    });
    res.locals.transactions = response.data.transactions;
    return next();
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

module.exports = plaidControllers;
