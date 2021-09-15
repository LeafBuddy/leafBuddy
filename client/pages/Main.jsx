const regeneratorRuntime = require('regenerator-runtime');
const React = require('react');
const { useState, useEffect } = require('react');
const NavBar = require('../Container/NavBar');
const DataContainer = require('../Container/DataContainer');

const Main = (props) => {
  return (
    <div id='Main' className='container'>
      <NavBar />
      <div className='mainContainer'>
        <DataContainer />
      </div>
    </div>
  );
};


module.exports = Main;