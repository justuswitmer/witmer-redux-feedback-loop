import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Comments extends Component {

  next = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        in Comments
        <button type="submit" onClick={this.next}>Next</button>
      </div>
    );
  }
}

export default connect()(withRouter(Comments));