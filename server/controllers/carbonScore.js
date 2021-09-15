const path = require('path');
require('dotenv/config.js');
const fs = require('fs');
const { response } = require('express');
const { request } = require('http');
const refresh_token =  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTYzMjMxNjI4OSwianRpIjoiOGIwNjFiY2Q1NTE4NDNiMzk5YjdmZWMwMjU4YTJkM2UiLCJ1c2VyX2lkIjoxMX0.FnRyzRDwQM9zCl9pOL310KA926-3l60hDO6m4l35RKU';
const  = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjMyMzE2Mjg5LCJqdGkiOiIwY2FlZjczNGYwODM0MGNlOGU3OWQ4MzgyMDk0ZWY5MyIsInVzZXJfaWQiOjExfQ.wFT6hAcKt04Agspha4ORa5FHfZdx-sZB_QR_dIvZqAs';
const username = 'leafbuddy';
const password = 'y7kasUttazzx';
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const categoriesList = require('./categories.js');
const carbonScore = {};
const Fuse = require('fuse.js');
const axios = require('axios');


carbonScore.access = (req, res, next) => {

  const uri = 'https://api.carboninsights.co/token/refresh';
  const request = JSON.stringify({
    'refresh': refresh_token
  });

  //fetch an access token
  fetch(uri, {
    method: 'POST',
    body: request,
    headers: {
      'content-type': 'application/json'
    }}
  )
    .then (res => res.json())
    .then (data => {
      console.log(data);
      res.locals.carbon_ = data;
    });
  
  return next();
};

carbonScore.categories = (req, res, next) => {
  const transactionList = res.locals.transactions;
  
  
  const modifiedList = [];
    
  transactionList.forEach(elem => {
    const newObj = {};
    newObj.date = elem.date;
    newObj.amount = elem.amount;

    // get the second category from Plaid (seems more descriptive)
    const query = elem.category[1];
    // use Fuse to do fuzzy search comparing our categories to the API's categories
    const fuse = new Fuse(categoriesList);
    // get the first fuzzy search result
    const category = (fuse.search(query)[0]) === undefined ? {item: 'Misc Expenses'} : fuse.search(query)[0]; 
    newObj.category = category.item;

    newObj.description = elem.name;
    
    modifiedList.push(newObj);
  });

  res.locals.transactions_carbon = modifiedList;
  return next();
};

carbonScore.score = async (req, res, next) => {

  const transactionList = res.locals.transactions_carbon;
  const data = JSON.stringify({'transactions': transactionList});
  const config = {
    method: 'post',
    url: 'https://api.carboninsights.co/calculateCarbonScore',
    headers: { 
      'Authorization': `Token ${}`,
      'Content-Type': 'application/json'
    },
    data : data
  };

  try {
    const response = await axios(config);
    const carbonList = JSON.stringify(response.data);
    console.log(transactionList);
    console.log(carbonList);


    const completeList = [];
    res.locals.completelist = completeList;

    return next();
  } catch(err) {
    console.log(err);
    return next(err);
  }
};

module.exports = carbonScore;

