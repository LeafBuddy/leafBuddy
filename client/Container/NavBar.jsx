import React from 'react';
import { render } from 'react-dom';

const NavBar = (props) => {
  return (
    <div
      style={{ backgroundColor: 'orange', height: '100px', margin: '0 auto' }}>
      <h1>leafBuddy</h1>
      <button>Connect your Bank</button>
    </div>
  );
};
export default NavBar;
