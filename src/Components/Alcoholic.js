import React, { Component } from "react";
import DrinkRecipe from "./DrinkRecipe";

class Alcoholic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alcoholicDrinks: [],
      isResolved: null,
      selectedDrink: []
    };
  }

  componentDidMount() {
    let alcoArray =
      "https://www.thecocktaildb.com/api/json/v2/8673533/filter.php?a=Alcoholic";
    fetch(alcoArray)
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        this.setState({
          alcoholicDrinks: data.drinks,
          isResolved: true
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  handleClick = evt => {
    evt.stopPropagation();
    fetch(
      `https://www.thecocktaildb.com/api/json/v2/8673533/lookup.php?i=${
        evt.target.id
      }`
    )
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        this.setState({
          selectedDrink: data.drinks
        });
      });
  };

  handleBack = () => {
    this.setState({
      selectedDrink: []
    });
  };

  render() {
    if (this.state.isResolved === true) {
      if (this.state.selectedDrink.length > 0) {
        return (
          <DrinkRecipe
            selectedDrink={this.state.selectedDrink}
            handleBack={this.handleBack}
          />
        );
      }
      return (
        <div>
          <h2>Alcoholic Drinks</h2>
          <div className="alco-drinks-list">
            {this.state.alcoholicDrinks.map(drink => {
              return (
                <div
                  className="alco-drinks"
                  onClick={this.handleClick}
                  id={drink.idDrink}
                >
                  <li
                    onClick={this.handleClick}
                    id={drink.idDrink}
                    key={drink.idDrink}
                  >
                    {drink.strDrink}
                  </li>
                  <img
                    id={drink.idDrink}
                    onClick={this.handleClick}
                    src={drink.strDrinkThumb}
                    className="drink-images"
                    alt="cocktail"
                  />
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return <h2>Mixing Drinks...</h2>;
    }
  }
}

export default Alcoholic;
