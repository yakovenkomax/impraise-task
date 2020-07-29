import React from 'react';
import HomePage from 'components/HomePage/HomePage';
import OrganizationPage from 'components/OrganizationPage/OrganizationPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import s from './App.module.css';


const App = () => {
  return (
    <div className={s.root}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/:login">
            <OrganizationPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
