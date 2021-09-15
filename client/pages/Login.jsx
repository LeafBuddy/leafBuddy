const axios = require('axios');
const React = require('react');
const { useState, useEffect } = require('react');
const { Redirect } = require('react-router-dom');

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


  if (!isLoggedIn) {
    return (
      <div className='loginWrapper'>
        <div className='loginModule'>
          <h1 className='loginLogo'>Leaf Buddy</h1>
          <div id='logIn'>
            <input
              type='text'
              id='username'
              placeholder={'username'}
              onChange={(e) => setUsername(e.target.value)}
              className='loginTextbox'></input>
            <div></div>
            <input
              type='text'
              id='password'
              placeholder={'password'}
              onChange={(e) => setPassword(e.target.value)}
              className='loginTextbox'></input>
          </div>
          <div className='loginButtons' id='buttons'>
            <button
              className='btn-grad'
              id='loginButton'
              onClick={onLoginClick}>
              Sign in
            </button>
            <div> </div>
            <button
              className='btn-grad'
              id='loginButton'
              onClick={onRegisterClick}>
              Create new account
            </button>
            <div> </div>
            <form>
              <button 
                formaction='/auth/google'
                className='btn-grad'
                id='loginButton'>
                Login with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return <Redirect to='/main' />;
  }
}

module.exports = Login;
