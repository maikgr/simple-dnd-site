import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import './App.css';
import Campaign from './components/mycampaigns';
import CreateCampaign from './components/createcampaigns'

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/campaigns" className="nav-link">Campaign</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/campaigns">
          <Campaign />
        </Route>
        <Route exact path="/campaigns/create">
          <CreateCampaign />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
