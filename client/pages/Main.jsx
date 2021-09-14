const regeneratorRuntime = require('regenerator-runtime');
const React = require('react');
const { useState, useEffect } = require('react');
import NavBar from '../Container/NavBar';
import DataContainer from '../Container/DataContainer';

export default function Main(props) {
  return (
    <div id='Main' className='container'>
      <NavBar />
      <div className='mainContainer'>
        <DataContainer />
      </div>
    </div>
  );
}
