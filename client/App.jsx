const React = require('react');
const { BrowserRouter, Switch, Route } = require('react-router-dom');
import Login from './pages/Login';
import Main from './pages/Main';
import PlaidContainer from './Container/PlaidContainer.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/main' component={Main} />
        <Route path='/bank' component={PlaidContainer} />
      </Switch>
    </BrowserRouter>
  );
}
