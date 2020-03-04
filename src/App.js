import React from "react";
import Homepage from "./pages/homepage/homepage.component";
import "./App.css";
import { Switch, Route } from "react-router-dom";

const Hatspage = () => (
  <div>
    <h1>Hatspage!</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/hats" component={Hatspage} />
      </Switch>
    </div>
  );
}

export default App;
