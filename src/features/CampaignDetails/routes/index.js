import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CampaignDetailsContainer from '../containers/CampaignDetails.container';

// match = /campaigns/:campaignId
const CampaignDetailsRoutes = ({ match }) => (
  <Route path={`${match.path}`} component={CampaignDetailsContainer} />
);

export default CampaignDetailsRoutes;
