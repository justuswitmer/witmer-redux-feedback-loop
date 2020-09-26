import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

class Comments extends Component {

  state = {
    comments: ''
  }

  handleSubmit = () => {
    this.props.history.push('/');
    let newValue = {
      ...this.state,
      comments: this.state.comments
    }
    this.props.dispatch({
      type: 'SET_VALUE',
      payload: newValue
    })
    console.log('this is the new value', newValue);
  }

  handleSelect = (event) => {
    console.log('in handleSelect', event);
    let newValue = {
      ...this.state,
      comments: event.target.value,
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
            onChange={this.handleSelect}
          />
        </div>
        <button type="submit" onClick={this.handleSubmit}>Next</button>
      </div>
    );
  }
}

export default connect()(withRouter(Comments));