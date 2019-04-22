import React, { Component } from "react";
import Search from "./Search";

//https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic

class Alcoholic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alcoholicDrinks: [],
      isResolved: null
    };
  }

  componentDidMount() {
    let alcoArray =
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
    fetch(alcoArray)
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        this.setState({
          alcoholicDrinks: data.drinks,
          isResolved: true
        });
        console.log(this.state.alcoholicDrinks);
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  render() {
    if (this.state.isResolved === true) {
      return (
        <div className="alco-drinks-list">
          <h2>Alcoholic Drinks</h2>
          <Search />
          {this.state.alcoholicDrinks.map(drink => {
            return (
              <div className="alco-drinks">
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

export default Alcoholic;
