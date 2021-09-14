import React from 'react';
import TransactionAnalytics from '../Container/TransactionAnalytics';
import TransactionContainer from '../Container/TransactionContainer';

const DataContainer = (props) => {
  return (
    <div className='dataContainer'>
      <TransactionAnalytics />
      <TransactionContainer />
    </div>
  );
};
export default DataContainer;
