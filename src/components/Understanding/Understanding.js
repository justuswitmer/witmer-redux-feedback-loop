import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

class Understanding extends Component {

  state = {
    ...this.props.feedback
  }

  handleSubmit = () => {
    this.props.history.push('/support');
    this.props.dispatch({
      type: 'SET_VALUE',
      payload: this.state
    })
  }

  handleSelect = (value) => {
    this.setState({
      understanding: value
    });
    console.log('this is the new value', value);
  }

  render() {
    return (
      <div>
        <h1>How well are you understanding the content?</h1>
        <div className='selectField'>
          <DropdownButton
            alignRight
            title="Understanding?"
            id="dropdown-menu-align-right"
            onSelect={this.handleSelect}
          >
            <Dropdown.Item eventKey="1">1</Dropdown.Item>
            <Dropdown.Item eventKey="2">2</Dropdown.Item>
            <Dropdown.Item eventKey="3">3</Dropdown.Item>
            <Dropdown.Item eventKey="4">4</Dropdown.Item>
            <Dropdown.Item eventKey="5">5</Dropdown.Item>
          </DropdownButton>
          <p>You Selected: {this.state.understanding}</p>
        </div>
        <button type="submit" onClick={this.handleSubmit}>Next</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  feedback: reduxStore.valueReducer
});

export default connect(mapStateToProps)(withRouter(Understanding));