const React = require('react');
const { useState, useEffect } = require('react');
const PlaidClient = require('../Components/PlaidClient.jsx');

const PlaidContainer = () => {
  const [linkToken, setLinkToken] = useState(null);

  const generateToken = async () => {
    const response = await fetch('/plaid', {
      method: 'GET',
    });
    const data = await response;
    setLinkToken(data);
  };
  useEffect(() => {
    generateToken();
  }, []);

  console.log(linkToken);

  if (!linkToken) {
    return <>Still loading...</>;
  }

  return (
    <div>
      <PlaidClient linkToken={linkToken} /> 
    </div>
  );
};

module.exports = PlaidContainer;




