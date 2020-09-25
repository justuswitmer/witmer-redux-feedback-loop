import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
  render() {
    return (
      <div>
        in Understanding
      </div>
    );
  }
}

export default connect()(Understanding);