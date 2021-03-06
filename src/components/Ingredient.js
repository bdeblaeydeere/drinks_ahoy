import React, { Component } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import Cocktail from './Cocktail';


class Ingredient extends Component {
  constructor() {
    super();

    this.state = {
      ingredients: [],
      searchIngredients: "",
      searchIngredient: "",
      value: "",
      drinkIngredientSearch: [],
    }
  }
  // Call to get the list of available ingredients and then populate a select input type
  componentDidMount = () => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
        , {

        })
      .then((response) => {
        response.data.drinks.sort(function(a,b) {
          return (a.strIngredient1.toUpperCase() < b.strIngredient1.toUpperCase())
          ? -1
          : (a.strIngredient1 > b.strIngredient1) ? 1:0;
        })
        this.setState({ 
          ingredients: response.data.drinks 
        })
      })
  }

  handleIngredientChange = async (event) =>  {
    // alert('You chose: '+ this.state.value)
   await this.setState({
      value: event.target.value
    });
    // alert('You chose: '+ this.state.value)

  }

  submitIngredient = async (event) => {
    event.preventDefault();
    axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.value}`
    ,{

    })
    .then((response) => {
      this.setState ( {
        drinkIngredientSearch: response.data.drinks })
    })
  }
  
  render() {
    return (
      <div>
        <h1>Ingredient Search</h1>
        <div className="ingredientList">
          <div>
            <form onSubmit={this.submitIngredient}>
              <select value= {this.state.value} onChange={this.handleIngredientChange}>
                <option selected value="">Select an Ingredient</option>
               
                {this.state.ingredients.map((ingredient, index) => {
                  return (
                    <option key={ingredient.id} 
                    value={ingredient.strIngredient1}> {ingredient.strIngredient1}
                    </option>
                  )}
                )}
              </select>
              <input class="btn btn-primary" type="submit" value="Submit" />
            </form>
          </div>
          <div className="cocktailList">
          {this.state.drinkIngredientSearch.map((drinks) => {
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
      </div>
    )
  }

}

export default Ingredient;