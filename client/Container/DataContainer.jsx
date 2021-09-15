const React = require('react');
const regeneratorRuntime = require('regenerator-runtime');
const { useState, useEffect } = require('react');
const TransactionAnalytics = require('../Container/TransactionAnalytics');
const TransactionContainer = require('../Container/TransactionContainer');

import { WindMillLoading } from 'react-loadingg';
export default function DataContainer() {
  const [transactions, setTransactions] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getTransactionData();
  }, [transactions]);

  async function getTransactionData() {
    try {
      const data = await axios.get('/plaid/transactions').then((res) => {
        return [res.data];
      });
      setTransactions(data);
      while (transactions !== null && transactions.length !== 0) {
        setLoading(true);
        return;
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='dataContainer'>
      {loading ? (
        <div>
          <TransactionAnalytics props={transactions} />
          <TransactionContainer props={transactions} />
        </div>
      ) : (
        <div>
          <WindMillLoading color='white' speed='0.5' />
          <div>
            <h1 className='loadingText'>Loading....</h1>
          </div>
        </div>
      )}
    </div>
  );
}

module.exports = DataContainer;
