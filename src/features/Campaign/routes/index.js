import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  CampaignDetails,
  PlayerList,
  NPCList,
  CampaignList
} from '../../../features';

const Routes = ({ match }) => (
  <Switch>
    <Route path={`${match.path}/:campaignId/players`} component={PlayerList} />
    <Route path={`${match.path}/:campaignId/npcs`} component={NPCList} />
    <Route path={`${match.path}/:campaignId`} component={CampaignDetails} />
    <Route path={`${match.path}`} component={CampaignList} />
  </Switch>
);

export default Routes;
