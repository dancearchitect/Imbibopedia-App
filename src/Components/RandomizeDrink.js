import React, { Component } from "react";

//https://www.thecocktaildb.com/api/json/v1/1/random.php

class RandomizeDrink extends Component {
  constructor() {
    super();
    this.state = {
      randomDrink: [],
      isResolved: null
    };
  }

  randomDrinkGenerator = () => {
    const randomDrinkFetch =
      "https://www.thecocktaildb.com/api/json/v2/8673533/random.php";

    fetch(randomDrinkFetch)
      .then(resp => {
        if (!resp.ok) {
          throw Error(resp.statusText);
        }
        return resp.json();
      })
      .then(data => {
        this.setState({
          randomDrink: data.drinks,
          isResolved: true
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  componentDidMount() {
    this.randomDrinkGenerator();
  }

  showDrinks = () => {
    return this.state.randomDrink.map(drink => {
      return (
        <div className="random-drink">
          <li key={drink.idDrink}>{drink.strDrink}</li>
          <img src={drink.strDrinkThumb} alt="cocktail" />
          <ul>
            <li>
              {drink.strMeasure1} <br /> {drink.strIngredient1}
            </li>
            <li>
              {drink.strMeasure2} <br /> {drink.strIngredient2}
            </li>
            <li>
              {drink.strMeasure3} <br /> {drink.strIngredient3}
            </li>
            <li>
              {drink.strMeasure4} <br /> {drink.strIngredient4}
            </li>
            <li>
              {drink.strMeasure5} <br /> {drink.strIngredient5}
            </li>
            <li>
              {drink.strMeasure6} <br /> {drink.strIngredient6}
            </li>
            <li>
              {drink.strMeasure7} <br /> {drink.strIngredient7}
            </li>
            <li>
              {drink.strMeasure8} <br /> {drink.strIngredient8}
            </li>
            <li>
              {drink.strMeasure9} <br /> {drink.strIngredient9}
            </li>
            <li>
              {drink.strMeasure10} <br /> {drink.strIngredient10}
            </li>
            <li>
              {drink.strMeasure11} <br /> {drink.strIngredient11}
            </li>
            <li>
              {drink.strMeasure12} <br /> {drink.strIngredient12}
            </li>
            <li>
              {drink.strMeasure13} <br /> {drink.strIngredient13}
            </li>
            <li>
              {drink.strMeasure14} <br /> {drink.strIngredient14}
            </li>
            <li>
              {drink.strMeasure15} <br /> {drink.strIngredient15}
            </li>
          </ul>
          <p>{drink.strInstructions}</p>
        </div>
      );
    });
  };

  render() {
    const checkFetch =
      this.state.isResolved ? (
        this.showDrinks()
      ) : (
        <h2>Mixing Drink...</h2>
      );

    return (
      <div>
        <button className="random-button" onClick={this.randomDrinkGenerator}>Hit me again!</button>
        <div>{checkFetch}</div>
      </div>
    );
  }
}

export default RandomizeDrink;
