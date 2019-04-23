import React, { Component } from "react";
import DrinkRecipe from "./DrinkRecipe";

//https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic

class NonAlcoholic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nonAlcoholicDrinks: [],
      isResolved: null,
      selectedDrink: []
    };
  }

  componentDidMount() {
    let nonAlcoArray =
      "https://www.thecocktaildb.com/api/json/v2/8673533/filter.php?a=Non_Alcoholic";
    fetch(nonAlcoArray)
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        this.setState({
          nonAlcoholicDrinks: data.drinks,
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
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${
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
        console.log("hello");
      })
      .catch(err => {
        console.log(err.message);
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
          <h2>Non-Alcoholic Drinks</h2>
          <div className="non-alco-drinks-list">
            {this.state.nonAlcoholicDrinks.map(drink => {
              return (
                <div
                  className="non-alco-drinks"
                  onClick={this.handleClick}
                  id={drink.idDrink}
                >
                  <li
                    key={drink.idDrink}
                    onClick={this.handleClick}
                    id={drink.idDrink}
                  >
                    {drink.strDrink}
                  </li>
                  <img
                    src={drink.strDrinkThumb}
                    id={drink.idDrink}
                    onClick={this.handlClick}
                    className="non-alco-images"
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

export default NonAlcoholic;
