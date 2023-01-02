import React, { useEffect, useState } from 'react'
import './menu.css';
import Recipe from '../Recipe/recipe';
import { Link } from 'react-router-dom';

const Menu = () => {
  
    const APP_ID = "4231d5bd";
    const APP_KEY = "4957696de18001b6d3e213fcfd134d57";
  
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");
  
    useEffect(() => {
      getRecipes()
  
    },[query]);
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2/?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&type=public`);
      const data = await response.json();
      setRecipes(data.hits);
    };
    const updateSearch = e => {
      setSearch(e.target.value);
      console.log(search);
    };
    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
    }
  
    return (
      <div className="App">
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch} />
          <button className="search-button" type="submit">search</button>
        </form>
        <div className="recipes">
        {recipes.map(recipe => {
          console.log(recipe.recipe)
          return <Recipe
            calories={recipe.recipe.calories}
            img={recipe.recipe.image}
            title={recipe.recipe.label}
            ingredients={recipe.recipe.ingredients}
            cautions ={recipe.recipe.cautions}
          />
        })};
        </div>
        <p>
              <Link to="/">Back to Home</Link>
            </p>
      </div>
  
    );

  }
  
  export default Menu;
  