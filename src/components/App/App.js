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
            <Admin />
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
