import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import store from "./store";
import Count from "./cmpnts/Count";
import Control from "./cmpnts/Control";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Count />
        <Control />
        <h3>Redus Practice </h3>
        <button>Click</button>
      </div>
    </Provider>
  );
}

export default App;
