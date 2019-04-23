import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      filteredDrinks: [],
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
          filteredDrinks: data.drinks,
        });
        console.log("search returns", this.state.filteredDrinks);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

// showFilteredDrinks = () => {
//   if(this.state.filteredDrinks.length > 0) {
//       return (
//         <div>
//             {this.state.filteredDrinks.map((drink) => {
//                 return (
//                     <div>
//                         <li key={drink.idDrink}>{drink.strDrink}</li>
//                         <img src={drink.strDrinkThumb} alt="cocktail" />
//                         <ul>
//             <li>
//               {drink.strMeasure1} {drink.strIngredient1}
//             </li>
//             <li>
//               {drink.strMeasure2} {drink.strIngredient2}
//             </li>
//             <li>
//               {drink.strMeasure3} {drink.strIngredient3}
//             </li>
//             <li>
//               {drink.strMeasure4} {drink.strIngredient4}
//             </li>
//             <li>
//               {drink.strMeasure5} {drink.strIngredient5}
//             </li>
//             <li>
//               {drink.strMeasure6} {drink.strIngredient6}
//             </li>
//             <li>
//               {drink.strMeasure7} {drink.strIngredient7}
//             </li>
//             <li>
//               {drink.strMeasure8} {drink.strIngredient8}
//             </li>
//             <li>
//               {drink.strMeasure9} {drink.strIngredient9}
//             </li>
//             <li>
//               {drink.strMeasure10} {drink.strIngredient10}
//             </li>
//             <li>
//               {drink.strMeasure11} {drink.strIngredient11}
//             </li>
//             <li>
//               {drink.strMeasure12} {drink.strIngredient12}
//             </li>
//             <li>
//               {drink.strMeasure13} {drink.strIngredient13}
//             </li>
//             <li>
//               {drink.strMeasure14} {drink.strIngredient14}
//             </li>
//             <li>
//               {drink.strMeasure15} {drink.strIngredient15}
//             </li>
//           </ul>
//           <p>{drink.strInstructions}</p>
//           </div>
//                 )
//             })}
//         </div>
//       )
//   } else {
//       return <h2>No Drinks Found!</h2>
//   }
// }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.submitDrink}>
          <input
            type="text"
            placeholder="Search for a cocktail!"
            onChange={this.searchDrink}
          />
        </form>
        <div>
            {this.showFilteredDrinks}
        </div>
      </div>
    );
  }
}

export default Search;
