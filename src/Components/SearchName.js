import React, { Component } from "react";
import DrinkRecipe from "./DrinkRecipe";
import SearchIngredient from "./SearchIngredient";

class SearchName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      filteredDrinks: []
    };
  }

  searchDrink = evt => {
    this.setState({
      query: evt.target.value
    });
  };

  submitDrink = evt => {
    evt.preventDefault();
    fetch(
      `https://www.thecocktaildb.com/api/json/v2/8673533/search.php?s=${
        this.state.query
      }`
    )
      .then(resp => {
        if (!resp.ok) {
          throw Error(resp.statusText);
        }
        return resp.json();
      })
      .then(data => {
        this.setState({
          filteredDrinks: data.drinks
        });
      });
  };

  handleBack = () => {
    this.setState({
      filteredDrinks: []
    });
  };

  render() {
    if (this.state.filteredDrinks == false) {
      return (
        <div className="search-bar">
          <form onSubmit={this.submitDrink}>
            <input
              type="text"
              placeholder="Martini? Daiquiri? Sunrise?"
              onChange={this.searchDrink}
            />
          </form>
          <SearchIngredient />
        </div>
      );
    } else {
      return (
        <div>
          <div className="search-bar">
            <form onSubmit={this.submitDrink}>
              <input
                type="text"
                placeholder="Martini? Daiquiri? Sunrise?"
                onChange={this.searchDrink}
              />
            </form>
            <SearchIngredient />
          </div>
          <DrinkRecipe
            selectedDrink={this.state.filteredDrinks}
            handleBack={this.handleBack}
          />
        </div>
      );
    }
  }
}

export default SearchName;
