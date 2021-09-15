import {
  render,
  screen,
  cleanup,
  waitForElementToBeRemoved,
  waitFor,
} from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../client/App';
import Login from '../client/pages/Login';
import Main from '../client/pages/Main';
import PlaidContainer from '../client/Container/PlaidContainer.jsx';
import fetch from 'node-fetch';
import '@testing-library/jest-dom';

// test jest working
// it('Testing to see if Jest works', () => {
//   expect(1).toBe(1);
// });

describe('Home Page & buttons', () => {
    beforeEach(() =>
      render(
        <Router>
          {' '}
          <App />{' '}
        </Router>
      )
    );