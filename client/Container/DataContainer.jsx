const React = require('react');
const regeneratorRuntime = require('regenerator-runtime');
const { useState, useEffect } = require('react');
const TransactionAnalytics = require('../Container/TransactionAnalytics');
const TransactionContainer = require('../Container/TransactionContainer');
const axios = require('axios');

import { WindMillLoading } from 'react-loadingg';
export default function DataContainer() {
  const [transactions, setTransactions] = useState(null);
  const [connectedToPlaid, setPlaidConnection] = useState(null);

  useEffect(() => {
    if (!transactions) {
      getTransactionData();
    }
  }, [transactions]);

  async function getTransactionData() {
    setPlaidConnection('loading');
    const data = await axios.get('/plaid/transactions').then((res) => {
      return [res.data];
    });
    await setTransactions(data);
    await setPlaidConnection('loaded');
    return;
  }

  return (
    <div className='mainContainer'>
      {(() => {
        switch (connectedToPlaid) {
          case 'loaded':
            return (
              <div className='mainContent'>
                <TransactionAnalytics props={transactions} />
                <TransactionContainer props={transactions} />
                );
              </div>
            );
          case 'loading':
            return <WindMillLoading color='white' speed='0.5' />;
          default:
            return (
              <div className='DataConnectionModule'>
                <b>❗ Please connect to your bank</b>
                <br></br>
                <h1 style={{ fontSize: '10rem' }}>🍃</h1>
              </div>
            );
        }
      })()}
    </div>
  );
}

module.exports = DataContainer;
