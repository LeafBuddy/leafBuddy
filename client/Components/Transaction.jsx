import React from 'react';

const Transaction = (props) => {
  const { merchant, icon, amount, carbonAmount } = props.props;
  return (
    <div className='transactionComponent'>
      <div className='txnIcon'>{icon}</div>
      <div className='txnMerchant'>{merchant}</div>
      <div className='txnCarbon'>{carbonAmount}</div>
      <div className='txnAmount'>{amount}</div>
    </div>
  );
};
export default Transaction;
