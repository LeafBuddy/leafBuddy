const React = require('react');
const YourCarbonFootprint = require('../Components/YourCarbonFootprint');
const BarChart = require('../Components/BarChart');

const TransactionAnalytics = () => {
  return (
    <div className='transactionAnalytics'>
      <div className='transactionAnalyticsHeader'>
        <h3>Hey Konstantin 👋</h3>
      </div>
      <div className='charts'>
        <div className='leftChart'>
          <BarChart />
        </div>
        <YourCarbonFootprint />
      </div>
    </div>
  );
}

module.exports = TransactionAnalytics;
