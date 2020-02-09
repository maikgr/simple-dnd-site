import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PlayerListContainer from '../containers/PlayerList.container';

const Routes = ({ match }) => (
  <Switch>
    <Route path={`${match.path}/:playerId`} component={PlayerListContainer} />
    <Route path={`${match.path}`} component={PlayerListContainer} />
  </Switch>
);

export default Routes;
