import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import {
  Link,
  useParams
} from "react-router-dom";

function Header() {
  let { id } = useParams();
  return (
    <div className="row header">
      <div className="col">
        <h2>{ id }</h2>
      </div>
    </div>
  )
}

class Campaign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ''
    }

    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }
  

  handleDescriptionChange(value) {
    this.setState({text: value});
  }

  render() {
    return (
      <div className="container parent">
        <div className="row content">
          <div className="col-3">
            <Link to="/campaigns" className="btn npm-primary">My Campaigns</Link>
          </div>
        </div>
        <Header />
        <div className="row">
          <div className="col">
            
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ReactQuill value={this.state.description} onChange={this.handleDescriptionChange} />
          </div>
          <div className="col-3">
            <div className="row">
              <div className="col">
                <button type="button" class="btn btn-primary btn-block">NPC List</button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button type="button" class="btn btn-primary btn-block">Enemy List</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Campaign;
