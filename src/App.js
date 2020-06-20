import React from 'react';
import Header from './Components/Layout/Header'
import Story from './Components/Story/Story'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Story />
      </div>
    </Router>
  );
}

export default App;
