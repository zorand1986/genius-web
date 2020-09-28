import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "../src/Components/Home"
import About from '../src/Components/About';
import Dashboard from '../src/Components/Dashboard';

import Header from "../src/Components/Header"

function App() {
  return (
    <div>
      <Router>
      <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/dashboard" exact component={Dashboard}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
