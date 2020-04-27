import React from "react";

import NavBar from "./NavBar";
import VendingMachine from "./VendingMachine";
import Grapes from "./Grapes";
import CheeseAndCrackers from "./CheeseAndCrackers";
import MixedNuts from "./MixedNuts";

import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/cheese-and-crackers">
          <CheeseAndCrackers />
        </Route>
        <Route exact path="/grapes">
          <Grapes />
        </Route>
        <Route exact path="/mixed-nuts">
          <MixedNuts />
        </Route>
        <Route exact path="/">
          <VendingMachine />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
