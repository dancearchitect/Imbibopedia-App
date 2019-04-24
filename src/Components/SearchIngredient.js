import React, { Component } from "react";
import DrinkRecipe from "./DrinkRecipe";

class SearchIngredient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      filteredIngredients: [],
      selectedDrink: []
    };
  }

  searchIngredient = evt => {
    this.setState({
      query: evt.target.value
    });
  };

  submitIngredient = evt => {
    evt.preventDefault();
    fetch(
      `https://www.thecocktaildb.com/api/json/v2/8673533/filter.php?i=${
        this.state.query
      }`
    )
      .then(resp => {
        console.log(resp);
        if (!resp.ok) {
          throw Error(resp.statusText);
        }
        return resp.json();
      })
      .then(data => {
        this.setState({
          filteredIngredients: data.drinks
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  };

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
    if (this.state.filteredIngredients.length > 0) {
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
          <div className="search-bar">
            <form onSubmit={this.submitIngredient}>
              <input
                type="text"
                placeholder="vodka,kahlua,oreo cookie"
                onChange={this.searchIngredient}
              />
            </form>
          </div>
          <div className="non-alco-drinks-list">
            {this.state.filteredIngredients.map(drink => {
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
    }
    return (
      <div className="search-bar">
        <form onSubmit={this.submitIngredient}>
          <input
            type="text"
            placeholder="vodka,kahlua,oreo cookie"
            onChange={this.searchIngredient}
          />
        </form>
      </div>
    );
  }
}

export default SearchIngredient;
