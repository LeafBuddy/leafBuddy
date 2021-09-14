import React, {useState, useEffect } from 'react';
import PlaidClient from '../Components/PlaidClient.jsx';


const PlaidContainer = () => {

  const [linkToken, setLinkToken] = useState(null);

  const generateToken = async () => {
    const response = await fetch('/api/plaid/link', {
      method: 'GET',
    });
    const data = await response;
    setLinkToken(data);
  };
  useEffect(() => {
    generateToken();
  }, []);


  return (
    linkToken != null 
    ? 
    <div>
      <PlaidClient linkToken={linkToken} /> 
    </div>
    : 
    <>
    </>
  );
};

export default PlaidContainer;




