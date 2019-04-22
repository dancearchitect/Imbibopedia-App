import React, { Component } from "react";
import Search from "./Search";

//https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic

class NonAlcoholic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nonAlcoholicDrinks: [],
      isResolved: null
    };
    console.log("init", this.state.nonAlcoholicDrinks);
  }

  componentDidMount() {
    let nonAlcoArray =
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
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

  render() {
    if (this.state.isResolved === true) {
      return (
        <div className="non-alco-drinks-list">
          <h2>Non-Alcoholic Drinks</h2>
          <Search />
          {this.state.nonAlcoholicDrinks.map(drink => {
            return (
              <div className="non-alco-drinks">
                <li key={drink.idDrink}>{drink.strDrink}</li>
                <img src={drink.strDrinkThumb} className="non-alco-images" alt="cocktail" />
              </div>
            );
          })}
        </div>
      );
    } else {
      return <h2>Mixing Drinks...</h2>;
    }
  }
}

export default NonAlcoholic;
