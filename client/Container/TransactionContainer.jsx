const React = require('react');
const { useState, useEffect } = require('react');
const Transaction = require('../Components/Transaction');
const faker = require('faker');

export default function TransactionContainer(props) {
  const [transactions] = useState(props.props[0]);
  useEffect(() => {
    console.log(
      transactions.map((el) => {
        el;
      })
    );
  }, []);

  function emojiMapper(category) {
    if (
      category[0] === 'Shops' ||
      category[0] === 'Service' ||
      category[0] === 'Travel'
    ) {
      category = category[1];
    } else {
      category = category[0];
    }
    switch (category) {
      case 'Pharmacies':
        return `💊`;
      case 'Taxi':
        return `🚕`;
      case 'Food and Drink':
        return `🍕`;
      case 'Transfer':
        return `💸`;
      case 'Insurance':
        return `💰`;
      case 'Automotive':
        return `🚗`;
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
          merchant: el.merchantName ? el.merchantName : el.name,
          amount: `$${el.amount}`,
          carbonAmount: `${faker.finance.amount()}kg`,
        };
        return <Transaction className='transaction' key={i} props={txnData} />;
      })}
      <button>Load the next transactions</button>
    </div>
  );
}

module.exports = TransactionContainer;
