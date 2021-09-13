import React from 'react';
import TransactionAnalytics from '../Components/TransactionAnalytics';
import TransactionContainer from '../Container/TransactionContainer';

const DataContainer = (props) => {
  return (
    <div
      style={{
        backgroundColor: 'yellow',
        height: '100%',
        margin: '0 auto',
      }}>
      <h1>DataContainer</h1>
      <TransactionAnalytics />
      <TransactionContainer />
    </div>
  );
};
export default DataContainer;
