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

class Thanks extends Component {
  render() {
    return (
      <Paper
        id="thanks"
        elevation={3}
      >
        <h4>Thanks for submitting your feedback!</h4>
      </Paper>
    )
  }
}

export default connect(withRouter)(Thanks);