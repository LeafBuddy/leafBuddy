import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';
// import dotenv from 'dotenv';

console.log('hey');
console.log(PlaidEnvironments);

// const configuration = new Configuration({
//   basePath: PlaidEnvironments.sandbox,
//   baseOptions: {
//     headers: {
//       'PLAID-CLIENT-ID': 
//       'PLAID-SECRET': 
//     },
//   },
// });

// const client = new PlaidApi(configuration);

const plaidControllers = {};

// FRONT END FETCHES LINK TOKEN 
// CREATE LINK TOKEN ---> connects our app & that user to Plaid servers 
// USER USES LINK TOKEN TO LOG IN AND IS SUCCESSFUL
// SUCCESSFUL LOGIN GENERATES PUBLIC TOKEN 
// PUBLIC TOKEN IS SENT BACK TO BACKEND
// PUBLIC TOKEN IS EXCHANGED FOR ACCESS TOKEN
// ACCESS TOKEN IS USED TO GET TRANSACTION DATA
// DO WE WANT TO SAVE DATA? 


// plaidControllers.createLinkToken = async (req, res, next) => {
//   try {
//     const response = await plaidClient.linkTokenCreate({
//       user: {
//         client_user_id: 'user_good',
//       },
//       client_name: 'LeafBuddy',
//       products: ['auth', 'transactions'],
//       language: 'en',
//       account_filters: {
//         depository: {
//           account_subtypes: ['checking', 'savings'],
//         },
//       },
//     });
//     res.locals.linkToken = response.data.link_token;
//     return next();
//   } catch (error) {
//     console.log('Error with token:', response.data.link_token);
//     return next(err);
//   }
// }; 





export default plaidControllers; 

