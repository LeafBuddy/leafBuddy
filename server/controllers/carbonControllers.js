const forge = require('node-forge');
const path = require('path');
require('dotenv/config.js');
const fs = require('fs');
const axios = require('axios');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const carbonControllers = {};

carbonControllers.carbon = async (req, res, next) => {

  //create signing key --> info based on mastercard-oauth1-signer npm package instructions
  const p12Content = fs.readFileSync(path.join(__dirname, '../../leafBuddy-dev-sandbox.p12'), 'binary');
  const p12Asn1 = forge.asn1.fromDer(p12Content, false);
  const p12 = forge.pkcs12.pkcs12FromAsn1(p12Asn1, false, process.env.KEY_PASSWORD);
  const keyObj = p12.getBags({
    friendlyName: process.env.KEY_ALIAS,
    bagType: forge.pki.oids.pkcs8ShroudedKeyBag
  }).friendlyName[0];
  const signingKey = forge.pki.privateKeyToPem(keyObj.key);

  //create authorization header
  const consumerKey = process.env.CONSUMER_KEY;
  const uri = 'https://sandbox.api.mastercard.com/carbon/transaction-footprints';
  const method = 'POST';
  const payload = JSON.stringify(
    [
      {
        'transactionId': 'ee421c25-f928-4bf6-b884-3600b76b860d',
        'mcc': 3997,
        'amount': {
          'value': 100,
          'currencyCode': 'USD'
        }
      },
      {
        'transactionId': 'fdc4626c-f51e-4ba6-9728-c79ac1d9aec8',
        'mcc': 5962,
        'amount': {
          'value': 50,
          'currencyCode': 'EUR'
        }
      }
    ]);


  const oauth = require('mastercard-oauth1-signer');
  const authHeader = oauth.getAuthorizationHeader(uri, method, payload, consumerKey, signingKey);

  fetch(uri, {
    method: 'POST',
    body: payload,
    headers: {
      'Authorization': authHeader,
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  // FULL LIST OF MCCs for Mastercard
  // const merchantsURI = 'https://sandbox.api.mastercard.com/carbon/supported-merchant-categories'
  // const authHeaderAgain = oauth.getAuthorizationHeader(merchantsURI, 'GET', null, consumerKey, signingKey);

  // fetch(merchantsURI, {
  //   headers:{
  //   'Authorization': authHeaderAgain,
  //   },
  // })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log('Merchants:', data);
  //   })


  

  return next();

};


module.exports = carbonControllers;