import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'
// import React, { useState } from 'react'
import Login from './Login';
import { useStateValue } from "./StateProvider"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">

          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>

              <Route path="/">
                <Chat />
              </Route>

            </Switch>

          </Router>
        </div>
      )}

    </div>
  );
}

export default App;
