const React = require('react');
const { useState, useEffect } = require('react');
const PlaidClient = require('../Components/PlaidClient.jsx');

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
    return (
      <div className='connectToBank'>
        <button className='btn-grad' id='connectToBankButton'>
          🏦 <span className='bankButtonText'>Connect your Bank</span>
        </button>
      </div>
    );
  }

  return (
    <div>
      <PlaidClient linkToken={linkToken} />
    </div>
  );
};

module.exports = PlaidContainer;
