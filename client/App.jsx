import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import Main from './pages/Main';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/main' component={Main} />
      </Switch>
    </Router>
  );
}
