import React from 'react';
import {Header} from "./components/Header"
import {BaseRouter} from "./router/BaseRouter"


function App() {
  return (
    <div className="App">
      <Header />
      <BaseRouter/>
      
  </div>
  );
}

export default App;
