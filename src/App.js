import React from "react";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
//import logo from "./logo.svg";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/singleroom:slug" component={SingleRoom} />
        <Route exact path="/rooms" component={Rooms} />
        <Route component={Error} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
