import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Understanding extends Component {

  next = () => {
    this.props.history.push('/support');
  }
  render() {
    return (
      <div>
        in Understanding
        <button type="submit" onClick={this.next}>Next</button>
      </div>
    );
  }
}

export default connect()(withRouter(Understanding));