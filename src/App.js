import './App.css';
import React, { useState } from 'react'
import Login from './Login';

import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "./Redux/action";
import Routes from './Routes';


function App() {


  const dispatch = useDispatch();
  const localStorageToken = localStorage.getItem("token");
  dispatch(userLogin(localStorageToken));
  const token = useSelector((store) => store.login.token);

  return (
    <div className="App">
      {!token ? (
        <Login />
      ) : (
        <Routes />
      )}

    </div>
  );
}

export default App;
