import { createElement, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
function App() {
  return (
    <>
      <div>
        <label>UserName</label>
        <input type="text" />

        <label>Password</label>
        <input type="password" /> 

        <button>Login</button>
      </div>
    </>
  );
}

export default App;
