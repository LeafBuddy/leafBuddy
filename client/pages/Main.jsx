const regeneratorRuntime = require('regenerator-runtime');
import React from 'react';
import NavBar from '../Container/NavBar';
import DataContainer from '../Container/DataContainer';

const Main = (props) => {
  return (
    <div id='Main' className='container'>
      <NavBar />
      <DataContainer />
    </div>
  );
};
export default Main;
