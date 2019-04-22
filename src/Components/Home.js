import React from "react";
import Search from "./Search";

//https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list
//list all drinks by category

function Home() {
  return (
    <div>
      <h2>Welcome to Imbibopedia!</h2>
      <Search />
    </div>
  );
}

export default Home;
