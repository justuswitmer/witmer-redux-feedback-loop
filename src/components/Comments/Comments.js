import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

class Comments extends Component {

  state = {
    comments: ''
  }

  next = () => {
    this.props.history.push('/');
  }

  handleSelect = (value) => {
    console.log('in handleSelect', value);
    let newValue = {
      ...this.state,
      comments: value,
    };
    this.setState(newValue);
    console.log('this is the new value', newValue);
  }

  render() {
    return (
      <div>
        <h1>Any comments you want to leave?</h1>
        <div className='inputField'>
          <h4>Comments?</h4>
          <input
            type='text'
          />
        </div>
        <button type="submit" onClick={this.next}>Next</button>
      </div>
    );
  }
}

export default connect()(withRouter(Comments));