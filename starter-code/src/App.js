import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';

import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="bg-primary p-3 mb-4">
          <h1 className="h4 text-left text-white ml-5">WikiCountries</h1>
        </header>
        <div className="container">
          <div className="row">
            <Navbar />
            <Switch>
              <Route exact path="/" render={() => <h1 />} />
              <Route exact path="/:country" component={CountryDetails} />
              <Route render={() => <h1>404</h1>} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
