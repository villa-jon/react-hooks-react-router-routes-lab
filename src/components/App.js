import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import NavBar from "./NavBar";

const style = {
  backgroundColor: "blue", 
}

function App() {
  return (
  <div style= {style}>
<NavBar />
<Switch>
  <Route path="/directors">
    <Directors />
  </Route>
  <Route path="/movies">
    <Movies />
  </Route>
  <Route path="/actors">
    <Actors />
  </Route>
  <Route path="/">
    <Home />
  </Route>
</Switch>
  </div>)
}

export default App;
