import React, { Component } from "react";

class DrinkRecipe extends Component {
  showRecipe = () => {
    return this.props.selectedDrink.map(drink => {
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
    return (
      <div>
        <button className="back-button" onClick={this.props.handleBack}>
          Go Back!
        </button>
        {this.showRecipe()}
      </div>
    );
  }
}

export default DrinkRecipe;
