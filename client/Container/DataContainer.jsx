const React = require('react');
const TransactionAnalytics = require('../Container/TransactionAnalytics');
const TransactionContainer = require('../Container/TransactionContainer');

const DataContainer = (props) => {
  return (
    <div className='dataContainer'>
      <TransactionAnalytics />
      <TransactionContainer />
    </div>
  );
}

module.exports = DataContainer;
