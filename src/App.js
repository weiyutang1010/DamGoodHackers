import React from 'react';
import Header from './Components/Layout/Header'
import Homepage from './Components/Homepage'
import Explore from './Components/Explore'
import About from './Components/About'   

import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" render={props => (
          <React.Fragment>
            <Homepage />
          </React.Fragment>
        )} />
        <Route path="/about" component={About} />
        <Route exact path="/explore" render={props => (
          <React.Fragment>
            <Explore />
          </React.Fragment>
        )} />
      </div>
    </Router>
  );
}


export default App;
