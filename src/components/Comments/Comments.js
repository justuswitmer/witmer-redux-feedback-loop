import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Paper, TextField } from '@material-ui/core';

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
      <Paper
        id="paper"
        elevation={3}
      >
        <h1>Any comments you want to leave?</h1>
        <div className="commentsDiv">
          <div className="commentsText">
            <TextField
              multiline
              rowsMax={4}
              id="outlined-basic"
              label="Comments?"
              variant="outlined"
              onChange={this.handleSelect}
            />
          </div>
          <div className="commentsButtons">
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
        </div>
      </Paper>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  feedback: reduxStore.valueReducer
});

export default connect(mapStateToProps)(withRouter(Comments));