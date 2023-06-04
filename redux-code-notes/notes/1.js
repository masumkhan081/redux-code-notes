import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// Action
const incr = () => {
  return { type: "incr" };
};
const decr = () => {
  return { type: "decr" };
};

// Reducer
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "incr":
      return state + 1;
    case "decr":
      return state - 1;
  }
};

// Store
const store = configureStore({ reducer });

store.subscribe(() => console.log("subscribed..", store.getState()));
store.dispatch(incr());
store.dispatch(incr());
store.dispatch(decr());
store.dispatch(incr());
function App() {
  return <div className="App">hello: {store.getState()}</div>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
