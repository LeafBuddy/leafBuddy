const React = require('react');

const Transaction = (props) => {
  const { merchant, date, icon, amount, carbonAmount } = props;
  return (
    <div className='transactionComponent'>
      <div className='txnIcon'>{icon}</div>
      <div className='txnDate'>{date}</div>
      <div className='txnMerchant'>{merchant}</div>
      <div className='txnCarbon'>{carbonAmount}</div>
      <div className='txnAmount'>{amount}</div>
    </div>
  );
};
module.exports = Transaction;
