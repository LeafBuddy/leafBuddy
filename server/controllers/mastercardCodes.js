/* 
Get Merchant Category Code(MCC) for the Merchants
Details at: https://developer.mastercard.com/merchant-identifier/documentation/sdk-reference/v2-sdk-reference/
*/ 

const path = require('path');
require('dotenv/config.js');
const fs = require('fs');
const merchantIdentifier = require('mastercard-merchant-identifier');
const MasterCardAPI = merchantIdentifier.MasterCardAPI;
 

const mccControllers = {};

mccControllers.getCode = (req, res, next) => {
  const consumerKey = process.env.CONSUMER_KEY;  
  const keyStorePath = path.join(__dirname, '../../leafBuddy-dev-sandbox.p12');
  const keyAlias = process.env.KEY_ALIAS; 
  const keyPassword = process.env.KEY_PASSWORD;

  // You only need to do initialize MasterCardAPI once
  
  const authentication = new MasterCardAPI.OAuth(consumerKey, keyStorePath, keyAlias, keyPassword);
  MasterCardAPI.init({
    sandbox: true,
    debug: true,
    authentication: authentication
  });
  
  
  const requestData = {
    'merchant_id': 'Unitedhealthone',
    'type': 'ExactMatch'
  };
  merchantIdentifier.MerchantIds.query(requestData
    , function (error, data) {
      if (error) {
        err('HttpStatus: ' + error.getHttpStatus());
        err('Message: ' + error.getMessage());
        err('ReasonCode: ' + error.getReasonCode());
        err('Source: ' + error.getSource()); 
      }
      else {
        out(data.returnedMerchants[0].merchantCategory); 
        out(data.returnedMerchants[0].descriptorText); 
      }
    });
  
  
  function out(value) {
    console.log('out ', value);
  }
  
  function outObj(item, key) {
    console.log('outObj ', item[key]);
  }
  
  function err(value) {
    console.error(value);
  }
  
  return next();
};

module.exports = mccControllers; 