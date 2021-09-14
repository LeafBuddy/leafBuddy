const React = require('react');
const { useCallback, useState, useEffect } = require('react');
const {
  usePlaidLink,
  PlaidLinkOptions,
  PlaidLinkOnSuccess,
} = require('react-plaid-link');


const PlaidClient = (props) => {
  console.log(props);
  const onSuccess = useCallback((public_token, metadata) => {
    // send public_token to server
    const response = fetch('/plaid/public', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ public_token }),
    });
    // Handle response ...
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
    <button onClick={() => open()} disabled={!ready}>
      Link account
    </button>
  );
};

module.exports = PlaidClient; 