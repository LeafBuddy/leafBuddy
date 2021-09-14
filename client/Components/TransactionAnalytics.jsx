const React = require('react');
const GaugeChart = require('./GaugeChart');
const BarChart = require('./BarChart');
const LineChart = require('./LineChart');

const TransactionAnalytics = (props) => {
  return (
    <div className='transactionAnalytics'>
      <div className='transactionAnalyticsHeader'>
        <h3>Transaction Analytics</h3>
      </div>
      <div className='charts'>
        <div className='leftChart'>
          <GaugeChart />
        </div>
        <div className='centerChart'>
          <BarChart />
        </div>
        <div className='rightChart'>
          <LineChart />
        </div>
      </div>
    </div>
  );
};
export default TransactionAnalytics;
