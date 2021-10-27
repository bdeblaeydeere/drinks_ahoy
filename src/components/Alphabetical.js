import React, { Component } from 'react';
import axios from 'axios';

class Alphabetical extends Component {
    constructor() {
        super();

        this.state = {
            cocktails: []
        }
    }

    componentDidMount = () => {
        axios
            .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b", {

            })
            .then((response) => {
                this.setState({ cocktails: response.data.drinks })
            })
    }

    render() {
        console.log("cocktails: ", this.state.cocktails)
        return(
        <div>
            {this.state.cocktails.map((cocktail, index) => {
                console.log("cocktails-return: ", this.state.cocktails)
                return(
                    <div key={cocktail.id}>
                        <p>{cocktail.strDrink}</p>
                    </div>                    
                )
            })}
        </div>
        )
    }
}

export default Alphabetical;
