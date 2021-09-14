import React, { useCallback, useState, FunctionComponent } from 'react';
import {
  usePlaidLink,
  PlaidLinkOptions,
  PlaidLinkOnSuccess,
} from 'react-plaid-link';



// open = Plaid window opens
// ready = 
const { open, ready, error } = usePlaidLink(config);