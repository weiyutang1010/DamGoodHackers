import React from 'react';
import Header from './Components/Layout/Header'
import Homepage from './Components/Homepage'
import Explore from './Components/Explore'
import Search from './Components/Search'
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

        <Route exact path="/explore" render={props => (
          <React.Fragment>
            <Explore />
          </React.Fragment>
        )} />

        <Route exact path="/search" render={props => (
          <React.Fragment>
            <Search />
          </React.Fragment>
        )} />

        <Route path="/about" component={About} />
        
      </div>
    </Router>
  );
};


export default App;
