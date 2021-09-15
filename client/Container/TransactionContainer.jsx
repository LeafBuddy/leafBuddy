const React = require('react');
const { useState, useEffect } = require('react');
const Transaction = require('../Components/Transaction');
const faker = require('faker');

export default function TransactionContainer(props) {
  const [transactions] = useState(props.props[0]);
  function emojiMapper(category) {
    switch (category) {
      case 'Taxi':
        return `🚕`;
      case 'Restaurants':
        return `🍕`;
      default:
        return `🛒`;
    }
  }

  return (
    <div>
      {transactions.map((el, i) => {
        const txnData = {
          icon: emojiMapper(el.category),
          date: el.transactionDate,
          merchant: el.merchant ? el.merchant : el.name,
          amount: `$${el.amount}`,
          carbonAmount: `${el.carbonAmount.toFixed(1)}kg`,
          carbonAmountNum: parseFloat(el.carbonAmount.toFixed(1)),
        };
        return <Transaction className='transaction' key={i} props={txnData} />;
      })}
      <button>Load the next transactions</button>
    </div>
  );
}

module.exports = TransactionContainer;
