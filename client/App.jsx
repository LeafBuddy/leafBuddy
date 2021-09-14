import React, {useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main'; 
import PlaidClient from './Components/PlaidClient.jsx';


export default function App() {

  const [linkToken, setLinkToken] = useState(null);

  //get link token from backend 
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
