import React, { Component } from 'react';
import { Route, Link, Switch, Redirect,withRouter } from 'react-router-dom'
import Header from "./components/Header";
import './App.css';
import axios from 'axios';
import Alphabetical from './components/Alphabetical';
import Random from './components/Random';
import Search from './components/Search';
import SearchError from './components/SearchError';
import Cocktail from './components/Cocktail';



class App extends Component {
  constructor() {
    super()

    this.state = {
      searchInput: "",
      dataRandom: "",
      drinkState: "",
      drinkSearch: []

    }
  }

  componentDidMount = async () => {
    await axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(response => {
        // console.log("componentDidMount axios call:", response.data)
        this.setState({
          dataRandom: response.data,
          drinkState: response.data.drinks[0]
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  newRandomDrink = (e) => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(response => {
        console.log(response.data)
        this.setState({
          dataRandom: response.data,
          drinkState: response.data.drinks[0]
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  getSearchResult = (e) => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.searchInput}`)
      .then(response => {
        // console.log(response.data.drinks)
        if (response.data.drinks) {
          this.setState({
            drinkSearch: response.data.drinks,
          })
        }
        else {
          this.props.history.push ("/searchError")

          // this.props.history.push ("/")
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleChange = (e) =>{
    // console.log(e);
    e.preventDefault();
    this.setState( {searchInput: e.target.value}) ;
  };

  handleSubmit = async (e) =>{
    // console.log(e);
    e.preventDefault();
    await this.getSearchResult(this.state.searchInput);
    this.props.history.push("/search")
  }


  render() {

    return (
      <div className="App">
        <nav>
          <Link to="/"> <Header /> </Link>
        </nav>
        <Switch>
        <main>
          <div className="searchbox">
        <form onSubmit={this.handleSubmit}>
                <label>
                Search:
                <input type="text"   onChange={this.handleChange}/>
                <button>Go</button>
                </label>
        </form>
            <Route path='/search' 
            exact render={routerProps => (<Search 
            drinkSearch={this.state.drinkSearch}
            {...routerProps}/>)} />
            
            <Route path='/searchError' 
            exact render={routerProps => (<SearchError 
            searchInput={this.state.searchInput}
            {...routerProps}/>)} />
          </div>


          <Route exact path="/" 
              render = {routerProps => (
            <Random 
            {...routerProps}             
            dataRandom={this.state.dataRandom}
              drinkState={this.state.drinkState}
              newRandomDrink={this.newRandomDrink} 
            /> )} />

            <Route path="/alphabetical"
              render = {routerProps => (
              <Alphabetical 
              {...routerProps}   
            />  )} />              

            {/* <Route path="/cocktail/:id"
              render={(routerProps) => (
                <Cocktail
                  {...this.state}    
                  {...routerProps} 
                /> )} /> */}
        </main>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App) ;
