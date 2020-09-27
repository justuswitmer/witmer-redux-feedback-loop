import React, { Component } from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import './App.css';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Feeling from '../Feeling/Feeling';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Thanks from '../Thanks/Thanks';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

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
        </div>
      </Router>
    );
  }
}

export default App;
