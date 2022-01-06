import Navbar from "./Navbar";
import styles from "./app.module.css";
import Recipe from "./Recipe";
import { useEffect, useState } from "react";

function App() {
  const APP_ID = "a0691aff";
  const APP_KEY = "1df777c350be4c0f88c922ccd0d2313a";
  const exUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes, setRecipe] = useState([]);
  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    const response = await fetch(exUrl);
    const data = await response.json();
    setRecipe(data.hits);
    console.log(data.hits);
  };

  return (
    <div className={styles.App}>
      <Navbar />
      <div>
        <form className={styles.form}>
          <input className={styles.input} type="text"></input>
          <button className={styles.button}>Search</button>
        </form>
      </div>
      <div className={styles.container}>
        {recipes.map((recipe) => (
          <Recipe
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
          ></Recipe>
        ))}
      </div>
    </div>
  );
}

export default App;
