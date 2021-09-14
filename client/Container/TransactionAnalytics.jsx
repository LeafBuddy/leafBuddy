const React = require('react');
import YourCarbonFootprint from '../Components/YourCarbonFootprint';
import BarChart from '../Components/BarChart';

export default function TransactionAnalytics(props) {
  return (
    <div className='transactionAnalytics'>
      <div className='transactionAnalyticsHeader'>
        <h3>Transaction Analytics</h3>
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
