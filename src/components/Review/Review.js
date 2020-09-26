import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Review extends Component {

  postFeedback = (newFeedback) => {
    console.log('in postFeedback');
    axios
      ({
        method: 'POST',
        url: `/feedback`,
        data: newFeedback
      }).then(response => {
        console.log('posting to feedback', response);
      }).catch(err => {
        console.log('error posting to database', err);
      });
  };


  render() {
    return (
      <div>
        <h1>Review Your Feedback</h1>
        <p>Feelings: {this.props.feedback.feeling}</p>
        <p>Understanding: {this.props.feedback.understanding} </p>
        <p>Support: {this.props.feedback.support} </p>
        <p>Comments: {this.props.feedback.comments} </p>
        <button onClick={() => this.postFeedback(this.props.feedback)}>SUBMIT</button>
      </div>
    )
  }
}

const mapStateToProps = (reduxStore) => ({
  feedback: reduxStore.valueReducer
});

export default connect(mapStateToProps)(withRouter(Review));