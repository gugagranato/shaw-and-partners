import React from 'react';

import { Switch, Route } from 'react-router-dom';

import User from '../pages/User';
import UserDetail from '../pages/UserDetail';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={User} />
    <Route path="/detail/:userDetail+" component={UserDetail} />
    <Route path="/repository/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
