const React = require('react');
const TransactionAnalytics = require('./TransactionAnalytics');
const TransactionContainer = require('./TransactionContainer');

const DataContainer = () => {
  return (
    <div className='dataContainer'>
      <TransactionAnalytics />
      <TransactionContainer />
    </div>
  );
}

module.exports = DataContainer;
