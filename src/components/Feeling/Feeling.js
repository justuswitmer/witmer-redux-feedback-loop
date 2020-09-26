import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'



class Feeling extends Component {

  state = {
    ...this.props.feedback
  }

  handleSubmit = () => {
    this.props.history.push('/understanding');
    this.props.dispatch({
      type: 'SET_VALUE',
      payload: this.state
    });
  }

  handleSelect = (value) => {
    this.setState({
      feeling: value
    });
    console.log('this is the new value', value);
  }

  render() {
    return (
      <div>
        <h1>How are you feeling today?</h1>

        <div className='selectField'>
          <DropdownButton
            alignRight
            title="Feeling?"
            id="dropdown-menu-align-right"
            onSelect={this.handleSelect}
          >
            <Dropdown.Item eventKey="1">1</Dropdown.Item>
            <Dropdown.Item eventKey="2">2</Dropdown.Item>
            <Dropdown.Item eventKey="3">3</Dropdown.Item>
            <Dropdown.Item eventKey="4">4</Dropdown.Item>
            <Dropdown.Item eventKey="5">5</Dropdown.Item>
          </DropdownButton>
          <p>You Selected: {this.state.feeling}</p>
        </div>
        <button type="submit" onClick={this.handleSubmit}>Next</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  feedback: reduxStore.valueReducer
});

export default connect(mapStateToProps)(withRouter(Feeling));