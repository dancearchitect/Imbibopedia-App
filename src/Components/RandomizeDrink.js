import React, { Component } from "react";

//https://www.thecocktaildb.com/api/json/v1/1/random.php

class RandomizeDrink extends Component {
  constructor() {
    super();
    this.state = {
      randomDrink: []
    };
  }

  componentDidMount() {
    const randomDrinkFetch =
      "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    fetch(randomDrinkFetch)
      .then(resp => {
        if (!resp.ok) {
          throw Error(resp.statusText);
        }
        return resp.json();
      })
      .then(data => {
        this.setState({
          randomDrink: data.drinks
        });
        console.log(this.state.randomDrink);
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  render() {
    return (
      <div>
        {this.state.randomDrink.map(drink => (
          <li key={drink.idDrink}>{drink.drinks}</li>
        ))}
      </div>
    );
  }
}

export default RandomizeDrink;
