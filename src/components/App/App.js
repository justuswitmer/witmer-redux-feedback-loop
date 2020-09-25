import React, { Component } from 'react';
import { Route, HashRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Feeling from '../Feeling/Feeling';
import Comments from '../Comments/Comments';

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
          <Route path="/support">
            <Support />
          </Route>

          <Route path="/understanding">
            <Understanding />
          </Route>

          <Route path="/feeling">
            <Feeling />
          </Route>

          <Route path="/comments">
            <Comments />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
