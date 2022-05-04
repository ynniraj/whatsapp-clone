import './App.css';
import React, { useState } from 'react'
import Login from './Login';

import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "./Redux/action";
import Routes from './Routes';


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
        <Routes />
      )}

    </div>
  );
}

export default App;
