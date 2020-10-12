import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';
import Header from './Component/Header/Header'
import TinderCards from './Component/TinderCards/TinderCards'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat" >
            <h1>Chat Page</h1>
          </Route>
          <Route path="/" >
            <TinderCards />
          </Route>
        </Switch>
      
      { /* Tinder Cards */}
      { /* Buttons bellow cards */}
      
      { /* Chats screen */}
      { /* Individual chat screen */}
      </Router>
    </div>
  );
}

export default App;
