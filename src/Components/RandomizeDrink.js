import React, { Component } from 'react';

//https://www.thecocktaildb.com/api/json/v1/1/random.php

class RandomizeDrink extends Component {
    constructor() {
        super();
        this.state = {
          randomDrink: [],
          fetchOK: null
        };
      }
      componentDidMount() {
        this.fetchRandomDrink();
      }
    
      fetchRandomDrink = () => {
        return fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
          .then(resp => {
            if (!resp.ok) {
              throw Error(resp.statusText);
            }
            return resp.json();
          })
          .then(data => {
            this.setState({
              fetchOK: true,
              randomDrink: data.drinks
            });
            return data.drinks;
          })
          .catch(err => {
            console.log(err.message);
          });
      };
    
      renderFetch() {
        if (this.state.fetchOK) {
          return <button onClick={this.fetchRandomDrink}>Hit Me!</button>;
        } else {
          return <h1>Mixing Random Drink...</h1>;
        }
      }
    render() {
        return (
            <div>
                {this.renderFetch()}
            </div>
        )
    }
}



export default RandomizeDrink;