import React from 'react';
import ReactQuill from 'react-quill';
import {
  Link
} from "react-router-dom";
import './campaign-create.css';

class CreateCampaign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      text: value
    });
  }

  render() {
    return (
      <div className="container parent">
        <div className="row content">
          <div class="col-3">
            <Link to="/campaigns" className="btn btn-primary">My Campaigns</Link>
          </div>
        </div>

        <div className="row header">
          <div className="col">
            <h2>Create a New Campaign</h2>
          </div>
        </div>

        <div className="row content">
          <div class="col-3">
            <label>Campaign Name</label>
            <input type="text" className="form-control" placeholder="Enter a name"/>
          </div>
        </div>

        <div className="row content">
          <div class="col">
            <label>Description</label>
            <ReactQuill
              value={ this.state.text }
              onChange={ this.handleChange } 
              placeholder={ 'Tell a story' }
              />
          </div>
        </div>

        <div className="row content">
          <div class="col-3">
            <button type="button" className="btn btn-success btn-block">Create</button>
          </div>
        </div>

      </div>
    )
  }
}

export default CreateCampaign;