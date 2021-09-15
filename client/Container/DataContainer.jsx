const React = require('react');
import TransactionAnalytics from '../Container/TransactionAnalytics';
import TransactionContainer from '../Container/TransactionContainer';

export default function DataContainer() {
  return (
    <div className='dataContainer'>
      <TransactionAnalytics />
      <TransactionContainer />
    </div>
  );
}
