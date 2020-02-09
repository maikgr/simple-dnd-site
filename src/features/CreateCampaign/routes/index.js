import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateCampaignContainer from '../containers/CreateCampaign.container';

const Routes = ({ match }) => (
  <Route path={`${match.path}`} component={CreateCampaignContainer} />
);

export default Routes;
