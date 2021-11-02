# Project Three - Overview
Collaborate with a partner on co-development of a front-end React application that utilizes API requests through the UI.  The team must also select a GIT collaboration model that will be used throughout the project to allow collaboration and code versioning.

## Project Description
Our project idea was to develop an easy-to-use drink recipe application utilizing APIs available from www.thecocktaildb.com.  The site, called "Drinks-Ahoy!!" would use a fun light-hearded pirate theme in a nod to brands like "Captain Morgan" or "Sailor Jerry".  With the timeframe we had to work with we decided the application would have the following features:

- Index page with a random drink recipe and details on it
- Search capability for drinks by name
- Browse for drinks by alphabetical/numerical listing
- Browse for drinks by specific ingredient in the drink recipe
- Persistent header on all rendered pages with links to key navigation features.  

WireFrame Links:

Index page: https://wireframe.cc/4acTyV
![076CB07E-345C-4F09-A3DC-2E552B405997_1_201_a](https://user-images.githubusercontent.com/8105789/139915835-a4530846-2f63-4dca-a474-67deb9690f94.jpeg)

Search Results: https://wireframe.cc/vuOlKz

Drinks Alphabetically: https://wireframe.cc/2odmG9

Drinks by Ingredient: https://wireframe.cc/IMoRu3

# APIs
We used four different APis from https://www.thecocktaildb.com/ -

For search by letter we used:

https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${this.state.searchLetter

Random search requests go to:

https://www.thecocktaildb.com/api/json/v1/1/random.php

To search by ingredient we use:

https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list

We also had to use this API to search for drinks by ID number:

https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id


# User Stories:

I am a consumer, I want to see random drinks, So I can get new ideas.

I am a consumer, I want to search by drink name, So I can get the recipe for the drink.

I am a consumer, I want to search by ingredients, So I can see what drinks are made using that ingredient.

I am a consumer, I want to look at drinks by alphabetical listing, So that I can find a drink that starts with a specific letter or letters.

I am a consumer, I want to know what site I am on, So I can use it again.

As a consumer, I want all of the ingredients sorted alphabetially on the dropdown list on the Ingredients page so that I can quickly and easily find an ingredient to search on.



## Libraries used by this

react-router

react-router-dom

axios

Bootswatch

##Time Frames
Day 1 - Application concept agreed upon and finalized, create wireframes, create user stories, and Git repository.  Create shell of the react app. Start initial coding on Header, App, Random and Alphabetical features.
Day 2 - Continue development of Random and Alphabetical, start on Search
Day 3 - Refine development of Random, Alphabetical, Search, start single cocktail render page and ingredient feature.
Day 4-5 Weekend work - continue on refining and completing all basic functionality for each feature.  Investigate ability to use Bootstrap/Bootswatch for styling.
Day 6 - refine any feature code, implement Bootswatch styling.  Deploy to surge.sh.
Day 7 - paperwork, last few tweaks, and final deploy.

## Code Snippet
Each of us had areas during the development process that were challenging that we were able to overcome.  What we are most pleased with is that code developed independently over the weekend for the text search and ingredient features worked perfectly with the cocktail details rendering page.  It was really cool to see our code work so well, almost like plug-and-play.  By utilizing one render page for the cocktail we saved each of us from additional development time, avoided code reuse, and ensured common rendering regardless of what type of search input was used.

## Issues and Resolutions
One challenge was the way the API provided us drink ingredients and their measurements in its response.  Rather than putting multiple ingredients into an array it listed them out like strIngredient1 ... strIngredient15.  This prohibited us from being able to use the .map function and we had to look for alternatives.  We believe that with more time we would have been able to incorporate a For loop, but for now we did use multiple lines of code to reach MVP.

When selecting a drink from the alphabetic search, our initial thought was to pass an array index to the detail page and render the data that had already been retrieved.  We found we couldn't simply pass an array index so we had to make another API call to retrieve the drink by its ID number.

Another problem with the alphabetic search was due to state.  When a button was clicked to list drinks for a given letter, the display refreshed with the drinks previously selected.  For example, the display defaulted to drinks beginning with "A".  If "B" was selected it appeared nothing changed.  THen if "C" was selected the display would list the drinks beginning with "B".  The solution was to insert an "await" statement in the getLetter method so the state could get updated to the new letter before making the next API call.

Formatting with so many potential graphics on the search results was challenging.  We overcame a lot of those and also used bootstrap/bootswatch to help with the styling.  Bootswatch made it pretty easy, but introduces some additional challenges to tweaking after it is implemented.
