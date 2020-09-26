import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

class Support extends Component {

  state = {
    support: ''
  }

  handleSubmit = () => {
    this.props.history.push('/comments');
    let newValue = {
      ...this.state,
      support: this.state.support
    }
    this.props.dispatch({
      type: 'SET_VALUE',
      payload: newValue
    })
    console.log('this is the newValue', newValue);
  }

  handleSelect = (value) => {
    console.log('in handleSelect', value);
    let newValue = {
      ...this.state,
      support: value,
    };
    this.setState(newValue);
    console.log('this is the new value', newValue);
  }

  render() {
    return (
      <div>
        <h1>How well are you being supported?</h1>
        <div className='selectField'>
          <DropdownButton
            alignRight
            title="Support?"
            id="dropdown-menu-align-right"
            onSelect={this.handleSelect}
          >
            <Dropdown.Item eventKey="1">1</Dropdown.Item>
            <Dropdown.Item eventKey="2">2</Dropdown.Item>
            <Dropdown.Item eventKey="3">3</Dropdown.Item>
            <Dropdown.Item eventKey="4">4</Dropdown.Item>
            <Dropdown.Item eventKey="5">5</Dropdown.Item>
          </DropdownButton>
          <p>You Selected: {this.state.support}</p>
        </div>
        <button type="submit" onClick={this.handleSubmit}>Next</button>
      </div>
    );
  }
}

export default connect()(withRouter(Support));