import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import { Menu, Container, Image } from 'semantic-ui-react';
import { CreateCampaign, Campaign, NPCList } from './features';
import logo from './resources/dice1.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: 'campaigns'
    };
    this.onMenuClick = this.onMenuClick.bind(this);
  }

  onMenuClick(e, menu) {
    this.setState({
      activeMenu: menu.name
    });
  }

  render() {
    return (
      <Router>
        <Menu fixed="top" inverted>
          <Container>
            <Menu.Item header>
              <Image size="mini" src={logo} css={{ marginRight: '1.5em' }} />
              Discord Campaign Manager
            </Menu.Item>
            <Menu.Item as={NavLink} to="/index">
              Home
            </Menu.Item>
            <Menu.Item as={NavLink} to="/campaigns">
              Campaigns
            </Menu.Item>
          </Container>
        </Menu>
        <Switch>
          <Container css={{ marginTop: '7em' }}>
            <Route path="/campaigns" component={Campaign} />
            <Route path="/npcs" component={NPCList} />
            <Route path="/createcampaign" component={CreateCampaign} />
          </Container>
        </Switch>
      </Router>
    );
  }
}

export default App;
