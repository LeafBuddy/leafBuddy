/* eslint-disable max-len */
require('dotenv/config.js');

const carbonScore = {};

carbonScore.score = (req, res, next) => {
  const transactionList = res.locals.transactions;
  const carbonList = [];
  console.log(transactionList);

  transactionList.forEach((elem) => {
    const newObj = {};
    newObj.transactionDate = elem.transactionDate;
    newObj.date = elem.date;
    newObj.amount = elem.amount;
    newObj.category = elem.category[1];
    newObj.merchant = elem.merchantName ? elem.merchantName : elem.name;

    // plaid category list: https://gist.github.com/zianwar/8826f53434ec3586ac8e5c8ac9f6a613

    if (elem.category.includes('Taxi')) {
      // for taxis / Ubers
      // The average passenger vehicle emits about 404 grams (or .404kg)
      // of CO2 per mile (https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle)
      // cost per mile is ~$2 --> driver pays is abt 1-1.50 https://www1.nyc.gov/site/tlc/about/driver-pay-rates.page
      newObj.carbonAmount = (elem.amount / 2) * 0.404;
      carbonList.push(newObj);
    }

    if (elem.category.includes('Food and Drink')) {
      //co2 per restaurant meal = 8kg https://blog.gotenzo.com/the-carbon-neutral-restaurant-a-pipedream-or-an-inevitability
      // $20/meal
      newObj.carbonAmount = (elem.amount / 20) * 8;
      carbonList.push(newObj);
    }

    if (elem.category.includes('Air Travel')) {
      // https://www.eea.europa.eu/media/infographics/co2-emissions-from-passenger-transport/view
      // 285 g CO2 /passenger/km for a plane
      // https://www.transportation.gov/sites/dot.gov/files/2021-07/Domestic%20Airline%20Fares%20Consumer%20Report%202021_Q1.pdf
      // about 15 cents per mile = 24c / km
      newObj.carbonAmount = (elem.amount / 0.24) * 0.258;
      carbonList.push(newObj);
    }
  });
  res.locals.carbonlist = carbonList;
  return next();
};

module.exports = carbonScore;
