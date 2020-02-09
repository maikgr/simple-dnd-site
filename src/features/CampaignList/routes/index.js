import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CampaignListContainer from '../containers/CampaignList.container';

// match = /campaigns
const Routes = ({ match }) => (
  <Route path={`${match.path}`} component={CampaignListContainer} />
);

export default Routes;
