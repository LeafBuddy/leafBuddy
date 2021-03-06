const React = require('react');
const { BrowserRouter, Switch, Route } = require('react-router-dom');
const Login = require('./pages/Login');
const Main = require('./pages/Main');
const PlaidContainer = require('./Container/PlaidContainer.jsx');

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/main' component={Main} />
        <Route path='/bank' component={PlaidContainer} />
      </Switch>
    </BrowserRouter>
  );
};

module.exports = App;
