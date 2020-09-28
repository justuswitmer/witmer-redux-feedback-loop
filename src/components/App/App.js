import React, { Component } from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Feeling from '../Feeling/Feeling';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Thanks from '../Thanks/Thanks';
import Admin from '../Admin/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import swal from '@sweetalert/with-react'

class App extends Component {

  componentDidMount = () => {
    this.getFeedback();
  }

  getFeedback = () => {
    console.log('in getFeedback');
    axios({
      method: 'GET',
      url: '/feedback'
    })
      .then(response => {
        console.log('getting Feedback');
        this.props.dispatch({
          type: 'GET_FEEDBACK',
          payload: response.data
        });
      }).catch(err => {
        console.log('eror in getting feedback', err);
      });
  }

  deleteFeedback = (feedbackId) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this feedback!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Feedback has been deleted.", {
          icon: "success",
        });
        console.log('deleting task id:', feedbackId);
        console.log('this is the id to delete', feedbackId);
        axios({
          method: 'DELETE',
          url: `/feedback/${feedbackId}`,
        }).then(response => {
          console.log('response from delete', response);
          this.getFeedback();
        }).catch(err => {
          console.log('we have an error', err);
          alert('error in deleting feedback', err);
        }); // end axios
      } else {
        swal("Feedback was not deleted.");
      }
    }); // end swal 
  } // end deleteFeedback

  reviewFeedback = (feedbackId) => {
    axios({
      method: 'PUT',
      url: `/feedback/${feedbackId}`,
    }).then(response => {
      console.log('response from delete', response);
      this.getFeedback();
    }).catch(err => {
      console.log('we have an error', err);
      alert('error in flagging feedback', err);
    }); // end axios
  } // end reviewFeedback

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br />

          <Route exact path="/">
            <Feeling />
          </Route>

          <Route path="/understanding">
            <Understanding />
          </Route>

          <Route path="/support">
            <Support />
          </Route>

          <Route path="/comments">
            <Comments />
          </Route>

          <Route path="/review">
            <Review />
          </Route>

          <Route path="/thanks">
            <Thanks />
          </Route>

          <Route path="/admin">
            <Admin
              deleteFeedback={this.deleteFeedback}
              reviewFeedback={this.reviewFeedback}
            />
          </Route>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState
})

export default connect(mapStateToProps)(App);
