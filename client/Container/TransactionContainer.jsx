const React = require('react');
const { useState } = require('react');
const Transaction = require('../Components/Transaction');
const faker = require('faker');

const TransactionContainer = (props) => {
  const [transactions, setTransactions] = useState([]);

  const transactionRenderer = () => {
    const transactionList = [];
    for (let i = 0; i < 10; i++) {
      const el = {
        icon: `🛒`,
        merchant: faker.company.companyName(),
        amount: `$ ${faker.finance.amount()}`,
        carbonAmount: faker.finance.amount(),
      };
      // TODO: Update with map statement to pass props down to transaction components
      transactionList.push(
        <Transaction className='transaction' key={i} props={el} />
      );
    }
    return transactionList;
  };

  return (
    <div>
      <div>{transactionRenderer()}</div>
    </div>
  );
};

export default TransactionContainer;
