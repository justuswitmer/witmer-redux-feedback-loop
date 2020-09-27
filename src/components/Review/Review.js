import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
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

class Review extends Component {

  postFeedback = (newFeedback) => {
    console.log('in postFeedback');
    axios
      ({
        method: 'POST',
        url: `/feedback`,
        data: newFeedback
      }).then(response => {
        console.log('posting to feedback', response);
      }).catch(err => {
        console.log('error posting to database', err);
      });
    this.props.history.push('/thanks');
  };

  goBack = () => {
    console.log('in goBack');
    this.props.history.push('/comments');
  }


  render() {
    return (
      <Paper
        id="paper"
        elevation={3}
      >
        <h1>Review Your Feedback</h1>
        <p>Feelings: {this.props.feedback.feeling}</p>
        <p>Understanding: {this.props.feedback.understanding} </p>
        <p>Support: {this.props.feedback.support} </p>
        <p>Comments: {this.props.feedback.comments} </p>
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
          onClick={() => this.postFeedback(this.props.feedback)}
        >Submit Feedback
        </Button>
      </Paper>
    )
  }
}

const mapStateToProps = (reduxStore) => ({
  feedback: reduxStore.valueReducer
});

export default connect(mapStateToProps)(withRouter(Review));