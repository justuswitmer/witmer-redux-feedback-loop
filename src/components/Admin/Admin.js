import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Paper } from '@material-ui/core';
import './Admin.css';


class Admin extends Component {

  render() {
    return (
      <Paper
        id="paper"
        elevation={3}
      >
        <h1 id="adminFeedback">Feedback Results</h1>
        <table>
          <thead>
            <tr>
              <th>Feeling</th>
              <th>Understanding</th>
              <th>Support</th>
              <th>Comments</th>
              <th>Review</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.feedback.map((feedback, i) =>

              <tr key={i}>
                <td>{feedback.feeling}</td>
                <td>{feedback.understanding}</td>
                <td>{feedback.support}</td>
                <td>{feedback.comments}</td>
                <td>
                  <input
                    type="checkbox"
                    onClick={() => this.props.reviewFeedback(feedback.id)}
                  />
                </td>
                <td>
                  <Button
                    id="formatBtn"
                    variant="contained"
                    color="primary"
                    onClick={() => this.props.deleteFeedback(feedback.id)}
                  >Delete
                </Button>

                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Paper>
    )
  }
}

const mapStateToProps = (reduxState) => ({
  feedback: reduxState.feedbackReducer
})

export default connect(mapStateToProps)(Admin);