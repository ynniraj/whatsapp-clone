import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'
import React, { useState } from 'react'
import Login from './Login';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "./Redux/action";


function App() {


  const dispatch = useDispatch();
  const token = useSelector((store) => store.login.token);
  const [userToken, setUserToken] = useState(token);
  const localStorageToken = localStorage.getItem("token");
  dispatch(userLogin(localStorageToken));

  return (
    <div className="App">
      {!userToken ? (
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
