import React, { Component } from "react";
import Search from "./Search";

//https://www.thecocktaildb.com/api/json/v1/1/random.php

class RandomizeDrink extends Component {
  constructor() {
    super();
    this.state = {
      randomDrink: [],
      isResolved: null
    };
  }

  componentDidMount() {
    const randomDrinkFetch =
      "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    fetch(randomDrinkFetch)
      .then(resp => {
        if (!resp.ok) {
          throw Error(resp.statusText);
        }
        return resp.json();
      })
      .then(data => {
        this.setState({
          randomDrink: data.drinks,
          isResolved: true
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  render() {
    if(this.state.isResolved === true){
    return (
      <div className="random-drink-list">
        <h2>Random Cocktail</h2>
        <Search />
        {this.state.randomDrink.map(drink => {
        return (<div className="random-drink"><li key={drink.idDrink}>{drink.strDrink}</li> 
                <img src={drink.strDrinkThumb} />
                <ul>
                <li>{drink.strMeasure1} {drink.strIngredient1}</li>
                <li>{drink.strMeasure2} {drink.strIngredient2}</li>
                <li>{drink.strMeasure3} {drink.strIngredient3}</li>
                <li>{drink.strMeasure4} {drink.strIngredient4}</li>
                </ul>
                <p>{drink.strInstructions}</p></div>)
        })}
      </div>
    );
        }
        else{
            return(<h1>Mixing Drink...</h1>)
        }
    
  }
}

export default RandomizeDrink;
