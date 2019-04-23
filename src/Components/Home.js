import React, { Component } from "react";
import DrinkRecipe from "./DrinkRecipe";

class Home extends Component {
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
        console.log("search returns", this.state.filteredDrinks);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  handleBack = () => {
    this.setState({
      filteredDrinks: []
    });
  };

  render() {
    if(this.state.filteredDrinks.length > 0) {
      return(
       <DrinkRecipe
       selectedDrink={this.state.filteredDrinks}
       handleBack={this.handleBack}
        />
      )
    }
    return (
      <div className="home-page">
        <h2>Welcome to Imbibopedia!</h2>
        <div className="search-bar">
          <form onSubmit={this.submitDrink}>
            <input
              type="text"
              placeholder="Search for a cocktail!"
              onChange={this.searchDrink}
            />
          </form>
          <div>{this.showFilteredDrinks}</div>
        </div>
      </div>
    );
  }
}

export default Home;
