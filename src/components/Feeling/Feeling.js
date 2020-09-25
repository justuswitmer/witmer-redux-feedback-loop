import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Feeling extends Component {

  next = () => {
    this.props.history.push('/understanding');
  }

  render() {
    return (
      <div>
        in Feeling
        <button type="submit" onClick={this.next}>Next</button>
      </div>
    );
  }
}

export default connect()(withRouter(Feeling));