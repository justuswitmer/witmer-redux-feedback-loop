import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Button from '@material-ui/core/Button';

class Support extends Component {

  state = {
    ...this.props.feedback
  }


  handleSubmit = () => {
    if (this.state.support === undefined) {
      alert('please select a value');
    }
    else {
      this.props.history.push('/comments');
      this.props.dispatch({
        type: 'SET_VALUE',
        payload: this.state
      });
    } // end else
  }

  goBack = () => {
    console.log('in goBack');
    this.props.history.push('/understanding');
  }

  handleSelect = (value) => {
    this.setState({
      support: value
    });
    console.log('this is the new value', value);
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
        <Button
          id="formatBtn"
          variant="contained"
          color="primary"
          onClick={this.goBack}
        >Back
        </Button>
        <Button
          id="formatBtn"
          variant="contained"
          color="primary"
          onClick={this.handleSubmit}
        >Next
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  feedback: reduxStore.valueReducer
});

export default connect(mapStateToProps)(withRouter(Support));