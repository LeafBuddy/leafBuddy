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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [failed, setFailed] = useState(false);
  const [registered, setRegistered] = useState(false);
  useEffect(() => {
    console.log(username, password);
    console.log('isLoggedIn state: ', isLoggedIn);
  });

  async function onLoginClick() {
    setIsLoggedIn(true);
    // await axios
    //   .post('/login', {
    //     username,
    //     password,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     if (res.data === 'success') {
    //       setIsLoggedIn(true); //redirect us
    //     } else {
    //       setIsLoggedIn(false);
    //       setFailed(true);
    //     }
    //   });
  }
  async function onRegisterClick() {
    await axios
      .post('/login/signup', {
        username,
        password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  async function onGoogleClick() {

  }

  if (!isLoggedIn) {
    return (
      <div>
        <h1 className='title'>Leaf Buddy</h1>
        <div id='logIn' className='textbox'>
          <input
            type='text'
            id='username'
            placeholder={'username'}
            onChange={(e) => setUsername(e.target.value)}
            className='textbox'></input>
          <div></div>
          <input
            type='text'
            id='password'
            placeholder={'password'}
            onChange={(e) => setPassword(e.target.value)}
            className='textbox'></input>
        </div>
        <div className='login' id='buttons'>
          <button className='buttons' id='logInButton' onClick={onLoginClick}>
            Sign in
          </button>
          <div> </div>
          <button className='buttons' id='signup' onClick={onRegisterClick}>
            Create new account
          </button>
          <div> </div>
          <button className='buttons' id='signup' onClick={onGoogleClick}>
            Login with Google
          </button>
        </div>
      </div>
    );
  } else {
    return <Redirect to='/main' />;
  }
}

export default Login;
