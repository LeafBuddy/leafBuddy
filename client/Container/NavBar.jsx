const React = require('react');
const { render } = require('react-dom');

const NavBar = (props) => {
  return (
    <div className='navBar'>
      <div className='logo'>
        <h1>LeafBuddy</h1>
      </div>
      <div className='connectToBank'>
        <button className='btn-grad'>Connect your Bank</button>
      </div>
    </div>
  );
};
export default NavBar;
