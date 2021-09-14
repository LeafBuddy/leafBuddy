const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');
require('dotenv/config.js');

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
// ACCESS TOKEN IS USED TO GET TRANSACTION DATA
// DO WE WANT TO SAVE DATA? 


plaidControllers.createLinkToken = async (req, res, next) => {
  try {
    const response = await plaidClient.createLinkToken({
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





}


module.exports = plaidControllers; 

