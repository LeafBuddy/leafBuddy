import React from 'react';
import TransactionAnalytics from '../Components/TransactionAnalytics';
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
