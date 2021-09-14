import React, { useCallback, useState, useEffect } from 'react';
import {
  usePlaidLink,
  PlaidLinkOptions,
  PlaidLinkOnSuccess,
} from 'react-plaid-link';

const [linkToken, setLinkToken] = useState('');

//get link token from backend 
useEffect(async () => {
  const res = await fetch('/plaid');
  const link = res.json();
  console.log(link);
  // await setLinkToken(link);
  // console.log(linkToken);
});




//create PlaidLink window




// // open = Plaid window opens
// // ready = ready is a passthrough for onLoad and will be true when Link is ready to be opened

// const { open, ready, error } = usePlaidLink(config);