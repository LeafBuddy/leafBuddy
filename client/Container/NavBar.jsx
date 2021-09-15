const React = require('react');
const PlaidContainer = require('../Container/PlaidContainer');

const NavBar = () => {
  return (
    <div className='navBar'>
      <div className='logo'>
        <h1>LeafBuddy</h1>
      </div>
      <div className='connectToBank'>
        <PlaidContainer />
      </div>
    </div>
  );
};

module.exports = NavBar;
