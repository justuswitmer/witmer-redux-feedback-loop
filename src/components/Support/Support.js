import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Support extends Component {

  next = () => {
    this.props.history.push('/comments');
  }

  render() {
    return (
      <div>
        in Support
        <button type="submit" onClick={this.next}>Next</button>
      </div>
    );
  }
}

export default connect()(withRouter(Support));