import React, { Component } from "react";

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
          <ul className="random-ingredient-list">
            <li>
              {drink.strMeasure1} {drink.strIngredient1}
            </li>
            <li>
              {drink.strMeasure2} {drink.strIngredient2}
            </li>
            <li>
              {drink.strMeasure3} {drink.strIngredient3}
            </li>
            <li>
              {drink.strMeasure4} {drink.strIngredient4}
            </li>
            <li>
              {drink.strMeasure5} {drink.strIngredient5}
            </li>
            <li>
              {drink.strMeasure6} {drink.strIngredient6}
            </li>
            <li>
              {drink.strMeasure7} {drink.strIngredient7}
            </li>
            <li>
              {drink.strMeasure8} {drink.strIngredient8}
            </li>
            <li>
              {drink.strMeasure9} {drink.strIngredient9}
            </li>
            <li>
              {drink.strMeasure10} {drink.strIngredient10}
            </li>
            <li>
              {drink.strMeasure11} {drink.strIngredient11}
            </li>
            <li>
              {drink.strMeasure12} {drink.strIngredient12}
            </li>
            <li>
              {drink.strMeasure13} {drink.strIngredient13}
            </li>
            <li>
              {drink.strMeasure14} {drink.strIngredient14}
            </li>
            <li>
              {drink.strMeasure15} {drink.strIngredient15}
            </li>
          </ul>
          <p>{drink.strInstructions}</p>
        </div>
      );
    });
  };

  render() {
    const checkFetch = this.state.isResolved ? (
      this.showDrinks()
    ) : (
      <h2>Mixing Drink...</h2>
    );

    return (
      <div>
        <div className="random-button-container">
          <button className="random-button" onClick={this.randomDrinkGenerator}>
            Hit me again!
          </button>
        </div>
        <div>{checkFetch}</div>
      </div>
    );
  }
}

export default RandomizeDrink;
