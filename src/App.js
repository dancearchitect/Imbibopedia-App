import React, { Component } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

import Home from "./Components/Home";
import Alcoholic from "./Components/Alcoholic";
import NonAlcoholic from "./Components/NonAlcoholic";

class App extends Component {
  constructor() {
    super();
    this.state = {
      randomDrink: [],
      fetchOK: null
    };
  }
  componentDidMount() {
    this.fetchRandomDrink();
  }

  fetchRandomDrink = () => {
    return fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(resp => {
        if (!resp.ok) {
          throw Error(resp.statusText);
        }
        return resp.json();
      })
      .then(data => {
        this.setState({
          fetchOK: true,
          randomDrink: data.drinks
        });
        return data.drinks;
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  renderFetch() {
    if (this.state.fetchOK) {
      return <button onClick={this.fetchRandomDrink}>Hit Me!</button>;
    } else {
      return <h1>Mixing Random Drink...</h1>;
    }
  }

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
          </ul>
        </nav>
        <header>
          <h1>Imbibopedia</h1>
        </header>
        <main>
          <Route exact path="/" render={Home} />
          <Route path="/alcoholic" component={Alcoholic} />
          <Route path="/nonalcoholic" component={NonAlcoholic} />
          <div>{this.renderFetch()}</div>
        </main>
      </div>
    );
  }
}

export default App;
