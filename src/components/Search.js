import React, { Component } from "react";
import './Header.css';
import { Link } from 'react-router-dom';

class Search extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="searchMain">
                <h1 className="searchTitle">Search Results</h1>
                <div className="cocktailList">
                    {this.props.drinkSearch.map((drinks) => {
                        return (
                            <div>
                                <Link className="drinkLink" to={`/cocktail/${drinks.idDrink}`}>
                                    <div className="thumbnailDiv" key={drinks.id}
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