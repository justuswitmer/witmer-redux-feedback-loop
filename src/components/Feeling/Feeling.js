import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
  render() {
    return (
      <div>
        in Feeling
      </div>
    );
  }
}

export default connect()(Feeling);