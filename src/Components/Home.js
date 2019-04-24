import React, { Component } from "react";
import SearchContainer from "./SearchContainer";

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <h2>Welcome to Imbibopedia!</h2>
        <SearchContainer />
      </div>
    );
  }
}

export default Home;
