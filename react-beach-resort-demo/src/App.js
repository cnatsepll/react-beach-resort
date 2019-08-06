// importing the react library and our css file
import React from "react";
import "./App.css";
// importing the components
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

// react-router-dom is an npm install
// import browser router, the route for the component, and the link pointing to a url
// we are using the switch instead of a specific component so
// we can choose a component based on case use
import { Route, Switch } from "react-router-dom";

// importing the navbar component from our components folder
import Navbar from "./components/Navbar";

function App() {
  return (
    // if the url we get back matches a Route path then we will load that component
    // if we get no matches then the Route without a path will load as default
    // we are using the syntax "exact" so the switch doesnt choose the first thing it matches with
    // this keeps the Route for the homepage from being chosen in each selection
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        {/* the "slug" is the url related to an element that the user interacted with aka "slug"*/}
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
