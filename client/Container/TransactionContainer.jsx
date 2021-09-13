import React from 'react';
import Transaction from '../Components/Transaction';

const TransactionContainer = (props) => {
  const transactions = () => {
    const result = [];
    for (let i = 0; i < 10; i++) {
      result.push(<Transaction />);
    }
    return result;
  };

  return (
    <div
      style={{
        backgroundColor: 'yellow',
        height: '100%',
        margin: '0 auto',
      }}>
      <h1>TransactionContainer</h1>
      <div>{transactions()}</div>
    </div>
  );
};
export default TransactionContainer;
