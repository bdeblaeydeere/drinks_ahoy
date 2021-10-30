//import { render } from "@testing-library/react";
import React, { Component } from "react";
import './Header.css';
import { Link, Route } from 'react-router-dom';

class Search extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            // console.log(this.state.drinkSearch),

            <div>
                <h1>Search Results</h1>
                <div className="cocktailList">
                    {this.props.drinkSearch.map((drinks) => {
                        return (
                            <div>
                                <Link className="drinkLink" to={`/cocktail/${drinks.idDrink}`}>
                                    <div key={drinks.id}
                                        style={{ backgroundImage: `url(${drinks.strDrinkThumb})` }}>
                                        <p>{drinks.strDrink}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}

                </div>

            </div>

        )
    }
}
export default Search;