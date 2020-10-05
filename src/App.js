import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from 'Components/Home';
import About from 'Components/About';
import Dashboard from 'Components/Dashboard';
import Header from "Components/Header";
import AuthContextProvider from "./Contexts/AuthContext";
import Deck from 'Components/Deck';
import Sidebar from 'Components/Sidebar';

function App() {
  return (
    <AuthContextProvider>
      <Router>
      <Sidebar/>
      <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/dashboard" exact component={Dashboard}/>
          <Route path="/dashboard/deck/:id" exact component={Deck}/>
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
