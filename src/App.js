import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';
import Header from './Component/Header/Header'
import Chats from './Component/Chats/Chats'
import ChatScreen from './Component/ChatScreen/ChatScreen'
import MainPage from './Component/MainPage/MainPage';

const App = () => {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person" >
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat" >
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/" >
            <Header />
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
