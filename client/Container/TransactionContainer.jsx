import React, { useState } from 'react';
import Transaction from '../Components/Transaction';

const TransactionContainer = (props) => {
  const [transactions, setTransactions] = useState([]);

  const transactionRenderer = () => {
    const transactionList = [];
    for (let i = 0; i < 10; i++) {
      // TODO: Update with map statement to pass props down to transaction components
      transactionList.push(<Transaction className='transaction' key={i} />);
    }
    return transactionList;
  };

  return (
    <div
      style={{
        backgroundColor: 'yellow',
        height: '100%',
        margin: '0 auto',
      }}>
      <h1>TransactionContainer</h1>
      <div>{transactionRenderer()}</div>
    </div>
  );
};

export default TransactionContainer;
