const React = require('react');
const {useState, useEffect } = require('react');
const { Router, Switch, Route, Link } = require('react-router-dom');
const Login = require('./pages/Login');
const Main = require('./pages/Main'); 
const PlaidClient = require('./Components/PlaidClient.jsx');


export default function App() {

  const [linkToken, setLinkToken] = useState(null);

  //get link token = require(backend 
  useEffect(async () => {
    const res = await fetch('/plaid/link', {headers: {'Content-Type': 'application/json'}});
    await setLinkToken(res);
  });


  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/main' component={Main} />
        <Route exact path='/plaid' component={PlaidClient} token={linkToken}/>
      </Switch>
    </Router>
  );
}
