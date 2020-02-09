import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NPCListContainer from '../containers/NPCList.container';

const Routes = ({ match }) => (
  <Switch>
    <Route path={`${match.path}/:npcId`} component={NPCListContainer} />
    <Route path={`${match.path}`} component={NPCListContainer} />
  </Switch>
);

export default Routes;
