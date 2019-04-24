import React, { Component } from "react";
import SearchName from "./SearchName";
import SearchIngredient from "./SearchIngredient";

class SearchContainer extends Component {
  render() {
    return (
      <div>
        <SearchName />

        <SearchIngredient />
      </div>
    );
  }
}

export default SearchContainer;
