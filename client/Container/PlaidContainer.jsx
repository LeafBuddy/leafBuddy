const React = require('react');
const { useState, useEffect } = require('react');
import PlaidClient from '../Components/PlaidClient.jsx';

const PlaidContainer = () => {
  const [linkToken, setLinkToken] = useState(null);

  useEffect(() => {
    fetch('/plaid/linkToken', {
      method: 'GET',
      'Content-Type': 'application/json',
    })
      .then((response) => response.json())
      .then((data) => setLinkToken(data));
  }, []);

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