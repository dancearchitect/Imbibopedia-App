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
        console.log("fetch", this.state.nonAlcoholicDrinks);
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
                <img src={drink.strDrinkThumb} />
              </div>
            );
          })}
        </div>
      );
    } else {
      return <h1>Mixing Drinks...</h1>;
    }
  }
}

export default NonAlcoholic;
