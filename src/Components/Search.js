import React, { Component } from 'react';

//https://www.thecocktaildb.com/api/json/v1/1/search.php?s=DRINK_NAME_GOES_HERE

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            searchData: []
        }
    }

    componentDidMount() {
        const searchDrink =
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?s={strDrink}";
        fetch(searchDrink)
          .then(resp => {
            if (!resp.ok) {
              throw Error(resp.statusText);
            }
            return resp.json();
          })
          .then(data => {
            this.setState({
              searchData: data.drinks
            });
            console.log(this.state.searchData)
          })
          .catch(err => {
            console.log(err.message);
          });
      }

    render() {
        return (
            <div className="search-bar">
                <input type="text" />
            </div>
        )
    }
}



export default Search;