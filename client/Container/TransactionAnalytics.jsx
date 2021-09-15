const React = require('react');
const { useEffect, useState } = require('react');
const YourCarbonFootprint = require('../Components/YourCarbonFootprint');
const BarChart = require('../Components/BarChart');

const TransactionAnalytics = (props) => {
  const [transactions] = useState(props.props[0]);
  const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  let carbonFootPrint7d = 0;
  useEffect(() => {
    carbonFootPrint7d = transactions.reduce((acc, curr) => {
      return Date.parse(curr.transactionDate) > weekAgo
        ? (acc += curr.carbonAmount)
        : (acc += 0);
    }, carbonFootPrint7d);
  });

  return (
    <div className='transactionAnalytics'>
      <div className='transactionAnalyticsHeader'>
        <h3>Hey Konstantin 👋</h3>
      </div>
      <div className='charts'>
        <div className='leftChart'>
          <BarChart />
        </div>
        <YourCarbonFootprint props={{ carbonFootPrint7d }} />
      </div>
    </div>
  );
};

module.exports = TransactionAnalytics;
