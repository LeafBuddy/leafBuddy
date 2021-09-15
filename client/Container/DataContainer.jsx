const React = require('react');
const axios = require('axios');
import 'core-js/stable';
import 'regenerator-runtime/runtime';
const { useEffect, useState } = require('react');
import TransactionAnalytics from '../Container/TransactionAnalytics';
import TransactionContainer from '../Container/TransactionContainer';

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
            <h1 clasName='loadingText'>Loading....</h1>
          </div>
        </div>
      )}
    </div>
  );
}
