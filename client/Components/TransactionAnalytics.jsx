import React from 'react';
import GaugeChart from './GaugeChart';
import BarChart from './BarChart';
import LineChart from './LineChart';

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
