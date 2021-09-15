const React = require('react');
const { useState, useEffect } = require('react');
const Transaction = require('../Components/Transaction');
const faker = require('faker');

export default function TransactionContainer(props) {
  const [transactions] = useState(props.props[0]);
  let transactionList;
  useEffect(() => {
    if (transactions.length > 0) {
      transactionList = transactionRenderer();
    }
  }, []);
  const transactionRenderer = () => {
    const results = transactions.map((el, i) => {
      const txnData = {
        icon: `🛒`,
        date: el.date,
        merchant: el.merchantName,
        amount: `${el.amount}`,
        carbonAmount: `${faker.finance.amount()}kg`,
      };
      return <Transaction className='transaction' key={i} props={txnData} />;
    });
    return results;
  };

  return (
    <div>
      <div>
        {() => {
          if (transactions) {
            return transactionRenderer();
          }
        }}
      </div>
    </div>
  );
}

module.exports = TransactionContainer;
