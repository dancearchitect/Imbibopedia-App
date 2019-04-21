import React, { Component } from "react";

//https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic

class NonAlcoholic extends Component {
    constructor(props) {
        super(props);
        this.state = {
          nonAlcoholicDrinks: []
        };
      }
    
      componentDidMount() {
          let nonAlcoArray = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
        fetch(nonAlcoArray)
          .then(resp => {
            return resp.json();
          })
          .then(data => {
            this.setState({
              nonAlcoholicDrinks: data.drinks
            });
            console.log(this.state.nonAlcoholicDrinks)
          })
          .catch(err => {
            console.log(err.message);
          });
      };
    
      render() {
        return (
          <div>
            <h1>Alcoholic Drinks</h1>
            <ul>{this.state.nonAlcoholicDrinks.map(drink =>
            <li key={drink.idDrink}>{drink.drinks}</li>
            )}
            </ul>
          </div>
        );
      }
    }


export default NonAlcoholic;
