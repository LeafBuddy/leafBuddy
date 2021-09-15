const React = require('react');
const { useEffect, useState } = require('react');
const YourCarbonFootprint = require('../Components/YourCarbonFootprint');
const BarChart = require('../Components/BarChart');

const TransactionAnalytics = (props) => {
  const [transactions] = useState(props.props[0]);
  let carbonFootPrint7d = 0;
  useEffect(() => {
    return (carbonFootPrint7d = transactions.reduce((acc, curr) => {
      return (acc += curr.carbonAmount);
    }, 0));
  });

  return (
    <div className='transactionAnalytics'>
      <div className='transactionAnalyticsHeader'>
        <h3>Hey Konstantin 👋, go save a seal</h3>
      </div>
      <div className='charts'>
        <div className='leftChart'>
          <BarChart props={transactions} />
        </div>
        <YourCarbonFootprint props={transactions} />
      </div>
    </div>
  );
};

module.exports = TransactionAnalytics;
