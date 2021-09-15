
//create signing key --> info based on mastercard-oauth1-signer npm 
const forge = require('node-forge');
const fs = require('fs');
const p12Content = fs.readFileSync('<insert PKCS#12 key file path>', 'binary');
const p12Asn1 = forge.asn1.fromDer(p12Content, false);
const p12 = forge.pkcs12.pkcs12FromAsn1(p12Asn1, false, '<insert key password>');
const keyObj = p12.getBags({
  friendlyName: '<insert key alias>',
  bagType: forge.pki.oids.pkcs8ShroudedKeyBag
}).friendlyName[0];
const signingKey = forge.pki.privateKeyToPem(keyObj.key);


const consumerKey = process.env.CONSUMER_KEY;
const uri = 'https://sandbox.api.mastercard.com/service';
const method = 'POST';
const payload = 'Hello world!';

const oauth = require('mastercard-oauth1-signer');
const authHeader = oauth.getAuthorizationHeader(uri, method, payload, consumerKey, signingKey);