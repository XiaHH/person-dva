import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Persons from './routes/Persons';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/persons" exact component={Persons} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
