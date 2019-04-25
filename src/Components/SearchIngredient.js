import React, { Component } from "react";
import DrinkRecipe from "./DrinkRecipe";
import DrinkIngredSearchResults from "./DrinkIngredSearchResults";

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

  handleClear = () => {
    this.setState({
      filteredIngredients: []
    });
  };

  render() {
    if (this.state.filteredIngredients.length > 0) {
      if (this.state.selectedDrink.length > 0) {
        return (
          <DrinkIngredSearchResults
            selectedDrink={this.state.selectedDrink}
            handleBack={this.handleBack}
          />
        );
      }
      return (
        <div>
          <div className="search-bar-ingred">
            <form onSubmit={this.submitIngredient}>
              <input
                type="text"
                placeholder="vodka,kahlua,vanilla ice-cream"
                onChange={this.searchIngredient}
              />
            </form>
          </div>
          <div className="search-ingred-drinks-list">
            {this.state.filteredIngredients.map(drink => {
              return (
                <div
                  className="search-ingred-drinks"
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
                    className="drink-images"
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
            placeholder="vodka,kahlua,vanilla ice-cream"
            onChange={this.searchIngredient}
          />
        </form>
      </div>
    );
  }
}

export default SearchIngredient;
