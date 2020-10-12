import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';
import Header from './Component/Header/Header'
import TinderCards from './Component/TinderCards/TinderCards'
import SwipeButtons from './Component/SwipeButtons/SwipeButtons'
import Chats from './Component/Chats/Chats'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat" >
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/" >
            <Header />
            <TinderCards />
            <SwipeButtons />
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
