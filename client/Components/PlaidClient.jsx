import React from 'react';
const { useCallback } = require('react');
const {
  usePlaidLink,
  PlaidLinkOptions,
  PlaidLinkOnSuccess,
} = require('react-plaid-link');

export default function PlaidClient(props) {
  const onSuccess = useCallback((public_token, metadata) => {
    // send public_token to server
    const response = fetch('/plaid/publicToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ public_token }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  const config = {
    // eslint-disable-next-line react/prop-types
    token: props.linkToken,
    onSuccess,
  };

  // // open = Plaid window opens
  // // ready = ready is a passthrough for onLoad and will be true when Link is ready to be opened
  const { open, ready } = usePlaidLink(config);

  return (
    <div className='connectToBank'>
      <button
        className='btn-grad'
        id='connectToBankButton'
        onClick={() => open()}
        disabled={!ready}>
        🏦 <span className='bankButtonText'>Connect your Bank</span>
      </button>
    </div>
  );
}
