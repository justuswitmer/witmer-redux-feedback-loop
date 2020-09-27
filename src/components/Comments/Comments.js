import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

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
      </Paper>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  feedback: reduxStore.valueReducer
});

export default connect(mapStateToProps)(withRouter(Comments));