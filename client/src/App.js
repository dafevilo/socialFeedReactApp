import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <Route path="/" component={NavBar} />
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
      <Route path="/" component={Footer} />
    </Router>
  );
}

export default App;
