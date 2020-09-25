import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {
  render() {
    return (
      <div>
        in Support
      </div>
    );
  }
}

export default connect()(Support);