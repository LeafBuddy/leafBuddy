const React = require('react');
const { useState } = require('react');
import Transaction from '../Components/Transaction';
const faker = require('faker');

export default function TransactionContainer(props) {
  const [transactions, setTransactions] = useState([]);

  const transactionRenderer = () => {
    const transactionList = [];
    for (let i = 0; i < 30; i++) {
      const txnDate = `${faker.date.past()}`
        .split(' ')
        .slice(1, 3)
        .reverse()
        .join(' ');
      const el = {
        icon: `🛒`,
        date: txnDate,
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
}
