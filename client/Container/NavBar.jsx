const React = require('react');
const { render } = require('react-dom');

const NavBar = (props) => {
  return (
    <div className='navBar'>
      <div className='logo'>
        <h1>LeafBuddy</h1>
      </div>
      <div className='connectToBank'>
        <button className='btn-grad' id='connectToBankButton'>
          🏦 <span className='bankButtonText'>Connect your Bank</span>
        </button>
      </div>
    </div>
  );
};
module.exports = NavBar;
