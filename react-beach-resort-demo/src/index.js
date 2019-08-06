import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// importing from react router dom
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { RoomProvider } from "./context";

ReactDOM.render(
  // we are wrapping our entire app (App.js) in the react router
  <RoomProvider>
    <Router>
      <App />
    </Router>
  </RoomProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
