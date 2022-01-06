import Navbar from "./Navbar";
import styles from "./app.module.css";
import Recipe from "./Recipe";

import { useEffect, useState } from "react";
import { APP_ID, APP_KEY } from "../const";


function App() {
  const [recipes, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("rice");

  const exUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(exUrl);
    const data = await response.json();
    setRecipe(data.hits);
    console.log(data.hits);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className={styles.App}>
      <Navbar />
      
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            type="text"
            value={search}
            onChange={handleSearch}
          ></input>
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </div>
      
      <div className={styles.container}>
      
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredientLines={recipe.recipe.ingredientLines}
            
          ></Recipe>
          
        ))}
        
        
      </div>
    </div>
  );
}

export default App;
