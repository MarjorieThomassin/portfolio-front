import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home.jsx';

const route = (path, Component) => <Route exact path={path} component={Component} />;

function Routes() {
  return (
    <Router>
      <Switch>
        {route('/', Home)}
      </Switch>
    </Router>
  );
}

export default Routes;
