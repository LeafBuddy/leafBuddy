const React = require('react');

const Transaction = (props) => {
  // eslint-disable-next-line react/prop-types
  const { merchant, icon, amount, carbonAmount } = props;
  return (
    <div className='transactionComponent'>
      <div className='txnIcon'>{icon}</div>
      <div className='txnMerchant'>{merchant}</div>
      <div className='txnCarbon'>{carbonAmount}</div>
      <div className='txnAmount'>{amount}</div>
    </div>
  );
};
module.exports = Transaction;
