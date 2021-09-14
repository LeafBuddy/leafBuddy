/* require('dotenv/config.js');
const plaidController = {};
const { Configuration, PlaidApi, plaidEnvironments } = require ('plaid');

const configuration = new Configuration({
  basePath: 'https://sandbox.plaid.com',
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
      'PLAID-SECRET': process.env.PLAID_SECRET,
    },
  },
});
const client = new PlaidApi(configuration);

//Create one-time Link Token to authenticate app
plaidController.createLinkToken = async (req, res, next) => {
  // Get the client_user_id by searching for the current user
  const user = await User.find('custom_testuser01');
  const clientUserId = user.id;
  const request = {
    user: {
      // This should correspond to a unique id for the current user.
      client_user_id: clientUserId,
    },
    client_name: 'Plaid Test App',
    products: ['transactions'],
    language: 'en',
    webhook: 'https://webhook.example.com',
    country_codes: ['US'],
  };
  try {
    const createTokenResponse = await client.linkTokenCreate(request);
    res.json(createTokenResponse.data);
  } catch (error) {
    // handle error
  }
  return next();
};

module.exports = plaidController; */