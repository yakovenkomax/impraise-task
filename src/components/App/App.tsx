import React from 'react';
import HomePage from 'components/HomePage/HomePage';
import OrganizationPage from 'components/OrganizationPage/OrganizationPage';
import LoadingPlaceholder from 'components/LoadingPlaceholder/LoadingPlaceholder';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import s from './App.module.css';

const App = () => {
  return (
    <div className={s.root}>
      <div className={s.content}>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/load">
              <LoadingPlaceholder />
            </Route>
            <Route path="/:login">
              <OrganizationPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
