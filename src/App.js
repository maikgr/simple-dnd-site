import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import './App.css';
import { Menu, Container, Image } from 'semantic-ui-react';
import CampaignList from './components/campaign-list';
import CreateCampaign from './components/campaign-create';
import Campaign from './components/campaign';
import logo from './resource/dice1.png'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: 'campaigns'
    }
    this.onMenuClick = this.onMenuClick.bind(this);
  }

  onMenuClick(e, menu) {
    this.setState({
      activeMenu: menu.name
    })
  }
  
  render() {
    return (
      <Router>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item header>
              <Image size='mini' src={logo} style={{ marginRight: '1.5em' }}  />
              Discord Campaign Manager
            </Menu.Item>
            <Menu.Item as={NavLink} to='/index'>Home</Menu.Item>
            <Menu.Item as={NavLink} to='/campaigns'>Campaigns</Menu.Item>
          </Container>
        </Menu>
        <Switch>
          <Route exact path="/campaigns">
            <CampaignList />
          </Route>
          <Route exact path="/campaigns/create">
            <CreateCampaign />
          </Route>
          <Route path="/campaigns/view/:id" >
            <Campaign />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
