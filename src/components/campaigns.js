import React from 'react'

function Header() {
  return (
    <div className="row header">
      <div className="col">
        <h2>My Campaigns</h2>
        <div className="text-muted">Harnesses your imagination. Explore a fantastic world of adventure,
        where heroes battle monsters, find treasures, and overcome epic quests!</div>
      </div>
    </div>
  );
}

function ActiveHeader() {
  return (
    <div className="row content">
      <div className="col">
        <h3>Active Campaigns</h3>
          <div className="text-muted">Your active campaigns are open to new players joining.</div>
      </div>
      <div className="col-2 fullbutton">
        <button type="button" className="btn btn-primary btn-block">New campaign</button>
      </div>
    </div>
  )
}

function InactiveHeader() {
  return (
    <div className="row content">
      <div className="col">
        <h3>Finished Campaigns</h3>
          <div className="text-muted">Your finished campaigns are closed to new players joining.</div>
      </div>
    </div>
  )
}

function ActiveCardActions() {
  return (
    <div className="row">
       <div className="col" isActive={true}>
        <button type="button" className="btn btn-outline-primary btn-sm">View</button>
      </div>
      <div className="col" isActive={true}>
        <button type="button" className="btn btn-outline-primary btn-sm">End</button>
      </div>
      <div className="col">
        <button type="button" className="btn btn-outline-danger btn-sm">Delete</button>
      </div>
    </div>
  )
}

function InactiveCardActions() {
  return (
    <div className="row">
      <div className="col" isActive={false}>
        <button type="button" className="btn btn-outline-primary btn-sm">Resume</button>
      </div>
      <div className="col">
        <button type="button" className="btn btn-outline-danger btn-sm">Delete</button>
      </div>
    </div>
  )
}

function CampaignCard (props) {
  let cardButtons;
  if (props.isActive) {
    cardButtons = ActiveCardActions();
  }
  else {
    cardButtons = InactiveCardActions();
  }

  const date = props.isActive ? 'Started ' : 'Finished ';
  
  return (
    <div className="row content">
      <div className="col-3 campaign">
        <div className="row">
          <div className="col align-middle">
            <h5>
              <div>Campaign Title</div>
              <small className="text-muted">{ date } 12/20/2019</small>
            </h5>
          </div>
        </div>
        
        <div className="row">
          <div className="col">
            <div>0 Players</div>
          </div>
        </div>
        
        <div className="row">
          <div className="col">
            <div>Role: Dungeon Master</div>
          </div>
        </div>
        
        { cardButtons }
      </div>
    </div>
  )
}

class Campaign extends React.Component {
  render() {
    return (
      <div className="container parent">
        <Header />
        <ActiveHeader />
        <CampaignCard isActive={ true } />
        <InactiveHeader />
        <CampaignCard isActive={ false } />
      </div>
    )
  }
}

export default Campaign