import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
  render() {
    return (
      <div>
        in Comments
      </div>
    );
  }
}

export default connect()(Comments);