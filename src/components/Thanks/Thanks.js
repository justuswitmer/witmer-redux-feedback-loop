import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Paper } from '@material-ui/core';

class Thanks extends Component {
  render() {
    return (
      <Paper
        id="paper"
        elevation={3}
      >
        <h4 id='h4thanks'>Thanks for submitting your feedback!</h4>
      </Paper>
    )
  }
}

export default connect(withRouter)(Thanks);