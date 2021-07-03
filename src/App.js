import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./pages/About";
import Home from './pages/Home'
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
  </Router>
  )
}

export default App
