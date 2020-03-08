import React, { useContext, useState, useEffect } from 'react';
import MealfinderContext from '../context/meal-finder/mealfinderContext';

const Meal = ({ match }) => {
  const mealfinderContext = useContext(MealfinderContext);
  const { meals, meal, getMealById } = mealfinderContext;
  const [ingredientList, setIngredientList] = useState([]);

  useEffect(() => {
    getMealById(match.params.idMeal);

    //eslint-disable-next-line
  }, []);

  const { strMeal, strMealThumb, strCategory, strArea, strInstructions } = meal;

  // const addIngredients = meal => {
  //   const ingredients = [];
  //   for (let i = 1; i <= 20; i++) {
  //     if (meal.strIngredient) {
  //       ingredients.push(meal[`strIngredient${i}`])
  //     }else{
  //       break
  //     }
  //     console.log(meal.strIngredient1)
  //     setIngredientList(ingredients);
  //   }
  // };

  const pairs = Object.entries(meal);

 

  return (
    <div class='single-meal'>
      {console.log(pairs)}
      <h1>{strMeal}</h1>
      <img src={strMealThumb} alt={meals.strMeal} />
      <div class='single-meal-info'>
        {strCategory ? <p>{strCategory}</p> : ''}
        {strArea ? <p>{strArea}</p> : ''}
      </div>
      <div class='main'>
        <p>{strInstructions}</p>
        <h2>Ingredients</h2>
        <ul>
          {/* {addIngredients(meal)} */}
          {/* {ingredientList.map(ing => `<li>${ing}</li>`).join('')} */}
        </ul>
      </div>
    </div>
  );
};

export default Meal;
