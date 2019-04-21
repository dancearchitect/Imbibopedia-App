import React, { Component } from "react";

//https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic

class Alcoholic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alcoholicDrinks: []
    };
  }

  componentDidMount() {
      let alcoArray = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
    fetch(alcoArray)
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        this.setState({
          alcoholicDrinks: data.drinks
        });
        console.log(this.state.alcoholicDrinks)
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  render() {
    return (
      <div>
        <h1>Alcoholic Drinks</h1>
        <ul>{this.state.alcoholicDrinks.map(drink =>
        <li key={drink.idDrink}>{drink.drinks}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Alcoholic;
