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
              <th id="comments">Comments</th>
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



// deleteFeedback = (feedbackId) => {
//   swal({
//     title: "Are you sure?",
//     text: "Once deleted, you will not be able to recover this feedback!",
//     icon: "warning",
//     buttons: true,
//     dangerMode: true,
//   }).then((willDelete) => {
//     if (willDelete) {
//       swal("Feedback has been deleted.", {
//         icon: "success",
//       });
//       console.log('deleting task id:', feedbackId);
//       axios({
//         type: 'DELETE',
//         url: `/feedback/${feedbackId}`,
//       }).then(response => {
//         console.log('response from delete', response);
//       }).catch(err => {
//         console.log('we have an error', err);
//         alert('error in deleting task', err);
//       }); // end ajax
//     } else {
//       swal("Your imaginary file is safe!");
//     }
//   }); // end swal 
// } // end deleteTask