import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  Icon,
  Divider,
  Card,
  Modal,
  Button,
  Input
} from 'semantic-ui-react';
import './campaign-list.css';
import campaignService from '../../../services/campaign-service';

function NewCampaignModal(props) {
  const closeOnEscape = false;
  const closeOnDimmerClick = false;
  return (
    <Modal
      open={props.isOpen}
      size="tiny"
      closeOnEscape={closeOnEscape}
      closeOnDimmerClick={closeOnDimmerClick}
    >
      <Modal.Header>Create your campaign</Modal.Header>
      <Modal.Content>
        <Input placeholder="Title" onChange={props.onChange} fluid />
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="grey">
          <Icon name="remove" onClick={props.onClose} /> Cancel
        </Button>
        <Button color="green" inverted>
          <Icon name="checkmark" /> Create
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

class CampaignList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewCampaign: false,
      newCampaignName: '',
      campaigns: campaignService.getCampaigns()
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({
      showNewCampaign: true
    });
  }

  hideModal() {
    this.setState({
      showNewCampaign: false,
      newCampaignName: ''
    });
  }

  onValueChange(e) {
    this.setState({
      newCampaignName: e.target.value
    });
  }

  render() {
    return (
      <>
        <Header>
          <Icon name="book" />
          <Header.Content>My Campaigns</Header.Content>
          <Divider />
        </Header>
        <Card.Group itemsPerRow={4}>
          {this.state.campaigns.map((camp, index) => {
            let link = '/campaigns/view/' + camp.id;
            return (
              <Card as={Link} to={link} key={index}>
                <Card.Content>
                  <Card.Header>{camp.title}</Card.Header>
                  <Card.Meta>Role: {camp.role}</Card.Meta>
                  <Card.Description>{camp.description}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="user" />
                  {camp.players || 0} Players
                </Card.Content>
              </Card>
            );
          })}
          <Card centered onClick={this.showModal}>
            <Card.Content className="center-content">
              <Icon color="grey" name="add" className="card-icon" />
            </Card.Content>
          </Card>
        </Card.Group>
        <NewCampaignModal
          isOpen={this.state.showNewCampaign}
          onChange={this.onValueChange}
          onClose={this.hideModal}
        />
      </>
    );
  }
}

export default CampaignList;
