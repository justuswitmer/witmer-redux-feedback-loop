import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Review extends Component {
  render() {
    return (
      <div>
        <h1>Review Your Feedback</h1>
        <p>Feelings: {this.props.feedback.feeling}</p>
        <p>Understanding: {this.props.feedback.understanding} </p>
        <p>Support: {this.props.feedback.support} </p>
        <p>Comments: {this.props.feedback.comments} </p>
        <button>SUBMIT</button>
      </div>
    )
  }
}

const mapStateToProps = (reduxStore) => ({
  feedback: reduxStore.valueReducer
});

export default connect(mapStateToProps)(withRouter(Review));