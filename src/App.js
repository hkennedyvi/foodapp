import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Reservation from './pages/Reservation';
import './App.scss';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/menu">
            <Menu />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/reservation">
            <Reservation />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;