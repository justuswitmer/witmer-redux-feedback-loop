import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Comments extends Component {

  state = {
    ...this.props.feedback
  }

  handleSubmit = () => {
    this.props.history.push('/review');
    this.props.dispatch({
      type: 'SET_VALUE',
      payload: this.state
    })
  }

  goBack = () => {
    console.log('in goBack');
    this.props.history.push('/support');
  }


  handleSelect = (event) => {
    this.setState({
      comments: event.target.value
    });
    console.log('this is the new value', event.target.value);
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

export default connect(mapStateToProps)(withRouter(Comments));