import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import MovieContainer from './modules/movies/components/Container'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Route exact path="/" component={MovieContainer}/>
        </div>
      </div>
    );
  }
}

export default App;
