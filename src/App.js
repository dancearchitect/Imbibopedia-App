import React, { Component } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

import Home from "./Components/Home";
import Alcoholic from "./Components/Alcoholic";
import NonAlcoholic from "./Components/NonAlcoholic";
import RandomizeDrink from "./Components/RandomizeDrink";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/alcoholic">Alcoholic</Link>
            </li>
            <li>
              <Link to="/nonalcoholic">Non-Alcoholic</Link>
            </li>
            <li>
              <Link to="/randomizedrink">Hit Me!</Link>
            </li>
          </ul>
        </nav>
        <header>
          <h1>Imbibopedia</h1>
        </header>
        <main>
          <Route exact path="/" render={Home} />
          <Route path="/alcoholic" component={Alcoholic} />
          <Route path="/nonalcoholic" component={NonAlcoholic} />
          <Route path="/randomizedrink" component={RandomizeDrink} />
        </main>
      </div>
    );
  }
}

export default App;
