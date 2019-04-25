<h1>Imbibopedia</h1>
https://imbibopedia.herokuapp.com/

My app is going to be a cocktail encyclopedia with recipes.<br /> 
There will also be a randomize link and button to render a random cocktail.<br />



<h3>Software:</h3>
React, JSX, HTML, CSS flex



<h3>Wireframe</h3>
https://wireframe.cc/G1kJAW
<img width="1026" alt="Screen Shot 2019-04-24 at 5 51 21 PM" src="https://user-images.githubusercontent.com/47368206/56696380-9e294b00-66b9-11e9-9128-8a1e839a6f44.png">




<h3>Components</h3>
1.Home<br/>
  - Search Container<br/>
    -- Search Name<br/>
     --- Drink Name Search Result<br/>
    -- Search Ingredient<br/>
     --- Drink Ingredient Search Result<br/>
2.Alcoholic<br/>
  - Drink Recipe</br>
3.NonAlcoholic<br/>
  - Drink Recipe<br/>
4.Randomize Drink<br/>



<h3>MVP</h3>
Users will be able to filter by name, multiple ingredients, alcoholic and non-alcoholic drinks.<br />
Each cocktail will display name, image, description, ingredients and recipe instructions.<br />
  
<h3>APIs:</h3>
<h4>Main Site</h4>
https://www.thecocktaildb.com/api.php
<h4>Implemented APIs</h4>
*Disclaimer: I have a personal API key, these are the free default APIS.*
https://www.thecocktaildb.com/api/json/v1/1/random.php<br />
https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic<br />
https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic<br />
https://www.thecocktaildb.com/api/json/v1/1/search.php?s=DRINK_NAME<br />
https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=DRINK_ID<br />
*Disclaimer: the multi ingredient search only works for Cocktail DB Patreon supporters.*
https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=INGREDIENTS<br />
