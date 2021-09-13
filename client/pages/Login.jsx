const regeneratorRuntime = require('regenerator-runtime');
const axios = require('axios');

import React, { useState, useEffect } from 'react';
import { ReactDOM } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log('isLoggedIn state: ', isLoggedIn);
  });

  function onLoginClick() {
    setIsLoggedIn(true);
  }

  if (!isLoggedIn) {
    return (
      <div className='oAuthTab' id='buttons'>
        <button className='buttons' id='logInButton' onClick={onLoginClick}>
          Login with Google
        </button>
      </div>
    );
  } else {
    return <Redirect to='/main' />;
  }
}

export default Login;
