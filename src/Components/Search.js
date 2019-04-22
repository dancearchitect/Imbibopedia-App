import React, { Component } from "react";

//https://www.thecocktaildb.com/api/json/v1/1/search.php?s=DRINK_NAME_GOES_HERE

class Search extends Component {
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
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${
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

  //   componentDidMount() {
  //     const searchData = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${
  //       this.state.query
  //     }`;
  //     fetch(searchData)
  //       .then(resp => {
  //         if (!resp.ok) {
  //           throw Error(resp.statusText);
  //         }
  //         return resp.json();
  //       })
  //       .then(data => {
  //         this.setState({
  //           filteredDrinks: data.drinks
  //         });
  //         console.log("search returns", this.state.filteredDrinks);
  //       })
  //       .catch(err => {
  //         console.log(err.message);
  //       });
  //   }

  render() {
    return (
      <div className="search-bar">
        <form>
          <input
            type="text"
            placeholder="Search for a cocktail!"
            onChange={this.searchDrink}
          />
        </form>
      </div>
    );
  }
}

export default Search;
