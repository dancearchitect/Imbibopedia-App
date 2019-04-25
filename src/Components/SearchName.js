import React, { Component } from "react";
import DrinkNameSearchResults from "./DrinkNameSearchResults";

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
              placeholder="martini? daiquiri? sunrise?"
              onChange={this.searchDrink}
            />
          </form>
        </div>
      );
    } else {
      return (
        <div className="drink-name-recipes">
          <div className="search-bar">
            <form onSubmit={this.submitDrink}>
              <input
                type="text"
                placeholder="martini? daiquiri? sunrise?"
                onChange={this.searchDrink}
              />
            </form>
          </div>
          <DrinkNameSearchResults
            selectedDrink={this.state.filteredDrinks}
            handleBack={this.handleBack}
          />
        </div>
      );
    }
  }
}

export default SearchName;
