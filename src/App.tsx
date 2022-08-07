import React from 'react';
import './App.css';
import {Header} from "./components/Header"
import {BaseRouter} from "./router/BaseRouter"
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <BaseRouter/>
  </div>
  );
}

export default App;
